
"use client";

import { useRef, useEffect, useState } from "react";

const expertise = [
  {
    title: "SAP S/4HANA",
    description: "On-Premise, Private Cloud & Public Cloud implementations.",
    accent: "#2563eb",
  },
  {
    title: "SAP MM",
    description: "Procurement, inventory and material management expertise.",
    accent: "#06b6d4",
  },
  {
    title: "SAP Fiori",
    description: "Modern SAP user experiences and application delivery.",
    accent: "#3b82f6",
  },
  {
    title: "SAP Solution Manager",
    description: "Application lifecycle management and support operations.",
    accent: "#2563eb",
  },
  {
    title: "Global Rollouts",
    description: "Enterprise-scale SAP deployments across multiple regions.",
    accent: "#06b6d4",
  },
  {
    title: "Data Migration",
    description: "LSMW, LTMC and SAP Migration Cockpit expertise.",
    accent: "#3b82f6",
  },
  {
    title: "AMS Support",
    description: "Application maintenance and post-go-live support services.",
    accent: "#2563eb",
  },
  {
    title: "SAP Training",
    description: "Corporate training and placement-focused learning programs.",
    accent: "#06b6d4",
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
      itemScope
      itemType="https://schema.org/Service"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s ease ${index * 70}ms`,
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
    >
      {/* Top Accent Line */}
      <div
        className="absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${item.accent}, transparent)`,
        }}
      />

      {/* Glow */}
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `${item.accent}20`,
        }}
      />

      <div className="relative z-10">

        {/* Number */}
        <div
          className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
          style={{
            background: `${item.accent}12`,
            border: `1px solid ${item.accent}25`,
            color: item.accent,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3
          itemProp="name"
          className="text-lg font-semibold text-slate-900"
        >
          {item.title}
        </h3>

        {/* Divider */}
        <div
          className="mt-4 h-[2px] w-10 rounded-full transition-all duration-300 group-hover:w-20"
          style={{
            background: `linear-gradient(90deg, ${item.accent}, transparent)`,
          }}
        />

        {/* Description */}
        <p
          itemProp="description"
          className="mt-4 text-sm leading-relaxed text-slate-600"
        >
          {item.description}
        </p>

      </div>
    </article>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20"
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
            Core Expertise
          </span>

          <h2
            id="expertise-heading"
            className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Enterprise SAP Solutions &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Enterprise-grade SAP consulting, implementation,
            migration, training, and digital transformation
            services across industries worldwide.
          </p>

        </header>

        {/* Cards */}
        <ul
          className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="SAP expertise areas"
        >
          {expertise.map((item, index) => (
            <li key={item.title} itemProp="itemListElement">
              <ExpertiseCard
                item={item}
                index={index}
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

