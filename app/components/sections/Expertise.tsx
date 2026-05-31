"use client";

import { useRef, useEffect, useState } from "react";

const expertise = [
  {
    title: "SAP S/4HANA",
    description: "On-Premise, Private Cloud & Public Cloud implementations.",
    icon: "⬡",
    accent: "#3a6cff",
  },
  {
    title: "SAP MM",
    description: "Procurement, inventory and material management expertise.",
    icon: "◈",
    accent: "#00d2c8",
  },
  {
    title: "SAP Fiori",
    description: "Modern SAP user experiences and application delivery.",
    icon: "◎",
    accent: "#7a9bff",
  },
  {
    title: "SAP SolMan",
    description: "Application lifecycle management and support operations.",
    icon: "⬡",
    accent: "#3a6cff",
  },
  {
    title: "Global Rollouts",
    description: "Enterprise-scale SAP deployments across regions.",
    icon: "◈",
    accent: "#00d2c8",
  },
  {
    title: "Data Migration",
    description: "LSMW, LTMC and SAP Migration Cockpit expertise.",
    icon: "◎",
    accent: "#7a9bff",
  },
  {
    title: "AMS Support",
    description: "Application maintenance and post-go-live support.",
    icon: "⬡",
    accent: "#3a6cff",
  },
  {
    title: "SAP Training",
    description: "Corporate training and placement-focused programs.",
    icon: "◈",
    accent: "#00d2c8",
  },
];

function ExpertiseCard({
  item,
  index,
}: {
  item: (typeof expertise)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
      }}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Subtle top accent line */}
      <div
        className="absolute left-0 top-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
        aria-hidden="true"
      />

      {/* Corner glow on hover */}
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `${item.accent}22` }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Number badge */}
        <div
          className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-semibold"
          style={{
            background: `${item.accent}18`,
            border: `1px solid ${item.accent}30`,
            color: item.accent,
          }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3
          className="mb-3 text-[15px] font-semibold leading-snug text-white"
          itemProp="name"
        >
          {item.title}
        </h3>

        {/* Divider */}
        <div
          className="mb-3 h-px w-8 rounded-full transition-all duration-300 group-hover:w-full"
          style={{ background: `linear-gradient(90deg, ${item.accent}80, transparent)` }}
          aria-hidden="true"
        />

        {/* Description */}
        <p
          className="text-[13px] leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400"
          itemProp="description"
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="relative bg-[#03061a] py-14 md:py-16 lg:py-20"
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #3a6cff 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-12">

          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#5580ff]" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7a9bff]">
              Core Expertise
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#5580ff]" aria-hidden="true" />
          </div>

          <h2
            id="expertise-heading"
            className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight text-white"
          >
            Enterprise SAP Solutions &amp;
            <span className="block bg-gradient-to-r from-[#5580ff] to-[#00d2c8] bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>

          <p className="mt-4 text-[13px] leading-relaxed text-gray-500 sm:text-sm">
            Enterprise-grade SAP consulting, implementation and training
            services across industries worldwide.
          </p>

        </header>

        {/* Cards grid */}
        <ul
          className="grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="SAP expertise areas"
        >
          {expertise.map((item, index) => (
            <li key={item.title} itemProp="itemListElement">
              <ExpertiseCard item={item} index={index} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}