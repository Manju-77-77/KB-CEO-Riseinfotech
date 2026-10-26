
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { services } from "./servicesData";
import { COUNTRIES } from "../../data/countries";

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
  const [timePeriod, setTimePeriod] = useState<"AM" | "PM">("AM");
  const [meetingMode, setMeetingMode] = useState(
    "Online – Google Meet"
  );
  const [discussion, setDiscussion] = useState("");

  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const inputClass =
    "w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const labelClass =
    "mb-1 block text-sm font-medium text-slate-700";

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
      if (event.key === "Escape") {
        setCountryOpen(false);
      }
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

    if (service) {
      setDuration(String(service.duration));
    }

    setFormMessage(null);
  }

  function handleMobileChange(value: string) {
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
    }
  }

  function handleTimeChange(value: string) {
    // Keep only digits and allow HHMM to be entered as HH:MM.
    const digits = value.replace(/\D/g, "").slice(0, 4);

    let formatted = digits;

    if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}:${digits.slice(2)}`;
    }

    setTimeValue(formatted);
    setFormMessage(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

    const timeMatch = timeValue.match(/^(\d{2}):(\d{2})$/);

    if (!timeMatch) {
      setFormMessage({
        type: "error",
        text: "Please enter the time in HH:MM format.",
      });
      return;
    }

    const hours = Number(timeMatch[1]);
    const minutes = Number(timeMatch[2]);

    if (
      hours < 1 ||
      hours > 12 ||
      minutes < 0 ||
      minutes > 59
    ) {
      setFormMessage({
        type: "error",
        text: "Enter a valid time, such as 09:30 AM or 06:45 PM.",
      });
      return;
    }

    const formattedTime = `${timeValue} ${timePeriod} IST`;

    // Test mode only. Nothing is sent or saved.
    setFormMessage({
      type: "success",
      text: `Form validation passed for ${formattedTime}. This is a test only—your request has not been sent or saved.`,
    });
  }

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12 lg:px-8 lg:py-12">
      {/* LEFT: Supporting content based on the existing booking form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-w-0 space-y-5 lg:py-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium uppercase tracking-wider text-blue-600">
            Consultation Request
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
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
          transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
          className="max-w-xl text-base leading-7 text-slate-600"
        >
          Select a service, provide your details, and share your preferred
          schedule and business requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
          className="space-y-4 pt-2"
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

      {/* RIGHT: Existing booking form. Its fields and internal layout are preserved. */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        className="min-w-0 w-full"
      >
        <section
          id="booking-form"
          className="w-full min-w-0 scroll-mt-5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.12),0_4px_10px_-5px_rgba(15,23,42,0.08)] sm:p-5 lg:p-6"
        >
      <div className="mb-4">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Schedule Your Session
        </h2>

        <p className="mt-1 text-sm leading-5 text-slate-600">
          Share your details and preferred schedule. We’ll contact you to
          confirm availability.
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

        {/* Name and mobile */}
        <div className="grid gap-3 sm:grid-cols-2">
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

                  <span className="truncate text-[11px]">{countryCode}</span>
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

        {/* Email */}
        <div>
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

        {/* Preferred date and time */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="min-w-0">
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

          {/* Fixed two-column layout prevents the time input collapsing */}
          <div className="min-w-0">
            <label htmlFor="time" className={labelClass}>
              Preferred Time (IST)
            </label>

            <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_5rem] items-stretch gap-2">
              <input
                id="time"
                type="text"
                inputMode="numeric"
                value={timeValue}
                onChange={(event) => handleTimeChange(event.target.value)}
                placeholder="HH:MM"
                maxLength={5}
                required
                className={`${inputClass} !w-full`}
                aria-describedby="time-help"
                autoComplete="off"
              />

              <select
                aria-label="AM or PM"
                value={timePeriod}
                onChange={(event) => {
                  setTimePeriod(event.target.value as "AM" | "PM");
                  setFormMessage(null);
                }}
                className={`${inputClass} !w-full !px-2`}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>

            <p
              id="time-help"
              className="mt-1 text-xs leading-4 text-slate-500"
            >
              Indian Standard Time (UTC+05:30)
            </p>
          </div>
        </div>

        {/* Meeting mode */}
        <fieldset>
          <legend className={labelClass}>Meeting Mode</legend>

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

        {/* Discussion requirements */}
        <div>
          <label htmlFor="discussion" className={labelClass}>
            What would you like to discuss?{" "}
            <span className="font-normal text-slate-400">(Optional)</span>
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

        {/* Submit */}
        <div className="border-t border-slate-100 pt-3">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Validate Form (Test Only)
          </button>

          {formMessage && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-3 rounded-lg border px-3 py-2 text-sm ${
                formMessage.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {formMessage.text}
            </p>
          )}

          <div className="mt-3 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-blue-800">
              Test mode — booking is not connected yet.
            </p>

            <p className="mt-1 text-xs leading-relaxed text-slate-700">
              This button checks the form locally only. No request is sent,
              stored, or copied. Zoho CRM integration is required before live
              bookings can be enabled.
            </p>
          </div>
        </div>
      </form>
        </section>
      </motion.div>
    </div>
  );
}
