
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Send,
  CheckCircle2,
  GraduationCap,
  BriefcaseBusiness,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  course: string;
  preferredMode: string;
  message: string;
  consent: boolean;
};

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  course: "",
  preferredMode: "",
  message: "",
  consent: false,
};

const INTERESTS = [
  "SAP / IT Training",
  "Career Mentorship",
  "Corporate & Enterprise Solutions",
  "SAP Consulting",
  "General Inquiry",
];

const COURSES: Record<string, string[]> = {
  "SAP / IT Training": [
    "SAP MM",
    "SAP SD",
    "SAP FICO",
    "SAP ABAP",
    "SAP BASIS",
    "SAP S/4HANA",
    "SAP Ariba",
    "SAP PP",
    "SAP QM",
    "SAP EWM",
    "AI Powered Data Analytics",
    "Azure Data Engineering",
    "Workshops & Bootcamps",
    "Corporate Training",
    "Other SAP / IT Training",
  ],
  "Career Mentorship": [
    "SAP Career Guidance",
    "Career Transition to SAP",
    "Interview Preparation",
    "Resume and Career Guidance",
    "Career Mentorship & Support",
  ],
  "Corporate & Enterprise Solutions": [
    "Corporate SAP Training",
    "Enterprise SAP Consulting",
    "SAP S/4HANA Implementation",
    "Customized Corporate Training",
    "End-to-End SAP Projects",
  ],
  "SAP Consulting": [
    "SAP MM Consulting",
    "SAP S/4HANA Consulting",
    "Implementation and Support",
    "Other SAP Consulting",
  ],
  "General Inquiry": ["General Inquiry", "Other"],
};

const MODES = ["Online", "Classroom", "Need Guidance"];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

