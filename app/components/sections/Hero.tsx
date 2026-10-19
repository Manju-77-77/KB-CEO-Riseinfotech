
"use client";

import Image from "next/image";
import {
  motion,
  type Variants,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years of Industry Experience" },
  { value: 5, suffix: "+", label: "Years of SAP Training Experience" },
  { value: 12, suffix: "+", label: "SAP Enterprise Projects" },
  { value: 1000, suffix: "+", label: "Students Trained" },
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
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const fadeIn = (delay = 0): Variants => ({
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut", delay },
  },
});

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: value >= 1000 ? 2 : 1.4,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toLocaleString("en-US"));
      },
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-white to-[#f8fbff]"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(37,99,235,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Seamless navbar transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent sm:h-40"
      />

      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl sm:h-[600px] sm:w-[600px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-[350px] w-[350px] rounded-full bg-cyan-50/70 blur-3xl"
      />

      {/* Main container */}
      <div className="relative mx-auto w-full max-w-[1380px] px-5 pb-8 pt-20 sm:px-7 sm:pb-10 sm:pt-24 lg:px-10 lg:pb-12 lg:pt-28 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-8 xl:gap-10">
          {/* Left: Introduction */}
          <div className="relative z-10 flex min-w-0 flex-col">
            <motion.h2
              variants={fadeUp(0)}
              initial="initial"
              animate="animate"
              className="mt-2 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl lg:text-5xl"
            >
              Kumaresh Bidari
            </motion.h2>

            
          {/* Animated professional titles */}
          <motion.div
            variants={fadeUp(0.06)}
            initial="initial"
            animate="animate"
            className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium leading-6 tracking-wide text-slate-700 sm:text-sm md:text-base"
          >
            <span className="inline-flex items-center gap-1.5">
              <motion.span
                animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex shrink-0 items-center justify-center text-base font-bold leading-none text-blue-600 sm:text-lg md:text-xl"
                aria-hidden="true"
              >
                •
              </motion.span>
              SAP S/4HANA Expert
            </span>

            <span className="text-slate-300" aria-hidden="true">
              |
            </span>

            <span className="inline-flex items-center gap-1.5">
              <motion.span
                animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="inline-flex shrink-0 items-center justify-center text-base font-bold leading-none text-blue-600 sm:text-lg md:text-xl"
                aria-hidden="true"
              >
                •
              </motion.span>
              Corporate Trainer
            </span>
          </motion.div>


            {/* Main heading */}
            <motion.h1
              variants={fadeUp(0.12)}
              initial="initial"
              animate="animate"
              className="mt-4 min-w-0 max-w-2xl text-[23.5px] font-bold leading-[1.25] tracking-tight text-[#0f1e3d] min-[390px]:text-[26.5px] sm:text-[29.4px] md:text-[31.4px] xl:text-[37.2px]"
            >
              Empowering Enterprises with SAP Solutions. Transforming SAP
              Careers.{" "}
              
              <span className="mt-2 block w-full whitespace-nowrap text-[clamp(8px,2.8vw,20px)] font-bold leading-tight bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent sm:text-[20px]">
              SAP S/4HANA Consulting | Corporate Training | Career Mentorship
            </span>

            </motion.h1>

            {/* Description */}
            <motion.div
              variants={fadeUp(0.18)}
              initial="initial"
              animate="animate"
              className="mt-4 max-w-2xl space-y-3 text-sm leading-7 text-slate-600 sm:text-[15px] md:text-base"
            >
              <p>
                Experienced SAP S/4HANA MM Consultant with 10+ years of industry
                expertise in SAP S/4HANA Implementations, Global Rollouts,
                Testing, Data Migration, AMS Support, and Digital Transformation
                Programs. Successfully delivered enterprise SAP projects for
                global clients while working with TCS, IBM, and NTT DATA.
              </p>

              <p>
                Additionally, with 5+ years of SAP MM training experience, I
                have mentored aspiring SAP professionals through
                industry-oriented, real-time project-based training, helping
                them build successful careers as SAP S/4HANA MM Consultants.
              </p>
            </motion.div>

            {/* Four animated statistics */}
            <motion.div
              variants={fadeUp(0.24)}
              initial="initial"
              animate="animate"
              className="mt-5 grid grid-cols-4 border-y border-slate-200/80 py-3 sm:py-4"
            >
              {stats.map(({ value, suffix, label }, index) => (
                <div
                  key={label}
                  className={`min-w-0 px-1.5 py-2 sm:px-3 ${
                    index !== 0 ? "border-l border-slate-200" : ""
                  }`}
                >
                  <p className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-center text-base font-bold leading-tight text-transparent min-[390px]:text-lg sm:text-xl">
                    <AnimatedCounter value={value} suffix={suffix} />
                  </p>

                  <p className="mt-1 text-center text-[9px] leading-4 text-slate-500 min-[390px]:text-[10px] sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="initial"
              animate="animate"
              className="mt-5 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-6"
            >
              <a
                href="/#consultation-form"
                onClick={(event) => {
                  if (window.location.pathname !== "/") return;

                  const form = document.getElementById("consultation-form");
                  if (!form) return;

                  event.preventDefault();

                  const header = document.querySelector("header");
                  const headerHeight =
                    header?.getBoundingClientRect().height ?? 0;

                  const targetPosition =
                    form.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    16;

                  window.history.replaceState(
                    null,
                    "",
                    `${window.location.pathname}${window.location.search}#consultation-form`
                  );

                  window.scrollTo({
                    top: Math.max(0, targetPosition),
                    behavior: "smooth",
                  });
                }}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-[420px]:w-auto sm:px-6 sm:text-[15px]"
              >
                Schedule Consultation

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#about"
                onClick={(event) => {
                  event.preventDefault();

                  const section = document.getElementById("about");
                  if (!section) return;

                  const header = document.querySelector("header");
                  const headerHeight =
                    header?.getBoundingClientRect().height ?? 0;

                  const sectionPosition =
                    section.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    12;

                  window.history.replaceState(
                    null,
                    "",
                    `${window.location.pathname}${window.location.search}#about`
                  );

                  window.scrollTo({
                    top: Math.max(0, sectionPosition),
                    behavior: "smooth",
                  });
                }}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-[420px]:w-auto sm:px-6 sm:text-[15px]"
              >
                View Journey
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait and expertise */}
          <motion.div
            variants={fadeIn(0.18)}
            initial="initial"
            animate="animate"
            className="relative mx-auto mt-3 flex w-full max-w-[480px] min-w-0 flex-col items-center sm:mt-5 lg:mt-0 lg:max-w-none"
          >
            {/* Portrait background glow */}
            <div className="relative flex w-full items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100/80 to-cyan-100/60 blur-3xl min-[390px]:h-[270px] min-[390px]:w-[270px] sm:h-[340px] sm:w-[340px] lg:h-[300px] lg:w-[300px] xl:h-[380px] xl:w-[380px]"
              />

              <Image
                src="/assets/instructor.png"
                alt="Kumaresh Bidari"
                width={560}
                height={700}
                priority
                quality={75}
                sizes="(max-width: 420px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 42vw, 500px"
                className="relative z-10 mx-auto h-auto max-h-[330px] w-auto max-w-full object-contain drop-shadow-[0_12px_24px_rgba(15,23,42,0.10)] min-[390px]:max-h-[370px] sm:max-h-[440px] lg:max-h-[480px] xl:max-h-[520px]"
              />
            </div>

            {/* Core expertise */}
            <motion.div
              variants={fadeUp(0.32)}
              initial="initial"
              animate="animate"
              className="mt-4 w-full sm:mt-5"
            >
              <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-slate-400 lg:text-left">
                Core Expertise
              </h3>

              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium leading-5 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:shadow-md hover:shadow-blue-500/20 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
