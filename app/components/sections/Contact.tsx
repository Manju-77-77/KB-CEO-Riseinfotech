"use client";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#050816] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

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

          {/* Left */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Phone className="text-blue-400" />
              <span className="text-gray-300">
                +91 9110421024
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Mail className="text-blue-400" />
              <span className="text-gray-300">
                kumaresh.bidari@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <MapPin className="text-blue-400" />
              <span className="text-gray-300">
                Bengaluru, Karnataka, India
              </span>
            </div>

          </div>

          {/* Form */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white outline-none"
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

