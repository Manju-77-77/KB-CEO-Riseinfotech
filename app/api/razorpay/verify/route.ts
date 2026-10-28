import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export const runtime = "nodejs";

const PAID_SERVICES: Record<
  string,
  { amount: number; title: string }
> = {
  "sap-mm-mock-interview": {
    amount: 100,
    title: "SAP MM Mock Interview",
  },
  "resume-job-profile": {
    amount: 100,
    title: "Resume & Job Profile Preparation",
  },
};

function getRazorpay() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

function safeEqualHex(a: string, b: string) {
  if (
    !/^[a-f0-9]+$/i.test(a) ||
    !/^[a-f0-9]+$/i.test(b) ||
    a.length !== b.length
  ) {
    return false;
  }

  return timingSafeEqual(
    Buffer.from(a, "hex"),
    Buffer.from(b, "hex")
  );
}

async function sendBookingEmail(
  templateParams: Record<string, string>
) {
  const serviceId =
    process.env.EMAILJS_SERVICE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

  const templateId =
    process.env.EMAILJS_BOOKING_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID;

  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY ||
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS booking environment variables are not configured."
    );
  }

  const response = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    }
  );

  if (!response.ok) {
    const message = await response
      .text()
      .catch(() => "EmailJS send failed");

    throw new Error(
      `EmailJS send failed: ${message.slice(0, 300)}`
    );
  }
}

export async function POST(request: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await request.json();

    if (
      typeof razorpay_order_id !== "string" ||
      typeof razorpay_payment_id !== "string" ||
      typeof razorpay_signature !== "string"
    ) {
      return NextResponse.json(
        {
          error:
            "Payment verification details are incomplete.",
        },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const razorpay = getRazorpay();

    if (!keySecret || !razorpay) {
      return NextResponse.json(
        {
          error: "Payment verification is not configured.",
        },
        { status: 503 }
      );
    }

    const expectedSignature = createHmac("sha256", keySecret)
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    if (
      !safeEqualHex(expectedSignature, razorpay_signature)
    ) {
      return NextResponse.json(
        {
          error: "Payment signature could not be verified.",
        },
        { status: 400 }
      );
    }

    const [order, payment] = await Promise.all([
      razorpay.orders.fetch(razorpay_order_id),
      razorpay.payments.fetch(razorpay_payment_id),
    ]);

    const notes = (order.notes || {}) as Record<string, string>;
    const service = PAID_SERVICES[notes.service_id];

    if (
      !service ||
      order.currency !== "INR" ||
      order.amount !== service.amount
    ) {
      return NextResponse.json(
        {
          error:
            "The payment order does not match a configured service.",
        },
        { status: 400 }
      );
    }

    if (
      payment.order_id !== order.id ||
      payment.amount !== service.amount ||
      payment.currency !== "INR"
    ) {
      return NextResponse.json(
        {
          error: "Payment details do not match the order.",
        },
        { status: 400 }
      );
    }

    // Only send a paid booking email after Razorpay confirms capture.
    if (payment.status !== "captured") {
      return NextResponse.json(
        {
          error:
            "Payment has not been captured yet. Please contact Rise Infotech if your account was charged.",
        },
        { status: 409 }
      );
    }

    await sendBookingEmail({
      name: notes.name || "",
      email: notes.email || "",
      country_code: notes.country_code || "",
      mobile: notes.mobile || "",
      service_name: service.title,
      duration: notes.duration || "60 minutes",
      preferred_date: notes.preferred_date || "",
      preferred_time: notes.preferred_time || "",
      meeting_mode: notes.meeting_mode || "",
      discussion:
        notes.discussion || "No additional details provided.",
      payment_status: payment.status,
      payment_id: payment.id,
      payment_amount: `₹${(
        payment.amount / 100
      ).toLocaleString("en-IN")}`,
    });

    return NextResponse.json({
      verified: true,
      paymentId: payment.id,
    });
  } catch (error) {
    console.error(
      "Razorpay payment verification failed:",
      error
    );

    return NextResponse.json(
      {
        error:
          "We could not finish payment verification or send the booking email. Please contact Rise Infotech with your Razorpay payment ID.",
      },
      { status: 500 }
    );
  }
}