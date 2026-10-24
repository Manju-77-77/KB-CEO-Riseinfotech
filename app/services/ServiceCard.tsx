
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
  const isBusiness = service.audience === "business";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 sm:h-52">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-800 sm:text-xl">
            {service.title}
          </h3>

          <span className="shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-xs font-bold text-slate-500">
            {service.number}
          </span>
        </div>

        {/* Duration and price */}
        <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
          <span aria-hidden="true">◷</span>
          <span>{service.duration} minutes</span>
          <span aria-hidden="true">•</span>
          <span className="font-semibold text-slate-800">
            {getServicePrice(service)}
          </span>
        </p>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-slate-600">
          {service.description}
        </p>

        {/* Ideal for — fixed: idealFor is a string */}
        <div className="mt-4 rounded-xl bg-slate-50 p-3.5">
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
              className="flex items-start gap-2 text-sm leading-5 text-slate-600"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 font-bold text-blue-700"
              >
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action */}
        <div className="mt-auto pt-6">
          <div className="mb-3">
            <span className="text-xs font-medium text-slate-500">
              {getServiceTypeLabel(service)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onBook(service.id)}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2855D9] px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1e43b5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none"
          >
            <span>
              {isBusiness
                ? "Enquire about this service"
                : "Book this service"}
            </span>

            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
