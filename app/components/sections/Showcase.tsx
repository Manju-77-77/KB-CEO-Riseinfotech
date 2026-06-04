"use client";

import Image from "next/image";

export default function RiseInfotech() {
return ( <section
   id="rise-infotech"
   className="relative bg-white py-10 md:py-12 lg:py-16"
 > <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


    <div className="grid items-center gap-8 lg:grid-cols-[55%_45%] lg:gap-12">

      {/* LEFT CONTENT */}
      <div>

        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
          Rise Infotech
        </span>

        <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Empowering Businesses &
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Future SAP Professionals
          </span>
        </h2>

        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          Rise Infotech is a Bengaluru-based SAP Training and
          Consulting organization founded by Kumaresh Bidari.
          The company helps enterprises implement SAP solutions
          while enabling professionals to build successful careers
          through practical training and placement support.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Through real-time projects, industry-focused learning,
          SAP consulting expertise and placement guidance,
          Rise Infotech bridges the gap between business
          requirements and skilled SAP professionals.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <a
            href="https://enroll.riseinfotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          >
            Enroll Now
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-300 px-6 py-3 text-center font-medium text-slate-900 transition hover:bg-slate-50"
          >
            Contact Us
          </a>

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div>

        {/* Office / Training Image */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-slate-100">

          <Image
            src="/assets/rise2.jpeg"
            alt="Rise Infotech Office and SAP Training Center"
            width={1200}
            height={800}
            className="h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] w-full object-cover transition-transform duration-500 hover:scale-105"
          />

        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <h3 className="text-2xl font-bold text-blue-600 sm:text-3xl">
              200+
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-900 sm:text-sm">
              Successful Placements
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <h3 className="text-2xl font-bold text-blue-600 sm:text-3xl">
              100+
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-900 sm:text-sm">
              Students Trained
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <h3 className="text-2xl font-bold text-blue-600 sm:text-3xl">
              SAP
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-900 sm:text-sm">
              Corporate Training
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <h3 className="text-2xl font-bold text-blue-600 sm:text-3xl">
              ERP
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-900 sm:text-sm">
              Consulting Services
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>


);
}
