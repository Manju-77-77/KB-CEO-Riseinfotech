
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "12+", label: "Enterprise Projects" },
  { value: "SAP S/4HANA", label: "Expert" },
];

const expertise = [
  "SAP S/4HANA MM",
  "SAP S/4HANA Implementations",
  "Global Rollouts",
  "Data Migration",
  "Testing & AMS Support",
  "Corporate Training & Mentoring",
  "AI-Powered Data Analytics",
];

const fadeUp = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
      delay,
    },
  },
});

const fadeIn = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    scale: 0.94,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      delay,
    },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glows */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full  opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-sky-50 opacity-60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-6 pb-20 pt-24 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_580px]">

          {/* LEFT */}
          <div className="flex flex-col">

            {/* Badge */}
            {/* <motion.div
              variants={fadeUp(0)}
              initial="initial"
              animate="animate"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Trusted SAP S/4HANA Expertise
              </span>
            </motion.div> */}

            {/* Name */}
            <motion.h2
              variants={fadeUp(0.05)}
              initial="initial"
              animate="animate"
            className="mt-5 text-3xl font-bold text-blue-500 sm:text-4xl lg:text-5xl"
            >
              Kumaresh Bidari   
            </motion.h2>         

            {/* Role */}
            <motion.p
              variants={fadeUp(0.08)}             
              animate="animate"
             className="mt-2 text-xs font-medium tracking-wide text-black sm:text-sm"
            >
              SAP S/4HANA MM Consultant • Corporate Trainer
            </motion.p>

            {/* Heading */}
           <motion.h1
  variants={fadeUp(0.14)}
  initial="initial"
  animate="animate"
 className="mt-4 text-[20px] font-bold leading-[1.25] tracking-tight text-[#0f1e3d] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px]"
>
  Helping Enterprises Accelerate Growth Through{" "}
  <span className="relative inline-block">
    <span className="relative z-100 bg-clip-text text-transparent">
      SAP S/4HANA Transformation
    </span>
    <span className="absolute -bottom-1 left-0 right-0 h-[3px] " />
  </span>
</motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.2)}
              initial="initial"
              animate="animate"
             className="mt-5 max-w-[850px] text-[14px] leading-[1.8] text-blue-800 sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
            >
              Experienced SAP S/4HANA MM Consultant with 10+ years of industry
              expertise in SAP S/4HANA Implementations, Global Rollouts,
              Testing, Data Migration, AMS Support, and Digital Transformation
              Programs. Successfully delivered enterprise SAP projects for
              global clients while working with TCS, IBM, and NTT DATA.
              <br />
              <br />
              Additionally, with 5+ years of SAP MM training experience, I have
              mentored aspiring SAP professionals through industry-oriented,
              real-time project-based training, helping them build successful
              careers as SAP S/4HANA MM Consultants.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0.26)}
              initial="initial"
              animate="animate"
             className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3"
            >
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-3xl px-6 py-5 transition-all duration-500 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-xl hover:shadow-blue-100"
                >
                  <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-3xl font-bold text-transparent">
                    {value}
                  </div>

                  <div className="mt-1 text-sm text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="initial"
              animate="animate"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="https://enroll.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Schedule Consultation
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-[15px] font-semibold text-slate-600 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              >
                View Journey
              </a>
            </motion.div>

          
          </div>

          {/* RIGHT */}
          <motion.div
            variants={fadeIn(0.2)}
            initial="initial"
            animate="animate"
            className="relative mt-14 flex items-end justify-center lg:mt-0"
          >
            <div className="absolute bottom-0 left-1/2 h-[90%] w-[85%] -translate-x-1/2 rounded-[40px] bg-white" />

            <div className="relative z-10">
              <Image
                src="/assets/instructor.png"
                alt="Kumaresh Bidari"
                width={560}
                height={700}
                priority
                quality={100}
               className="max-h-[380px] w-auto object-contain sm:max-h-[500px] lg:max-h-[620px] xl:max-h-[680px]"
              />



                {/* Core Expertise */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="initial"
              animate="animate"
              className="mt-10"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500 hover:text-white hover:shadow-lg hover:shadow-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            </div>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
}

