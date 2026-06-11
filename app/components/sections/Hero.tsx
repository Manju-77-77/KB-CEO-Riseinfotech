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
      <div className="mx-auto max-w-[1400px] px-4 pt-28 pb-12 sm:px-6 md:pt-32 lg:px-10 lg:pt-24 lg:pb-24">

        <div className="grid items-center gap-10 lg:grid-cols-[55%_45%]">

          {/* LEFT CONTENT */}
          <div className="order-1">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
              <span className="text-xs font-medium text-blue-600 sm:text-sm">
                Founder & CEO - Rise Infotech
              </span>
            </div>

            {/* Name */}
            <h1 className="mb-3 max-w-[700px] text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Kumaresh{" "}
              <span className="text-blue-700">
                Bidari
              </span>
            </h1>

            {/* Designation */}
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 sm:text-sm">
              SAP S/4HANA Consultant • Corporate Trainer • Enterprise
              Transformation Leader
            </p>

            {/* Headline */}
            <h2 className="mb-5 max-w-[750px] text-xl font-bold leading-tight sm:text-3xl md:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Helping Enterprises Accelerate Growth Through SAP S/4HANA
                Transformation
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-[650px] text-sm leading-relaxed text-slate-600 sm:text-lg">
              SAP S/4HANA Consultant with 10+ years of experience delivering
              enterprise implementations, global rollouts, digital
              transformation initiatives, and corporate training programs
              across leading organizations including TCS, IBM, and NTT DATA.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="https://enroll.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  text-center
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-blue-700
                  sm:px-8
                  sm:py-4
                "
              >
                Schedule Consultation
              </a>

              <a
                href="#about"
                className="
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  text-center
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:bg-slate-50
                  sm:px-8
                  sm:py-4
                "
              >
                View Journey
              </a>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 flex flex-col items-center lg:items-end">

            {/* Image */}
            <div
              className="
                relative
                mt-8
                h-[260px]
                w-[200px]
                overflow-hidden
                rounded-[24px]
                shadow-2xl

                sm:h-[420px]
                sm:w-[320px]

                lg:mt-0
                lg:h-[560px]
                lg:w-[420px]
              "
            >
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Highlights */}
            <div className="mt-6 grid w-full max-w-[320px] grid-cols-3 gap-2 sm:max-w-[420px] sm:gap-3">

              {/* Card 1 */}
              <div
                className="
                  group
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  sm:p-4
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-blue-50
                  hover:shadow-lg
                  hover:shadow-blue-100
                "
              >
                <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-xl">
                  10+
                </h3>

                <p className="mt-1 text-[10px] text-slate-500 transition-colors duration-300 group-hover:text-blue-700 sm:text-xs">
                  Years Experience
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="
                  group
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  sm:p-4
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-blue-50
                  hover:shadow-lg
                  hover:shadow-blue-100
                "
              >
                <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-xl">
                  Global
                </h3>

                <p className="mt-1 text-[10px] text-slate-500 transition-colors duration-300 group-hover:text-blue-700 sm:text-xs">
                  Rollouts
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="
                  group
                  rounded-xl
                  border
                  border-blue-100
                  bg-gradient-to-br
                  from-blue-50
                  to-cyan-50
                  p-3
                  sm:p-4
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-600
                  hover:shadow-lg
                  hover:shadow-blue-200
                "
              >
                <h3 className="text-base font-bold text-blue-700 transition-all duration-300 group-hover:scale-110 sm:text-xl">
                  SAP
                </h3>

                <p className="mt-1 text-[10px] text-slate-600 transition-colors duration-300 group-hover:text-blue-700 sm:text-xs">
                  S/4HANA Expert
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}