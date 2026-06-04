
"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative overflow-hidden bg-white text-slate-900"
    >
      <div className="mx-auto flex min-h-[90vh] max-w-[1400px] items-center px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[55%_45%]">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
              <span className="text-xs font-medium text-blue-600 sm:text-sm">
                Founder & CEO • Rise Infotech
              </span>
            </div>

            {/* Name */}
            <h1 className="mb-4 max-w-[700px] text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>

            {/* Headline */}
            <h2 className="mb-5 max-w-[750px] text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Helping Enterprises Accelerate Growth Through
                SAP S/4HANA Transformation
              </span>
            </h2>

            {/* Subtitle */}
            <p className="max-w-[650px] text-base leading-relaxed text-slate-600 sm:text-lg">
              {profile.subtitle}
            </p>

            {/* Credibility Line */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
              <span>Ex-TCS</span>
              <span>•</span>
              <span>IBM</span>
              <span>•</span>
              <span>NTT DATA</span>
              <span>•</span>
              <span>SAP S/4HANA Expert</span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700"
              >
                Schedule Consultation
              </button>

              <button
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-50"
              >
                View Journey
              </button>

            </div>

            {/* Stats */}
            <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {profile.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex items-center justify-center">

            {/* Image */}
            <div className="relative h-[350px] w-[260px] overflow-hidden rounded-[28px] sm:h-[450px] sm:w-[340px] lg:h-[560px] lg:w-[420px]">
              <Image
                src={profile.image}
                alt={`${profile.name} - Founder & CEO of Rise Infotech`}
                fill
                priority
                sizes="(max-width:640px) 260px, (max-width:1024px) 340px, 420px"
                className="object-cover"
              />
            </div>

            {/* Card 1 */}
            <div className="absolute -left-10 top-16 hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl lg:block">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Industry Experience
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                10+ Years
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                SAP Consulting
              </p>
            </div>

            {/* Card 2 */}
            <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xl lg:block">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Training Experience
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                5+ Years
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                SAP MM Training
              </p>
            </div>

            {/* Card 3 */}
            <div className="absolute -right-6 bottom-16 hidden rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5 shadow-xl lg:block">
              <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                Expertise
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                SAP S/4HANA
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Certified Expert
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
