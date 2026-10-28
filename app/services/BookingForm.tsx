"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { services } from "./servicesData";
import { COUNTRIES } from "../../data/countries";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (
        event: string,
        callback: (response: {
          error?: { description?: string };
        }) => void
      ) => void;
    };
  }
}

const PAID_SERVICE_IDS = new Set([
  "sap-mm-mock-interview",
  "resume-job-profile",
]);

interface BookingDetails {
  name: string;
  email: string;
  country_code: string;
  mobile: string;
  service_id: string;
  service_name: string;
  duration: string;
  preferred_date: string;
  preferred_time: string;
  meeting_mode: string;
  discussion: string;
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-razorpay-checkout="true"]'
    );

    if (existing) {
      existing.addEventListener(
        "load",
        () => resolve(Boolean(window.Razorpay)),
        { once: true }
      );
      existing.addEventListener("error", () => resolve(false), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.dataset.razorpayCheckout = "true";
    script.onload = () => resolve(Boolean(window.Razorpay));
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function BookingForm() {
  const [serviceId, setServiceId] = useState(services[0]?.id ?? "");
  const [duration, setDuration] = useState("30");
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [countryIso, setCountryIso] = useState("IN");
  const [countryOpen, setCountryOpen] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [meetingMode, setMeetingMode] = useState(
    "Online – Google Meet"
  );
  const [discussion, setDiscussion] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const inputClass =
    "box-border block w-full min-w-0 max-w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const labelClass =
    "mb-0.5 block text-sm font-medium text-slate-700";

  const today = new Date();

  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent | TouchEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setCountryOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setCountryOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectedService = services.find(
    (service) => service.id === serviceId
  );

  const selectedCountry =
    COUNTRIES.find((country) => country.iso === countryIso) ??
    COUNTRIES[0];

  function selectService(id: string) {
    setServiceId(id);

    const service = services.find((item) => item.id === id);

    if (service) setDuration(String(service.duration));

    setFormMessage(null);
  }

  function handleMobileChange(value: string) {
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting) return;

    setFormMessage(null);

    if (name.trim().length < 2) {
      setFormMessage({
        type: "error",
        text: "Please enter your full name (at least 2 characters).",
      });
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setFormMessage({
        type: "error",
        text: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (!selectedService) {
      setFormMessage({
        type: "error",
        text: "Please select a service.",
      });
      return;
    }

    if (!date || date < minDate) {
      setFormMessage({
        type: "error",
        text: "Please choose today or a future date.",
      });
      return;
    }

    if (!timeValue) {
      setFormMessage({
        type: "error",
        text: "Please select a preferred time.",
      });
      return;
    }

    const booking: BookingDetails = {
      name: name.trim(),
      email: email.trim(),
      country_code: countryCode,
      mobile,
      service_id: selectedService.id,
      service_name: selectedService.title,
      duration: `${selectedService.duration} minutes`,
      preferred_date: date,
      preferred_time: `${timeValue} IST`,
      meeting_mode: meetingMode,
      discussion:
        discussion.trim() || "No additional details provided.",
    };

    setSubmitting(true);

    try {
      // Paid services go through Razorpay.
      if (PAID_SERVICE_IDS.has(selectedService.id)) {
        const razorpayKeyId =
          process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

        if (!razorpayKeyId) {
          throw new Error(
            "Online payment is not configured yet. Please contact Rise Infotech."
          );
        }

        const scriptLoaded = await loadRazorpayScript();

        if (!scriptLoaded || !window.Razorpay) {
          throw new Error(
            "Unable to load the secure payment window. Please try again."
          );
        }

        const orderResponse = await fetch("/api/razorpay/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            serviceId: selectedService.id,
            booking,
          }),
        });

        const orderData = await orderResponse.json();

        if (!orderResponse.ok) {
          throw new Error(
            orderData.error || "Could not start payment."
          );
        }

        const checkout = new window.Razorpay({
          key: razorpayKeyId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "Rise Infotech",
          description: selectedService.title,
          order_id: orderData.orderId,
          prefill: {
            name: booking.name,
            email: booking.email,
            contact: `${booking.country_code}${booking.mobile}`,
          },
          notes: {
            service_name: selectedService.title,
          },
          theme: { color: "#2855D9" },

          handler: async (response: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
          }) => {
            try {
              const verifyResponse = await fetch(
                "/api/razorpay/verify",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(response),
                }
              );

              const verifyData = await verifyResponse.json();

              if (!verifyResponse.ok) {
                throw new Error(
                  verifyData.error || "Payment verification failed."
                );
              }

              setFormMessage({
                type: "success",
                text:
                  "Payment verified successfully. Your booking request has been emailed to Rise Infotech. The team will contact you to confirm your appointment.",
              });
            } catch (verificationError) {
              console.error(
                "Razorpay verification failed:",
                verificationError
              );

              setFormMessage({
                type: "error",
                text:
                  verificationError instanceof Error
                    ? verificationError.message
                    : "Payment was received, but verification is pending. Please contact Rise Infotech with your payment ID.",
              });
            } finally {
              setSubmitting(false);
            }
          },

          modal: {
            ondismiss: () => setSubmitting(false),
          },
        });

        checkout.on(
          "payment.failed",
          (response: {
            error?: { description?: string };
          }) => {
            setFormMessage({
              type: "error",
              text:
                response.error?.description ||
                "Payment failed. Please try again.",
            });
            setSubmitting(false);
          }
        );

        checkout.open();
        return;
      }

      // Free, eligibility-based and enquiry services use EmailJS.
      const serviceIdEnv =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateIdEnv =
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID;
      const publicKeyEnv =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceIdEnv || !templateIdEnv || !publicKeyEnv) {
        throw new Error(
          "Email service is not configured yet. Please contact Rise Infotech."
        );
      }

      await emailjs.send(
        serviceIdEnv,
        templateIdEnv,
        booking,
        { publicKey: publicKeyEnv }
      );

      setFormMessage({
        type: "success",
        text:
          "Your booking request has been submitted successfully. Rise Infotech will contact you to confirm availability.",
      });
    } catch (error) {
      console.error("Booking submission failed:", error);

      setFormMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-3 py-6 sm:gap-7 sm:px-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-10 lg:px-7 lg:py-8">
      {/* LEFT: Supporting content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-w-0 space-y-4 lg:py-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-medium uppercase tracking-wider text-blue-600">
            Consultation Request
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl"
        >
          Let&apos;s Connect –{" "}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
            Your Goals, My Expertise.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.16,
            ease: "easeOut",
          }}
          className="max-w-xl text-base leading-7 text-slate-600"
        >
          Select a service, provide your details, and share your preferred
          schedule and business requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.24,
            ease: "easeOut",
          }}
          className="space-y-3 pt-1"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2855D9]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>

            <div>
              <h3 className="font-semibold text-slate-800">
                Guidance That Fits Your Goals
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Tell us what you want to achieve so we can understand your
                needs and direct your enquiry to the right service.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2855D9]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3.5" y="5" width="17" height="15" rx="2" />
                <path d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14h3m2 0h3" />
              </svg>
            </span>

            <div>
              <h3 className="font-semibold text-slate-800">
                A Schedule That Works for You
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Share your preferred date, time, and meeting mode. Your
                requested slot can be confirmed after availability is checked.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT: Booking form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          delay: 0.08,
          ease: "easeOut",
        }}
        className="min-w-0 w-full"
      >
        <section
          id="booking-form"
          className="w-full min-w-0 scroll-mt-5 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.12),0_4px_10px_-5px_rgba(15,23,42,0.08)] sm:p-4 lg:p-5"
        >
          <div className="mb-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Schedule Your Session
            </h2>
            <p className="mt-1 text-sm leading-5 text-slate-600">
              Share your details and preferred schedule. We’ll contact you to
              confirm availability.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div className="grid gap-2.5 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <div className="min-w-0">
                <label htmlFor="service" className={labelClass}>
                  Select Service
                </label>
                <select
                  id="service"
                  value={serviceId}
                  onChange={(event) => selectService(event.target.value)}
                  required
                  className={inputClass}
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="min-w-0">
                <legend className={labelClass}>Session Duration</legend>
                <div className="flex min-h-8 flex-wrap items-center gap-x-4 gap-y-1">
                  {["30", "60"].map((minutes) => (
                    <label
                      key={minutes}
                      className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
                    >
                      <input
                        type="radio"
                        name="duration"
                        value={minutes}
                        checked={duration === minutes}
                        onChange={() =>
                          setDuration(
                            String(selectedService?.duration ?? minutes)
                          )
                        }
                        disabled
                        className="h-4 w-4 accent-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                      />
                      {minutes} min
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setFormMessage(null);
                  }}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              <div className="min-w-0">
                <label htmlFor="mobile" className={labelClass}>
                  Mobile Number
                </label>

                <div className="flex min-w-0 gap-2">
                  <div
                    ref={countryDropdownRef}
                    className="relative w-[96px] shrink-0"
                  >
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={countryOpen}
                      onClick={() => setCountryOpen((open) => !open)}
                      className={`${inputClass} flex h-full items-center justify-between gap-1 !px-1.5`}
                    >
                      <span className="flex min-w-0 items-center gap-1">
                        <img
                          src={`https://flagcdn.com/w40/${selectedCountry.iso.toLowerCase()}.png`}
                          alt=""
                          className="h-auto w-5 shrink-0"
                        />
                        <span className="text-[11px] font-medium">
                          {selectedCountry.iso}
                        </span>
                      </span>
                      <span className="truncate text-[11px]">
                        {countryCode}
                      </span>
                    </button>

                    {countryOpen && (
                      <div
                        role="listbox"
                        aria-label="Country calling code"
                        className="absolute left-0 top-full z-50 mt-1 max-h-60 w-64 overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
                      >
                        {COUNTRIES.map((country) => (
                          <button
                            key={`${country.iso}-${country.code}`}
                            type="button"
                            role="option"
                            aria-selected={country.iso === countryIso}
                            onClick={() => {
                              setCountryCode(country.code);
                              setCountryIso(country.iso);
                              setCountryOpen(false);
                            }}
                            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-50"
                          >
                            <img
                              src={`https://flagcdn.com/w40/${country.iso.toLowerCase()}.png`}
                              alt=""
                              loading="lazy"
                              className="h-auto w-5 shrink-0"
                            />
                            <span className="min-w-0 flex-1 truncate">
                              {country.name}
                            </span>
                            <span className="shrink-0 text-slate-500">
                              {country.code}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    id="mobile"
                    type="tel"
                    value={mobile}
                    onChange={(event) => {
                      handleMobileChange(event.target.value);
                      setFormMessage(null);
                    }}
                    placeholder="Enter mobile number"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    minLength={4}
                    maxLength={15}
                    pattern="[0-9]{4,15}"
                    title="Enter a phone number containing 4 to 15 digits."
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setFormMessage(null);
                }}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2">
              <div className="w-full min-w-0">
                <label htmlFor="date" className={labelClass}>
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                    setFormMessage(null);
                  }}
                  min={minDate}
                  required
                  className={inputClass}
                />
              </div>

              <div className="min-w-0">
                <label htmlFor="time" className={labelClass}>
                  Preferred Time (IST)
                </label>
                <select
                  id="time"
                  value={timeValue}
                  onChange={(event) => {
                    setTimeValue(event.target.value);
                    setFormMessage(null);
                  }}
                  required
                  className={inputClass}
                  aria-describedby="time-help"
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  {Array.from({ length: 30 }, (_, index) => {
                    const totalMinutes = 9 * 60 + index * 30;
                    const hour24 = Math.floor(totalMinutes / 60);
                    const minutes = totalMinutes % 60;
                    const period = hour24 >= 12 ? "PM" : "AM";
                    const hour12 = hour24 % 12 || 12;
                    const time = `${String(hour12).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${period}`;

                    return (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    );
                  })}
                </select>
                <p
                  id="time-help"
                  className="mt-1 text-xs leading-4 text-slate-500"
                >
                  Indian Standard Time (UTC+05:30)
                </p>
              </div>
            </div>

            <fieldset className="min-w-0">
              <legend className={labelClass}>Meeting Mode</legend>
              <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
                {[
                  "Online – Google Meet",
                  "Offline – Bengaluru (Subject to Availability)",
                ].map((mode) => (
                  <label
                    key={mode}
                    className="flex min-w-0 cursor-pointer items-start gap-2 text-sm leading-5 text-slate-700"
                  >
                    <input
                      type="radio"
                      name="meetingMode"
                      value={mode}
                      checked={meetingMode === mode}
                      onChange={() => {
                        setMeetingMode(mode);
                        setFormMessage(null);
                      }}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-blue-700"
                    />
                    <span>{mode}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="min-w-0">
              <label htmlFor="discussion" className={labelClass}>
                What would you like to discuss?{" "}
                <span className="font-normal text-slate-400">
                  (Optional)
                </span>
              </label>
              <textarea
                id="discussion"
                value={discussion}
                onChange={(event) => {
                  setDiscussion(event.target.value);
                  setFormMessage(null);
                }}
                placeholder="Briefly describe your requirements..."
                rows={2}
                className={`${inputClass} resize-y`}
              />
            </div>

            <div className="border-t border-slate-100 pt-2.5">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting
                  ? "Processing…"
                  : selectedService?.type === "paid"
                    ? `Proceed to Payment — ₹${selectedService.price.toLocaleString("en-IN")}`
                    : "Book Consultation"}
              </button>

              {formMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-2 rounded-lg border px-3 py-2 text-sm ${
                    formMessage.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {formMessage.text}
                </p>
              )}

              <div className="mt-2.5 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-2.5 text-center">
                <p className="text-sm font-semibold text-blue-800">
                  Secure booking requests
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-700">
                  Free services submit directly. Paid services continue to
                  secure Razorpay checkout. Appointment timing is confirmed by
                  our team after reviewing your request.
                </p>
              </div>
            </div>
          </form>
        </section>
      </motion.div>
    </div>
  );
}