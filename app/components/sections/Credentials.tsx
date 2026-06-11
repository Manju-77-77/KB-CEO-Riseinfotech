"use client";

import { useEffect, useRef, useState } from "react";

const certifications = [
  {
    title: "SAP Certified Application Associate",
    subtitle: "SAP S/4HANA Sourcing & Procurement",
    category: "SAP Certification",
  },
  {
    title: "Supply Chain & Logistics Management",
    subtitle: "Materials Management Specialization",
    category: "Professional Certification",
  },
  {
    title: "Chemicals & Petroleum Domain",
    subtitle: "Industry Expertise",
    category: "Industry Knowledge",
  },
  {
    title: "SAP Consulting Experience",
    subtitle: "Implementation & Transformation Projects",
    category: "Professional Experience",
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
        transition: `all .5s ease ${i * 80}ms`,
      }}
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-7
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-400
        hover:bg-blue-50/40
        hover:shadow-2xl
        hover:shadow-slate-900/15
      "
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
    >
      {/* Category */}
      <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
        {cert.category}
      </span>

      {/* Title */}
      <h3
        className="mt-5 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700"
        itemProp="name"
      >
        {cert.title}
      </h3>

      {/* Divider */}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent" />

      {/* Subtitle */}
      <p
        className="mt-4 text-sm leading-relaxed text-slate-600"
        itemProp="description"
      >
        {cert.subtitle}
      </p>

      {/* Bottom */}
      <div className="mt-6 flex items-center gap-3">

        <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

        <span className="text-sm font-medium text-slate-500">
          Verified Credential
        </span>

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
      className="relative overflow-hidden bg-slate-50 py-14 md:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
            Certifications & Credentials
          </span>

          <h2
            id="certifications-heading"
            className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
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
          className="grid list-none gap-5 p-0 md:grid-cols-2"
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