"use client";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen overflow-hidden bg-white text-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-100 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-5 pt-24 sm:px-6 lg:px-10 lg:pt-28">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[55%_45%] lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
              <span className="text-xs font-medium text-blue-600 sm:text-sm">
                Founder & CEO • Rise Infotech
              </span>
            </div>

            {/* Name */}
            <h1 className="mb-4 max-w-[700px] text-4xl font-bold leading-[1.05] text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
              {profile.name}
            </h1>

            {/* Headline */}
            <h2 className="mb-6 max-w-[700px] text-2xl font-bold leading-tight sm:text-3xl md:text-4xl xl:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {profile.headline}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-[650px] text-base leading-relaxed text-slate-600 sm:text-lg">
              {profile.subtitle}
            </p>

            {/* Experience Tags */}
            <ul className="mb-10 flex flex-wrap gap-3 list-none p-0">
              {[
                "Ex-TCS",
                "IBM",
                "NTT DATA",
                "SAP S/4HANA Expert",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-700 shadow-sm sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">

              <button
                className="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] sm:w-auto"
                aria-label="Schedule Consultation"
              >
                Schedule Consultation
              </button>

              <button
                className="w-full rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-100 sm:w-auto"
                aria-label="View Journey"
              >
                View Journey
              </button>

            </div>

            {/* Stats */}
            <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 list-none p-0">
              {profile.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 relative flex items-center justify-center lg:order-2">

            {/* Glow */}
            <div
              className="absolute h-[400px] w-[400px] rounded-full bg-blue-100 blur-[120px] sm:h-[500px] sm:w-[500px]"
              aria-hidden="true"
            />

            {/* Image */}
            <div className="relative h-[320px] w-[240px] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl shadow-blue-100 sm:h-[400px] sm:w-[300px] lg:h-[520px] lg:w-[400px] lg:rounded-[32px]">

              <Image
                src={profile.image}
                alt={`${profile.name} - Founder & CEO of Rise Infotech`}
                fill
                priority
                sizes="(max-width:640px) 240px, (max-width:1024px) 300px, 400px"
                className="object-cover"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute left-[-40px] top-24 hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl shadow-slate-100 lg:block">
              <p className="text-sm text-slate-500">
                Experience
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                10+ Years
              </h3>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute right-[-30px] bottom-24 hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl shadow-slate-100 lg:block">
              <p className="text-sm text-slate-500">
                SAP Expertise
              </p>

              <h3 className="text-2xl font-bold text-slate-900">
                S/4HANA
              </h3>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

