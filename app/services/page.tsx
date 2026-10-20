"use client";

import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
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
    <main className="min-h-screen bg-white pt-[76px] text-slate-900 lg:pt-[88px]">
      {/* Shared Navbar */}
      <Navbar />

      {/* Banner with vertical blue colour divisions */}
      <header className="relative isolate flex min-h-[150px] items-center justify-center overflow-hidden px-5 py-8 text-center sm:min-h-[175px] sm:px-8 sm:py-10">
        {/* Divided gradient background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 grid grid-cols-4 sm:grid-cols-6"
        >
          <div className="bg-[#8CC5F0] transition-colors duration-300 hover:bg-[#79B8E9]" />
          <div className="bg-[#62A2DE] transition-colors duration-300 hover:bg-[#5597D5]" />
          <div className="bg-[#4389D0] transition-colors duration-300 hover:bg-[#367BC3]" />
          <div className="bg-[#3169B0] transition-colors duration-300 hover:bg-[#285CA2]" />
          <div className="hidden bg-[#244F91] transition-colors duration-300 hover:bg-[#1D447F] sm:block" />
          <div className="hidden bg-[#193B78] transition-colors duration-300 hover:bg-[#153366] sm:block" />
        </div>

        {/* Centred banner content */}
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-sm">
            Rise Infotech
          </p>

          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Services &amp; Booking
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/95 sm:text-base">
            Book personalized SAP guidance, training, and consulting sessions.
          </p>
        </div>
      </header>

      {/* Consultant Introduction */}
      <section className="mx-auto max-w-6xl px-5 pt-9 sm:px-8 sm:pt-12">
        <div className="mb-9 max-w-4xl sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-sm">
            Personalised SAP Support
          </p>

          <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Book a 1:1 Session with{" "}
            <span className="text-[#2855D9]">
              Kumaresh Bidari
            </span>
          </h2>

          <p className="mt-3 text-sm font-semibold leading-7 text-[#2855D9] sm:text-base">
            SAP S/4HANA Consultant
            <span className="mx-2 text-slate-400">|</span>
            Corporate Trainer
            <span className="mx-2 text-slate-400">|</span>
            Career Mentor
            <span className="mx-2 text-slate-400">|</span>
            Founder – Rise Infotech
          </p>

          <div className="mt-6 max-w-3xl">
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Your SAP Career Deserves the Right Guidance.
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
              Whether you're starting your SAP journey, preparing for
              interviews, improving your resume, or exploring new career
              opportunities, book a personalized session to get practical
              guidance based on industry experience.
            </p>
          </div>
        </div>

        {/* Services Heading */}
        <div className="mb-5 border-b border-slate-200 pb-5 sm:mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-sm">
            Explore Your Options
          </p>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Services &amp; Booking Options
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Choose a service that matches your career goals and book your session.
          </p>
        </div>

        {/* Service Cards */}
        <div className="divide-y divide-slate-200">
          {services.map((service) => (
            <div
              key={service.id}
              className="transition-colors duration-200 hover:bg-blue-50/30"
            >
              <ServiceCard
                service={service}
                onBook={handleBook}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section
        ref={bookingRef}
        className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14"
      >
        <BookingForm />
      </section>
    </main>
  );
}