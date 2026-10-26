"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Service } from "./servicesData";
import {
  getServicePrice,
  getServiceTypeLabel,
  getServiceTypeStyles,
} from "./servicesData";

interface ServiceCardProps {
  service: Service;
  onBook: (serviceId: string) => void;
  /** Position in the grid — used only to stagger the entrance. */
  index?: number;
}

/* ---------- Icons (design only, keyed by service id) ---------- */

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const icons: Record<string, ReactNode> = {
  "career-guidance": (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  ),
  "sap-mm-mock-interview": (
    <svg {...iconProps}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
      <path d="M8.5 11h7M8.5 14h4" />
    </svg>
  ),
  "resume-job-profile": (
    <svg {...iconProps}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
  "placement-assistance": (
    <svg {...iconProps}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  ),
  "course-admission": (
    <svg {...iconProps}>
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
    </svg>
  ),
  "sap-mm-live-demo": (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="m10.5 8.5 4 2.5-4 2.5v-5ZM8 20h8M12 16v4" />
    </svg>
  ),
};

const fallbackIcon = (
  <svg {...iconProps}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M8 12h8M12 8v8" />
  </svg>
);

export default function ServiceCard({
  service,
  onBook,
  index = 0,
}: ServiceCardProps) {
  const isBusiness = service.audience === "business";
  const styles = getServiceTypeStyles(service);
  const icon = icons[service.id] ?? fallbackIcon;

  /* ---------- Scroll reveal ---------- */
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Stagger within a row of three so cards cascade left to right.
  const delay = (index % 3) * 110;

  return (
    <div
      ref={wrapperRef}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`h-full transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_24px_48px_-20px_rgba(40,85,217,0.28)] motion-reduce:transform-none motion-reduce:transition-none">
        {/* Accent bar that draws across on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#2855D9] to-cyan-400 transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        />

        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 sm:h-52">
          {/* Fallback icon, visible if the image fails to load */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-blue-300 [&_svg]:h-12 [&_svg]:w-12"
          >
            {icon}
          </div>

          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="relative h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transform-none motion-reduce:transition-none"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          {/* Soft bottom fade for a cleaner image-to-content edge */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            {service.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="-mt-9 relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-[#2855D9] shadow-md transition-colors duration-300 group-hover:bg-[#2855D9] group-hover:text-white motion-reduce:transition-none">
              {icon}
            </span>

            <span className="ml-auto shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-xs font-bold text-slate-500 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-[#2855D9]">
              {service.number}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-800 sm:text-xl">
            {service.title}
          </h3>

          {/* Duration and price */}
          <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              <span aria-hidden="true">◷</span>
              <span>{service.duration} minutes</span>
            </span>

            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles.pill}`}
            >
              {getServicePrice(service)}
            </span>
          </p>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {service.description}
          </p>

          {/* Ideal for */}
          <div className="mt-4 rounded-xl border-l-[3px] border-[#2855D9]/70 bg-slate-50 p-3.5 transition-colors duration-300 group-hover:bg-blue-50/60">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Ideal for
            </p>

            <p className="mt-1.5 text-sm leading-6 text-slate-700">
              {service.idealFor}
            </p>
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-2">
            {service.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-blue-700 transition-colors duration-300 group-hover:bg-[#2855D9] group-hover:text-white"
                >
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action */}
          <div className="mt-auto pt-6">
            <div className="mb-3 flex items-center gap-2 border-t border-slate-100 pt-4">
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${styles.dot}`}
              />
              <span className="text-xs font-medium text-slate-500">
                {getServiceTypeLabel(service)}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onBook(service.id)}
              className="group/btn relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#2855D9] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#1e43b5] hover:shadow-lg hover:shadow-blue-600/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              {/* Light sweep on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 ease-out group-hover/btn:left-full group-hover/btn:opacity-100 motion-reduce:hidden"
              />

              <span className="relative">
                {isBusiness
                  ? "Enquire about this service"
                  : "Book this service"}
              </span>

              <span
                aria-hidden="true"
                className="relative transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transform-none"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}