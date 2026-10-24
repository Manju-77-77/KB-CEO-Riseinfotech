
"use client";

import { useEffect, useRef, useState } from "react";
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
  const timeInputRef = useRef<HTMLInputElement>(null);
  const pendingTimeCaret = useRef<number | null>(null);

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeDigits, setTimeDigits] = useState("");
  const [meetingMode, setMeetingMode] = useState("Online – Google Meet");
  const [discussion, setDiscussion] = useState("");

  const time = `${timeDigits.slice(0, 2).padEnd(2, "H")}:${timeDigits
    .slice(2, 4)
    .padEnd(2, "M")}`;

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

  useEffect(() => {
    if (pendingTimeCaret.current !== null && timeInputRef.current) {
      const caret = pendingTimeCaret.current;
      timeInputRef.current.setSelectionRange(caret, caret);
      pendingTimeCaret.current = null;
    }
  }, [timeDigits]);

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
  }

  function handleMobileChange(value: string) {
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
    }
  }

  function handleTimeKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (/^[0-9]$/.test(event.key)) {
      event.preventDefault();

      setTimeDigits((current) => {
        if (current.length >= 4) return current;

        const next = `${current}${event.key}`;

        pendingTimeCaret.current =
          next.length < 2
            ? next.length
            : next.length === 2
              ? 3
              : next.length + 1;

        return next;
      });

      return;
    }

    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();

      setTimeDigits((current) => {
        const next = current.slice(0, -1);

        pendingTimeCaret.current =
          next.length < 2
            ? next.length
            : next.length === 2
              ? 3
              : next.length + 1;

        return next;
      });

      return;
    }

    if (
      event.key === "Tab" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "Home" ||
      event.key === "End" ||
      event.ctrlKey ||
      event.metaKey
    ) {
      return;
    }

    if (event.key.length === 1) {
      event.preventDefault();
    }
  }

  function handleTimePaste(
    event: React.ClipboardEvent<HTMLInputElement>
  ) {
    event.preventDefault();

    const pastedDigits = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);

    setTimeDigits(pastedDigits);

    pendingTimeCaret.current =
      pastedDigits.length < 2
        ? pastedDigits.length
        : pastedDigits.length === 2
          ? 3
          : pastedDigits.length + 1;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Submissions remain disabled until the Zoho CRM integration is configured.
  }

  const inputClass =
    "w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const labelClass = "mb-1 block text-sm font-medium text-slate-700";

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
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          Consultation Request
        </p>

        <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
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

          <fieldset>
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
                      setDuration(String(selectedService?.duration ?? minutes))
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
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
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

            <div className="flex min-w-0 gap-2">
              <div
                ref={countryDropdownRef}
                className="relative w-[112px] shrink-0"
              >
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={countryOpen}
                  onClick={() => setCountryOpen((open) => !open)}
                  className={`${inputClass} flex h-full items-center justify-between gap-1 px-2`}
                >
                  <span className="flex min-w-0 items-center gap-1.5">
                    <img
                      src={`https://flagcdn.com/w40/${selectedCountry.iso.toLowerCase()}.png`}
                      alt=""
                      className="h-auto w-5 shrink-0"
                    />

                    <span className="text-xs font-medium">
                      {selectedCountry.iso}
                    </span>
                  </span>

                  <span className="truncate text-xs">{countryCode}</span>
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
                onChange={(event) =>
                  handleMobileChange(event.target.value)
                }
                placeholder="10-digit number"
                autoComplete="tel-national"
                inputMode="numeric"
                minLength={10}
                maxLength={10}
                pattern="[0-9]{10}"
                title="Enter exactly 10 digits."
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
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>

        {/* Preferred date and time */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className={labelClass}>
              Preferred Date
            </label>

            <input
              id="date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              min={minDate}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="time" className={labelClass}>
              Preferred Time
            </label>

            <input
              ref={timeInputRef}
              id="time"
              type="text"
              value={time}
              onKeyDown={handleTimeKeyDown}
              onPaste={handleTimePaste}
              onChange={() => {
                // Input is controlled by the time mask.
              }}
              placeholder="HH:MM"
              inputMode="numeric"
              autoComplete="off"
              aria-describedby="time-help"
              required
              className={inputClass}
            />

            <p id="time-help" className="mt-1 text-xs text-slate-500">
              Enter four digits (24-hour time), e.g. 0930 for 09:30.
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
                  onChange={() => setMeetingMode(mode)}
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
            onChange={(event) => setDiscussion(event.target.value)}
            placeholder="Briefly describe your requirements..."
            rows={2}
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Submit */}
        <div className="border-t border-slate-100 pt-3">
          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="w-full cursor-not-allowed rounded-lg bg-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600"
          >
            Booking Temporarily Unavailable
          </button>

          <div
            role="status"
            aria-live="polite"
            className="mt-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-4 text-center"
          >
            <p className="text-lg font-bold leading-snug text-blue-800 sm:text-xl">
              Online booking is temporarily unavailable.
            </p>

            <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:text-base">
              We’re preparing the booking system. Please check back soon.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
