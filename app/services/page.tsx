
"use client";

import { useRef } from "react";
import Image from "next/image";

import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import BookingForm from "./BookingForm";

export default function ServicesPage() {
  const bookingRef = useRef<HTMLElement>(null);

  function handleBook(serviceId: string) {
    const form = document.getElementById("service");

    if (form instanceof HTMLSelectElement) {
      const setter = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )?.set;

      setter?.call(form, serviceId);

      form.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    }

    bookingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <Image
            src="/assets/riseinfo.jpeg"
            alt="Rise Infotech"
            width={170}
            height={65}
            priority
            className="h-auto w-32 object-contain sm:w-40"
          />

          <div className="border-l border-slate-200 pl-4">
            <h1 className="text-xl font-bold sm:text-2xl">
              Services &amp; Booking
            </h1>

            <p className="mt-1 text-sm text-slate-600">
              Explore our services and schedule a session.
            </p>
          </div>
        </div>
      </header>

      {/* Services list */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        {/* Heading with CSS animation */}
        <div className="mb-4 animate-[fadeInUp_700ms_ease-out_both] motion-reduce:animate-none">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Explore Our Services
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Explore SAP career guidance, interview preparation,
            training, and consulting services to find the right
            support for your goals.
          </p>
        </div>

        {/* Service cards */}
        <div>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={handleBook}
            />
          ))}
        </div>
      </section>

      {/* Booking form */}
      <section
        ref={bookingRef}
        className="mx-auto max-w-6xl scroll-mt-6 px-6 pb-16 sm:pb-24"
      >
        <BookingForm />
      </section>
    </main>
  );
}
