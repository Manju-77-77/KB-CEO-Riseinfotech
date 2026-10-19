
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
  return (
    <article
  className="group flex flex-col gap-5 border-b border-slate-200 py-8 sm:flex-row sm:gap-6"
>
      {/* Service image */}
      <div className="h-40 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-40 sm:w-44">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Service details */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-900">
            {service.number}. {service.title}
          </h2>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {getServiceTypeLabel(service)}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          <span aria-hidden="true">◷</span>{" "}
          {service.duration} Minutes
          <span className="mx-3">•</span>
          {getServicePrice(service)}
        </p>

        <p className="mt-3 leading-7 text-slate-700">
          {service.description}
        </p>

        <p className="mt-3 leading-7 text-slate-700">
          <strong>Ideal for:</strong> {service.idealFor}
        </p>

        {/* Booking button */}
        <button
          type="button"
          onClick={() => onBook(service.id)}
          className="group/book relative mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
        >
          <span className="relative py-0.5">
            Book this service
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-blue-700 transition-transform duration-300 ease-out group-hover/book:scale-x-100 group-focus-visible/book:scale-x-100 motion-reduce:transition-none"
            />
          </span>

          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 ease-out group-hover/book:translate-x-1 group-focus-visible/book:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
          >
            →
          </span>
        </button>
      </div>
    </article>
  );
}
