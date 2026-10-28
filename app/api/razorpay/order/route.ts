import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export const runtime = "nodejs";

const PAID_SERVICES: Record<
  string,
  { title: string; amount: number; duration: number }
> = {
  "sap-mm-mock-interview": {
    title: "SAP MM Mock Interview",
    amount: 100, // ₹1,000 in paise
    duration: 60,
  },
  "resume-job-profile": {
    title: "Resume & Job Profile Preparation",
    amount: 100, // ₹798 in paise
    duration: 60,
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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const serviceId =
      typeof body.serviceId === "string" ? body.serviceId : "";

    const service = PAID_SERVICES[serviceId];
    const booking = body.booking;

    if (!service) {
      return NextResponse.json(
        {
          error:
            "This service is not configured for online payment.",
        },
        { status: 400 }
      );
    }

    if (!booking || typeof booking !== "object") {
      return NextResponse.json(
        { error: "Booking details are required." },
        { status: 400 }
      );
    }

    const requiredFields = [
      "name",
      "email",
      "country_code",
      "mobile",
      "preferred_date",
      "preferred_time",
      "meeting_mode",
    ];

    for (const field of requiredFields) {
      if (
        typeof booking[field] !== "string" ||
        !booking[field].trim()
      ) {
        return NextResponse.json(
          {
            error:
              "Please complete all required booking fields.",
          },
          { status: 400 }
        );
      }
    }

    if (
      booking.name.trim().length < 2 ||
      !/^\d{10}$/.test(booking.mobile) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email)
    ) {
      return NextResponse.json(
        {
          error:
            "Some booking details are invalid. Please review the form.",
        },
        { status: 400 }
      );
    }

    const razorpay = getRazorpay();

    if (!razorpay) {
      return NextResponse.json(
        {
          error:
            "Online payment is not configured yet. Please contact Rise Infotech.",
        },
        { status: 503 }
      );
    }

    const order = await razorpay.orders.create({
      amount: service.amount,
      currency: "INR",
      receipt: `rise_${Date.now()}`,
      notes: {
        service_id: serviceId,
        service_name: service.title,
        name: booking.name.trim().slice(0, 255),
        email: booking.email.trim().slice(0, 255),
        country_code: booking.country_code.slice(0, 10),
        mobile: booking.mobile,
        duration: `${service.duration} minutes`,
        preferred_date: booking.preferred_date.slice(0, 30),
        preferred_time: booking.preferred_time.slice(0, 30),
        meeting_mode: booking.meeting_mode.slice(0, 100),
        discussion: String(
          booking.discussion || "No additional details provided."
        ).slice(0, 250),
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: service.amount,
      currency: "INR",
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);

    return NextResponse.json(
      {
        error:
          "Could not create a payment order. Please try again.",
      },
      { status: 500 }
    );
  }
}