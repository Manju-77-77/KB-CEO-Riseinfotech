
"use client";

import type { Service } from "./servicesData";
import {
  getServicePrice,
  getServiceTypeLabel,
} from "./servicesData";

interface ServiceCardProps {
  service: Service;
  onBook: (serviceId: string) => void;
}

export default function ServiceCard({
  service,
  onBook,
}: ServiceCardProps) {
  const isB2B = service.section === "b2b";

  const consultationLabel = isB2B
    ? "Enquiry Only"
    : getServiceTypeLabel(service);

  const consultationStyles =
    consultationLabel === "Free Consultation"
      ? {
          text: "text-emerald-700",
          dot: "bg-emerald-500",
        }
      : consultationLabel === "Paid Consultation"
        ? {
            text: "text-[#2855D9]",
            dot: "bg-[#2855D9]",
          }
        : consultationLabel === "Eligibility Required"
          ? {
              text: "text-orange-600",
              dot: "bg-orange-500",
            }
          : {
              text: "text-slate-600",
              dot: "bg-slate-400",
            };

  const price = getServicePrice(service);

  const priceBadgeColor =
    service.type === "free"
      ? "border-emerald-200 bg-emerald-50/80 text-emerald-700"
      : service.type === "paid"
        ? "border-blue-200 bg-blue-50/80 text-blue-700"
        : service.type === "eligibility"
          ? "border-orange-200 bg-orange-50/80 text-orange-700"
          : "border-slate-200 bg-slate-50 text-slate-600";

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] motion-reduce:transform-none motion-reduce:transition-none">
      {/* Image */}
      <div className="relative h-44 shrink-0 overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 sm:h-48">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
          onError={(event) => {
            console.error(
              `Failed to load service image: ${service.image}`
            );
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Title */}
        <h3 className="text-base font-bold leading-snug tracking-[-0.015em] text-slate-900 transition-colors duration-200 group-hover:text-[#2855D9] sm:text-lg">
          {service.title}
        </h3>

        {/* Duration and price badges — B2C */}
        {!isB2B && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-3.5 w-3.5 shrink-0"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {service.duration} minutes
            </span>

            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${priceBadgeColor}`}
            >
              {price}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="mt-3 text-sm leading-[1.65] text-slate-600">
          {service.description}
        </p>

        {/* Consultation label and button */}
        <div className="mt-auto border-t border-slate-100 pt-3.5">
          <div className="mb-3 flex min-h-4 items-center gap-1.5">
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full ${consultationStyles.dot}`}
            />

            <span
              className={`text-xs font-medium ${consultationStyles.text}`}
            >
              {consultationLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onBook(service.id)}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#2855D9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-[background-color,box-shadow] duration-200 hover:bg-[#1e43b5] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            <span>Book This Service</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
