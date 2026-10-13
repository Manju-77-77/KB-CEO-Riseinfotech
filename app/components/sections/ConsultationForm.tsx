"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export default function ConsultationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS configuration is incomplete. Check your .env.local file."
      );
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
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          course: form.course,
          message: form.message.trim(),
        },
        { publicKey }
      );

      setForm(initialForm);
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
      className="scroll-mt-28 bg-slate-50 px-5 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Free Consultation
          </span>

          <h2
            id="consultation-heading"
            className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Book Your Free Career Consultation
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Interested in SAP training or enterprise consulting? Share your
            details and your area of interest to get started.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Discuss your career goals",
              "Explore relevant SAP courses",
              "Understand training options",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation form */}
        <div className="border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
            <h3 className="text-xl font-bold text-slate-950">
              Consultation Details
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill in your details and select the course you are interested in.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-7">
            {/* Name and email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="consultation-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name *
                </label>

                <input
                  id="consultation-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  disabled={loading}
                  className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="consultation-email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email Address *
                </label>

                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                  className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
                />
              </div>
            </div>

            {/* Phone and course */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="consultation-phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone Number *
                </label>
  
                  <input
                    id="consultation-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={form.phone}
                    onChange={(event) => {
                      const digits = event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

                      setForm((previous) => ({
                        ...previous,
                        phone: digits,
                      }));

                      setStatus("idle");
                    }}
                    placeholder="Enter 10-digit phone number"
                    pattern="[0-9]{10}"
                    minLength={10}
                    maxLength={10}
                    title="Please enter exactly 10 digits."
                    required
                    disabled={loading}
                    className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
                  />

              </div>

              <div>
                <label
                  htmlFor="consultation-course"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Course *
                </label>

                <select
                  id="consultation-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
                >
                  <option value="">Select a course</option>

                  <optgroup label="SAP ERP">
                    <option value="SAP MM">SAP MM</option>
                    <option value="SAP SD">SAP SD</option>
                    <option value="SAP FICO">SAP FICO</option>
                    <option value="SAP ABAP">SAP ABAP</option>
                    <option value="SAP BASIS">SAP BASIS</option>
                  </optgroup>

                  <optgroup label="AI & Data Science">
                    <option value="AI Powered Data Analytics">
                      AI Powered Data Analytics
                    </option>
                    <option value="Azure Data Engineering">
                      Azure Data Engineering
                    </option>
                  </optgroup>

                  <optgroup label="Other Programs">
                    <option value="Workshops & Bootcamps">
                      Workshops & Bootcamps
                    </option>
                    <option value="Corporate Training">
                      Corporate Training
                    </option>
                  </optgroup>

                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="consultation-message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Message
              </label>

              <textarea
                id="consultation-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your career goals or questions..."
                disabled={loading}
                className="w-full resize-y border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Sending..." : "Book Free Consultation"}
              {!loading && <Send className="h-4 w-4" />}
            </button>

            {/* Submission status */}
            {status === "success" && (
              <p
                role="status"
                className="text-sm leading-6 text-green-700"
              >
                Thank you! Your consultation request has been submitted
                successfully. We will contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="text-sm leading-6 text-red-700"
              >
                We couldn't submit your request. Please try again or contact
                us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
