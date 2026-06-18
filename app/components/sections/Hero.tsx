"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = ["TCS", "IBM", "NTT DATA", "SAP Expert"];

const stats = [
  { value: "10+", label: "Years in SAP" },
  { value: "1000+", label: "Professionals Trained" },
  { value: "3", label: "Global MNCs" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-50 opacity-50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-8 pt-16 pb-10 xl:px-16">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_560px]">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center py-6"
          >
          

            {/* Name — Dark Navy */}
            <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-blue-900 sm:text-6xl xl:text-7xl">
              Kumaresh Bidari
            </h1>

            {/* Role tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["SAP S/4HANA Consultant", "Corporate Trainer"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h2 className="mt-7 max-w-xl text-xl font-semibold leading-snug text-slate-700 sm:text-2xl">
              Helping Enterprises Accelerate Growth Through{" "}
              <span className="text-blue-600">SAP S/4HANA Transformation</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-[1.85] text-slate-500">
             Experienced SAP S/4HANA MM Consultant with 10+ years of industry expertise in SAP S/4HANA Implementations, Global Rollouts, Testing, Data Migration, AMS Support, and Digital Transformation Programs. Successfully delivered enterprise SAP projects for global clients while working with TCS, IBM, and NTT DATA. Additionally, with 5+ years of SAP MM training experience, I have mentored aspiring SAP professionals through industry-oriented, real-time project-based training, helping them build successful careers as SAP S/4HANA MM Consultants.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-10 border-t border-slate-100 pt-7">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-[#0f1e3d]">{value}</p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://enroll.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100"
              >
                Schedule Consultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-blue-500 hover:text-blue-700"
              >
                View Journey
              </a>
            </div>

            {/* Companies */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-300 mr-1">
                Experience at
              </span>
              {companies.map((company) => (
                <span
                  key={company}
                  className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-500 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden lg:flex items-end justify-center"
          >
            <div
              className="pointer-events-none absolute right-0 top-4 h-32 w-32 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />

            <div className="relative h-full w-full">
              <div className="absolute bottom-0 right-0 top-8 w-[88%] rounded-3xl bg-blue-50" />

              <div className="relative z-10 flex h-full items-end justify-center">
                <Image
                  src="/assets/instructor.png"
                  alt="Kumaresh Bidari"
                  width={500}
                  height={600}
                  priority
                  quality={100}
                  className="relative z-10 max-h-[580px] w-auto object-contain drop-shadow-sm"
                />
              </div>

              {/* Floating card — SAP Expertise */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.35 }}
                className="absolute left-0 top-16 z-20 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400">SAP Expertise</p>
                <p className="mt-0.5 text-base font-semibold text-[#0f1e3d]">S/4HANA MM</p>
              </motion.div>

              {/* Floating card — Trained */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.35 }}
                className="absolute bottom-16 right-2 z-20 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400">Trained</p>
                <p className="mt-0.5 text-base font-semibold text-blue-600">1000+ Pros</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}