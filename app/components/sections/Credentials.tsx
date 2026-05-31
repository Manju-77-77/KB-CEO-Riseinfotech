"use client";

import { useRef, useEffect, useState } from "react";

const certifications = [
  {
    title: "SAP Certified Application Associate",
    subtitle: "SAP S/4HANA Sourcing & Procurement",
    category: "SAP Certification",
    accent: "#3a6cff",
    index: "01",
  },
  {
    title: "Supply Chain & Logistics Management",
    subtitle: "Materials Management Specialization",
    category: "Professional Certification",
    accent: "#00d2c8",
    index: "02",
  },
  {
    title: "Chemicals & Petroleum Insights",
    subtitle: "Industry Domain Expertise",
    category: "Industry Certification",
    accent: "#7a9bff",
    index: "03",
  },
  {
    title: "SAP Consulting Expertise",
    subtitle: "Implementation & Transformation Projects",
    category: "Professional Experience",
    accent: "#3a6cff",
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
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
    >
      {/* Top accent line */}
      <div
        className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
        aria-hidden="true"
      />

      {/* Corner glow */}
      <div
        className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `${cert.accent}20` }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Top row: category + number */}
        <div className="mb-5 flex items-center justify-between">
          <span
            className="rounded-lg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]"
            style={{
              background: `${cert.accent}15`,
              border: `1px solid ${cert.accent}28`,
              color: cert.accent,
            }}
          >
            {cert.category}
          </span>
          <span
            className="font-serif text-[2rem] font-bold leading-none"
            style={{ color: `${cert.accent}18` }}
            aria-hidden="true"
          >
            {cert.index}
          </span>
        </div>

        {/* Title */}
        <h3
          className="mb-3 text-[15px] font-semibold leading-snug text-white"
          itemProp="name"
        >
          {cert.title}
        </h3>

        {/* Animated divider */}
        <div
          className="mb-3 h-px w-8 rounded-full transition-all duration-300 group-hover:w-16"
          style={{ background: `linear-gradient(90deg, ${cert.accent}70, transparent)` }}
          aria-hidden="true"
        />

        {/* Subtitle */}
        <p
          className="text-[13px] leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400"
          itemProp="description"
        >
          {cert.subtitle}
        </p>

        {/* Bottom verified mark */}
        <div className="mt-5 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
          <div
            className="flex h-4 w-4 items-center justify-center rounded-full"
            style={{ background: `${cert.accent}20`, border: `1px solid ${cert.accent}30` }}
            aria-hidden="true"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1.5 4L3 5.5L6.5 2" stroke={cert.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[10px] uppercase tracking-[0.1em]" style={{ color: `${cert.accent}90` }}>
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
      className="relative bg-[#03061a] py-14 md:py-16 lg:py-20"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #00d2c8 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-12">

          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#5580ff]" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7a9bff]">
              Certifications &amp; Credentials
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#5580ff]" aria-hidden="true" />
          </div>

          <h2
            id="certifications-heading"
            className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight text-white"
          >
            Recognized Expertise &amp;
            <span className="block bg-gradient-to-r from-[#5580ff] to-[#00d2c8] bg-clip-text text-transparent">
              Professional Credentials
            </span>
          </h2>

          <p className="mt-4 text-[13px] leading-relaxed text-gray-500 sm:text-sm">
            Industry-recognized certifications and professional achievements
            supporting enterprise SAP consulting and digital transformation.
          </p>

        </header>

        {/* Cards */}
        <ul
          className="grid list-none gap-3 p-0 md:grid-cols-2"
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