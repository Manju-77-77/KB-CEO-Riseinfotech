"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const credentials = ["TCS", "IBM", "NTT DATA", "SAP Expert"];

const expertise = [
  "SAP MM",
  "SAP S/4HANA",
  "Cutover Planning",
  "AMS Support",
  "Corporate Training",
  "Global Rollouts",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white text-slate-900"
    >
      {/* Top Bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 to-cyan-500" />

      {/* Glow */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-40 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-8 rounded-full bg-blue-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Founder &amp; CEO · Rise Infotech
              </span>
            </div>

            {/* Name */}
            <h1 className="font-black leading-[0.92] text-slate-900 text-5xl sm:text-6xl lg:text-7xl">
              Kumaresh
              <span className="block text-blue-600">Bidari</span>
            </h1>

            {/* Divider */}
            <div className="my-7 h-px bg-gradient-to-r from-blue-600 to-slate-200" />

            {/* Role */}
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              SAP S/4HANA Consultant · Corporate Trainer
            </p>

            {/* Headline */}
            <h2 className="mt-7 max-w-xl text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
              Helping Enterprises Accelerate Growth Through
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SAP S/4HANA Transformation
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              SAP S/4HANA Consultant with 10+ years of experience delivering
              enterprise implementations, digital transformation initiatives and
              global rollouts across TCS, IBM and NTT DATA.
            </p>

           
 {/* Buttons */}
<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">


  {/* Schedule Consultation → Rise Infotech enrollment */}
  <a
    href="https://enroll.riseinfotech.in/"
    target="_blank"
    rel="noopener noreferrer"
     className="w-full rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold
      text-white shadow-lg transition-all duration-300 hover:-translate-y-1
      hover:bg-blue-700 hover:shadow-blue-200 sm:w-auto"
  >
    Schedule Consultation
  </a>

  {/* View Journey → scrolls to #about section */}
  <a
    href="#about"
   className="w-full rounded-xl border border-slate-300 px-7 py-4 text-center
      font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1
      hover:border-slate-400 sm:w-auto"
  >
    View Journey
  </a>

</div>

            {/* Credentials */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {credentials.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-semibold text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[420px]">

              {/* Image Card — fixed aspect ratio so it never collapses */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
                style={{ aspectRatio: "4 / 3" }}
              >
                {/* Corner glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-[60px]" />

                <Image
                  src="/assets/instructor.png"
                  alt="Kumaresh Bidari"
                  fill
                  priority
                  quality={100}
                  className="object-contain object-bottom"
                />
              </motion.div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { value: "10+", label: "Years" },
                  { value: "50+", label: "Projects" },
                  { value: "SAP", label: "Expert" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
                  >
                    <h3 className="text-2xl font-bold text-blue-600">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Core Expertise */}
              <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-[2px] w-6 bg-blue-600" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-700">
                    Core Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}