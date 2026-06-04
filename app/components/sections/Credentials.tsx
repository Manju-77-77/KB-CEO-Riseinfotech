
"use client";

import { useRef, useEffect, useState } from "react";

const certifications = [
  {
    title: "SAP Certified Application Associate",
    subtitle: "SAP S/4HANA Sourcing & Procurement",
    category: "SAP Certification",
    accent: "#2563eb",
    index: "01",
  },
  {
    title: "Supply Chain & Logistics Management",
    subtitle: "Materials Management Specialization",
    category: "Professional Certification",
    accent: "#06b6d4",
    index: "02",
  },
  {
    title: "Chemicals & Petroleum Insights",
    subtitle: "Industry Domain Expertise",
    category: "Industry Certification",
    accent: "#3b82f6",
    index: "03",
  },
  {
    title: "SAP Consulting Expertise",
    subtitle: "Implementation & Transformation Projects",
    category: "Professional Experience",
    accent: "#2563eb",
    index: "04",
  },
];

function CertCard({
  cert,
  i,
}: {
  cert: (typeof certifications)[0];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s ease ${i * 80}ms`,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-lg
        shadow-slate-100
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-xl
        hover:shadow-blue-100
      "
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
    >
      {/* Top Accent Line */}
      <div
        className="absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${cert.accent}, transparent)`,
        }}
      />

      {/* Glow Effect */}
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `${cert.accent}20`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Top Section */}
        <div className="mb-5 flex items-center justify-between">

          <span
            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
            style={{
              background: `${cert.accent}12`,
              border: `1px solid ${cert.accent}30`,
              color: cert.accent,
            }}
          >
            {cert.category}
          </span>

          <span
            className="text-4xl font-bold"
            style={{
              color: `${cert.accent}20`,
            }}
            aria-hidden="true"
          >
            {cert.index}
          </span>

        </div>

        {/* Title */}
        <h3
          className="text-xl font-semibold leading-snug text-slate-900"
          itemProp="name"
        >
          {cert.title}
        </h3>

        {/* Divider */}
        <div
          className="mt-4 h-[2px] w-10 rounded-full transition-all duration-300 group-hover:w-20"
          style={{
            background: `linear-gradient(90deg, ${cert.accent}, transparent)`,
          }}
        />

        {/* Subtitle */}
        <p
          className="mt-4 text-sm leading-relaxed text-slate-600"
          itemProp="description"
        >
          {cert.subtitle}
        </p>

        {/* Bottom */}
        <div className="mt-auto flex items-center gap-2 border-t border-slate-200 pt-5">

          <div
            className="flex h-5 w-5 items-center justify-center rounded-full"
            style={{
              background: `${cert.accent}15`,
              border: `1px solid ${cert.accent}30`,
            }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                d="M1.5 4L3 5.5L6.5 2"
                stroke={cert.accent}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span
            className="text-[11px] font-medium uppercase tracking-wider"
            style={{ color: cert.accent }}
          >
            Verified Credential
          </span>

        </div>

      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="relative overflow-hidden bg-slate-50 py-20 md:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <header className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
            Certifications & Credentials
          </span>

          <h2
            id="certifications-heading"
            className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Recognized Expertise &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Credentials
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Industry-recognized certifications and professional
            achievements supporting enterprise SAP consulting,
            digital transformation and business excellence.
          </p>

        </header>

        {/* Cards */}
        <ul
          className="grid list-none gap-6 p-0 md:grid-cols-2"
          aria-label="Professional certifications"
        >
          {certifications.map((cert, i) => (
            <li key={cert.title} itemProp="itemListElement">
              <CertCard cert={cert} i={i} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

