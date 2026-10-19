
"use client";

import { useState } from "react";
import { services } from "./servicesData";

export default function BookingForm() {
  const [serviceId, setServiceId] = useState(
    services[0]?.id ?? ""
  );
  const [duration, setDuration] = useState("30");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [meetingMode, setMeetingMode] = useState(
    "Online – Google Meet"
  );
  const [discussion, setDiscussion] = useState("");
  const [feedback, setFeedback] = useState("");

  const selectedService = services.find(
    (service) => service.id === serviceId
  );

  function selectService(id: string) {
    setServiceId(id);

    const service = services.find(
      (item) => item.id === id
    );

    if (service) {
      setDuration(String(service.duration));
    }
  }

  function handleMobileChange(value: string) {
    // Allow only digits, spaces, +, hyphens and parentheses.
    // Limit the complete input to 14 characters.
    if (
      /^[0-9+\s()-]*$/.test(value) &&
      value.length <= 14
    ) {
      setMobile(value);
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setFeedback("");

    const request = [
      "CONSULTATION REQUEST",
      "",
      `Service: ${selectedService?.title ?? "Not selected"}`,
      `Duration: ${duration} minutes`,
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Email: ${email}`,
      `Preferred date: ${date}`,
      `Meeting mode: ${meetingMode}`,
      `Discussion requirements: ${
        discussion || "Not specified"
      }`,
      "",
      "Please contact me to confirm availability.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(request);

      setFeedback(
        "Request copied successfully. Paste it into your email or WhatsApp to send it."
      );
    } catch {
      setFeedback(
        "Unable to copy automatically. Please try again using a secure browser connection."
      );
    }
  }

  const inputClass =
    "w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const labelClass =
    "mb-1 block text-sm font-medium text-slate-700";

  // Use today's local date as the minimum selectable date.
  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return (
    <section
      id="booking-form"
      className="scroll-mt-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 lg:p-6"
    >
      {/* Heading */}
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          Consultation Request
        </p>

        <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Schedule Your Session
        </h2>

        <p className="mt-1 text-sm leading-5 text-slate-600">
          Share your details and preferred schedule. We’ll
          contact you to confirm availability.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Service and duration */}
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <label htmlFor="service" className={labelClass}>
              Select Service
            </label>

            <select
              id="service"
              value={serviceId}
              onChange={(event) =>
                selectService(event.target.value)
              }
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

          <fieldset>
            <legend className={labelClass}>
              Session Duration
            </legend>

            <div className="flex min-h-9 flex-wrap items-center gap-x-4 gap-y-1">
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
                    onChange={() => setDuration(minutes)}
                    className="h-4 w-4 accent-blue-700"
                  />
                  {minutes} min
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Name and mobile */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter your full name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="mobile" className={labelClass}>
              Mobile Number
            </label>

            <input
              id="mobile"
              type="tel"
              value={mobile}
              onChange={(event) =>
                handleMobileChange(event.target.value)
              }
              placeholder="+91 9876543210"
              autoComplete="tel"
              inputMode="tel"
              maxLength={14}
              pattern="(\+91[\s-]?)?[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number, optionally prefixed with +91."
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="you@example.com"
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>

        {/* Preferred date and meeting mode */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className={labelClass}>
              Preferred Date
            </label>

            <input
              id="date"
              type="date"
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
              min={minDate}
              required
              className={inputClass}
            />
          </div>

          <fieldset>
            <legend className={labelClass}>
              Meeting Mode
            </legend>

            <div className="space-y-1.5 pt-1">
              {[
                "Online – Google Meet",
                "Offline – Bengaluru (Subject to Availability)",
              ].map((mode) => (
                <label
                  key={mode}
                  className="flex cursor-pointer items-start gap-2 text-sm leading-5 text-slate-700"
                >
                  <input
                    type="radio"
                    name="meetingMode"
                    value={mode}
                    checked={meetingMode === mode}
                    onChange={() => setMeetingMode(mode)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-blue-700"
                  />

                  <span>{mode}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Discussion requirements */}
        <div>
          <label htmlFor="discussion" className={labelClass}>
            What would you like to discuss?{" "}
            <span className="font-normal text-slate-400">
              (Optional)
            </span>
          </label>

          <textarea
            id="discussion"
            value={discussion}
            onChange={(event) =>
              setDiscussion(event.target.value)
            }
            placeholder="Briefly describe your requirements..."
            rows={2}
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Submit */}
        <div className="border-t border-slate-100 pt-3">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            Copy Consultation Request
          </button>

          {feedback && (
            <p
              role="status"
              aria-live="polite"
              className="mt-2 text-sm leading-5 text-slate-600"
            >
              {feedback}
            </p>
          )}

          <div
            role="status"
            className="mt-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-4 text-center"
          >
            <p className="text-lg font-bold leading-snug text-blue-800 sm:text-xl">
              Booking is not open yet.
            </p>
            <p className="mt-1 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              Reservations will be available soon.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
