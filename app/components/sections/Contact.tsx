"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#050816] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400">
            Contact
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Exceptional Together
            </span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <a
              href="tel:+919110455125"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-blue-500/40"
            >
              <Phone className="shrink-0 text-blue-400" />

              <span className="text-gray-300 transition-colors hover:text-blue-400">
                +91 9110455125
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@riseinfotech.in"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-blue-500/40"
            >
              <Mail className="shrink-0 text-blue-400" />

              <span className="text-gray-300 transition-colors hover:text-blue-400">
                info@riseinfotech.in
              </span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <MapPin className="shrink-0 text-blue-400" />

              <span className="text-gray-300">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white outline-none transition focus:border-blue-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              aria-label="Your Message"
              className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white outline-none transition focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}