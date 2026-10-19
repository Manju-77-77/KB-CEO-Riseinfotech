
"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Industry Experience",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of SAP MM Training Experience",
  },
  {
    value: 12,
    suffix: "+",
    label: "SAP Enterprise Projects",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Students Trained",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2200,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth ease-out: fast initially, then gradually slows down.
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const nextValue = Math.round(easedProgress * value);

      setCount(progress >= 1 ? value : nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
        setFinished(true);
      }
    };

    timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [started, value, duration, delay]);

  return (
    <span
      ref={counterRef}
      className={`inline-block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent transition-transform duration-300 ${
        finished ? "scale-105" : "scale-100"
      }`}
      aria-label={`${value.toLocaleString("en-US")}${suffix}`}
    >
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative overflow-hidden py-12 md:py-14"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />

      {/* Decorative Glow Effects */}
      <div
        className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/50 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-200/50 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-transform duration-700 ease-out motion-reduce:transition-none ${
            visible ? "translate-y-0" : "translate-y-3"
          }`}
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
            Impact &amp; Achievements
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Experience, Expertise &amp;
            <span className="mt-1 block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Combining industry experience, SAP MM training, enterprise
            project delivery, and practical learning to create lasting
            professional impact.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              style={{
                transitionDelay: visible ? `${index * 100}ms` : "0ms",
              }}
              className={`group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.2)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.22)] motion-reduce:transition-none sm:p-8 ${
                visible ? "translate-y-0" : "translate-y-3"
              }`}
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Number and Icon */}
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  0{index + 1}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-blue-300 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-blue-600"
                  aria-hidden="true"
                >
                  <path
                    d="M5 17 10 12l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 8h5v5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Animated Metric Value */}
                <h3 className="min-h-[44px] text-[2.125rem] font-bold tracking-tight sm:text-[2.75rem]">                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  duration={metric.value >= 1000 ? 2800 : 2200}
                  delay={index * 140}
                />
              </h3>

              <div className="mt-5 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-blue-100" />

              {/* Metric Label */}
              <p className="mt-4 min-h-10 text-sm font-medium leading-6 text-slate-600">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
