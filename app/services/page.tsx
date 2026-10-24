
"use client";

import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import BookingForm from "./BookingForm";

export default function ServicesPage() {
  const bookingRef = useRef<HTMLElement>(null);

  // Display all six original services.
  const businessServices = services;

  function handleBook(serviceId: string) {
    const select = document.getElementById("service");

    if (select instanceof HTMLSelectElement) {
      const setter = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )?.set;

      setter?.call(select, serviceId);
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    bookingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="min-h-screen bg-white pt-[76px] text-slate-900 lg:pt-[88px]">
      <Navbar />

      
    {/* Hero banner */}
    <header className="relative isolate flex min-h-[175px] items-center justify-center overflow-hidden px-5 py-8 text-center sm:min-h-[205px] sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 grid grid-cols-4 sm:grid-cols-6"
      >
        <div className="bg-[#8CC5F0]" />
        <div className="bg-[#62A2DE]" />
        <div className="bg-[#4389D0]" />
        <div className="bg-[#3169B0]" />
        <div className="hidden bg-[#244F91] sm:block" />
        <div className="hidden bg-[#193B78] sm:block" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-sm">
          Rise Infotech
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Services &amp; Consulting
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/95 sm:text-base">
          SAP training, career development, and consulting services
          for businesses and organizations.
        </p>
      </div>
    </header>

      {/* Consultant introduction */}
      <section className="mx-auto max-w-7xl px-5 pb-2 pt-8 sm:px-8 sm:pt-10 lg:px-10">
        <div className="max-w-5xl border-l-4 border-[#2855D9] pl-4 sm:pl-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2855D9] sm:text-sm">
            Business SAP Solutions
          </p>

          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            SAP Training &amp; Consulting with{" "}
            <span className="text-[#2855D9]">Kumaresh Bidari</span>
          </h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#2855D9] sm:text-base">
            SAP S/4HANA Consultant
            <span className="mx-2 text-slate-400">|</span>
            Corporate Trainer
            <span className="mx-2 text-slate-400">|</span>
            Career Mentor
            <span className="mx-2 text-slate-400">|</span>
            Founder – Rise Infotech
          </p>

        </div>
      </section>

      {/* Six existing services */}
      <section
        id="services"
        className="bg-white pb-10 pt-6 sm:pb-14 sm:pt-8"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {businessServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={handleBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section
        ref={bookingRef}
        className="scroll-mt-24 border-t border-slate-100 bg-slate-50/70"
      >
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12 lg:px-10">
          
            <div className="mb-5 max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Let&apos;s Connect –{" "}
                <span className="text-[#2855D9]">
                  Your Goals, My Expertise.
                </span>
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Select a service, provide your details, and share your
                preferred schedule and business requirements.
              </p>
            </div>


          <BookingForm />
        </div>
      </section>
    </main>
  );
}