function Dropdown({
  label,
  placeholder,
  value,
  options,
  open,
  disabled = false,
  onToggle,
  onSelect,
  buttonRef,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  open: boolean;
  disabled?: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const id = label === "I'm Interested In" ? "interest" : "course";

  return (
    <div className="relative">
      <label htmlFor={`${id}-dropdown`} className={labelClass}>
        {label} <span className="text-blue-600">*</span>
      </label>

      <button
        ref={buttonRef}
        id={`${id}-dropdown`}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={onToggle}
        className={`${inputClass} flex items-center justify-between gap-3 text-left`}
      >
        <span className={value ? "text-slate-900" : "text-slate-400"}>
          {value || placeholder}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={label}
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-52 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-xl"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => onSelect(option)}
              className={`w-full rounded-lg px-3.5 py-2 text-left text-sm transition-colors duration-150 ${
                value === option
                  ? "bg-blue-50 font-medium text-blue-700"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ConsultationForm() {
  const [form, setForm] = useState<FormData>(() => ({ ...INITIAL_FORM }));
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [openDropdown, setOpenDropdown] = useState<"interest" | "course" | null>(null);

  const interestRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const interestButtonRef = useRef<HTMLButtonElement>(null);
  const courseButtonRef = useRef<HTMLButtonElement>(null);

  const courses = COURSES[form.interest] ?? [];

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !interestRef.current?.contains(target) &&
        !courseRef.current?.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const updateField = (name: string, value: string | boolean) => {
    setForm((previous) => ({
      ...previous,
      [name]: value,
      ...(name === "interest" ? { course: "" } : {}),
    }));
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^\d{10}$/.test(phone) ||
      !INTERESTS.includes(form.interest) ||
      !courses.includes(form.course) ||
      message.length > 2000 ||
      !form.consent
    ) {
      setStatus("error");

      if (!INTERESTS.includes(form.interest)) {
        setOpenDropdown("interest");
        interestButtonRef.current?.focus();
      } else if (!courses.includes(form.course)) {
        setOpenDropdown("course");
        courseButtonRef.current?.focus();
      }
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          phone,
          interest: form.interest,
          course: form.course,
          preferred_mode: form.preferredMode || "Need Guidance",
          message: message || "No additional message provided.",
          consent: "Yes",
          submitted_at: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        },
        { publicKey }
      );

      setForm({ ...INITIAL_FORM });
      setOpenDropdown(null);
      setStatus("success");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <section
      id="consultation-form"
      aria-labelledby="consultation-heading"
      className="bg-slate-50 px-5 py-12 sm:px-6 md:py-16"
    >

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        {/* Introduction */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <MessageCircle className="h-4 w-4" />
            Free Consultation
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Book Your Free{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              SAP Career Consultation
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Explore SAP career opportunities, professional training, and
            enterprise consulting solutions. Share your requirements and
            connect with our expert team.
          </p>

          <div className="mt-6 space-y-4">
            {[
              [GraduationCap, "Personalized Expert Guidance"],
              [CheckCircle2, "SAP & IT Training Programs"],
              [BriefcaseBusiness, "Career Mentorship & Support"],
              [ShieldCheck, "Corporate & Enterprise Solutions"],
            ].map(([Icon, title]) => {
              const ItemIcon = Icon as typeof GraduationCap;
              return (
                <div
                  key={title as string}
                  className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <ItemIcon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {title as string}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_-30px_rgba(15,23,42,0.25)]">
          <div className="border-b border-slate-200 bg-gradient-to-r from-blue-50/80 to-cyan-50/60 px-5 py-4 sm:px-6">
            <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
              Consultation Details
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">
              Tell us about yourself and your requirements. Our team will get
              in touch with you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6">
            {/* Name and email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="consultation-name" className={labelClass}>
                  Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  id="consultation-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Enter your full name"
                  maxLength={100}
                  required
                  disabled={loading}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="consultation-email" className={labelClass}>
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Enter your email"
                  maxLength={254}
                  required
                  disabled={loading}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone and interest */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="consultation-phone" className={labelClass}>
                  Phone Number <span className="text-blue-600">*</span>
                </label>
                <input
                  id="consultation-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={form.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  required
                  disabled={loading}
                  className={inputClass}
                />
              </div>

              <div ref={interestRef} className="relative">
                <Dropdown
                  label="I'm Interested In"
                  placeholder="Select an area of interest"
                  value={form.interest}
                  options={INTERESTS}
                  open={openDropdown === "interest"}
                  disabled={loading}
                  buttonRef={interestButtonRef}
                  onToggle={() =>
                    setOpenDropdown((current) =>
                      current === "interest" ? null : "interest"
                    )
                  }
                  onSelect={(value) => {
                    updateField("interest", value);
                    setOpenDropdown(null);
                  }}
                />
              </div>
            </div>

            {/* Course */}
            <div ref={courseRef} className="relative">
              <Dropdown
                label="Select Your Course"
                placeholder="Select a course"
                value={form.course}
                options={courses}
                open={openDropdown === "course"}
                disabled={loading || !form.interest}
                buttonRef={courseButtonRef}
                onToggle={() => {
                  if (!form.interest) {
                    setStatus("error");
                    setOpenDropdown("interest");
                    interestButtonRef.current?.focus();
                    return;
                  }
                  setOpenDropdown((current) =>
                    current === "course" ? null : "course"
                  );
                }}
                onSelect={(value) => {
                  updateField("course", value);
                  setOpenDropdown(null);
                }}
              />
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Course options change based on your selected area of interest.
              </p>
            </div>

            {/* Training mode */}
            <fieldset>
              <legend className={labelClass}>Preferred Training Mode</legend>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {MODES.map((mode) => (
                  <label
                    key={mode}
                    className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700"
                  >
                    <input
                      type="radio"
                      name="preferredMode"
                      value={mode}
                      checked={form.preferredMode === mode}
                      onChange={(e) => updateField("preferredMode", e.target.value)}
                      disabled={loading}
                      className="h-4 w-4 accent-blue-600"
                    />
                    {mode}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Message */}
            <div>
              <label htmlFor="consultation-message" className={labelClass}>
                Message / Questions{" "}
                <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <textarea
                id="consultation-message"
                name="message"
                rows={3}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Tell us about your career goals or questions..."
                maxLength={2000}
                disabled={loading}
                className={`${inputClass} min-h-20 resize-y`}
              />
              <p className="mt-1 text-right text-xs text-slate-400">
                {form.message.length}/2000
              </p>
            </div>

            {/* Consent */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
              <label
                htmlFor="consultation-consent"
                className="flex cursor-pointer items-start gap-3"
              >
                <input
                  id="consultation-consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => updateField("consent", e.target.checked)}
                  required
                  disabled={loading}
                  className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                />
                <span className="text-sm leading-5 text-slate-600">
                  I agree to be contacted by Rise Infotech regarding my enquiry
                  and acknowledge the{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-800"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    Request Free Consultation
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="flex items-center gap-2 text-xs leading-5 text-slate-500">
                <ShieldCheck className="h-4 w-4 shrink-0 text-blue-600" />
                No consultation fee for initial enquiries · No obligation
              </p>
            </div>

            {status === "success" && (
              <div
                role="status"
                aria-live="polite"
                className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-3 text-sm leading-5 text-green-800"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <p>
                  Thank you! Your consultation request has been submitted
                  successfully. Our team will contact you shortly.
                </p>
              </div>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-5 text-red-700"
              >
                Please complete all required fields, select an area of interest
                and a course, enter a valid 10-digit phone number, and agree to
                the consent statement. If submission still fails, please try
                again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}