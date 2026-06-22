"use client";

import Image from "next/image";

const highlights = [
  {
    title: "SAP Consulting",
    subtitle: "S/4HANA Expertise",
  },
  {
    title: "Corporate Training",
    subtitle: "Industry Focused",
  },
  {
    title: "Career Support",
    subtitle: "Professional Guidance",
  },
  {
    title: "ERP Solutions",
    subtitle: "Digital Transformation",
  },
];

export default function RiseInfotech() {
  return (
    <section
      id="rise-infotech"
      className="relative overflow-hidden bg-white py-10 lg:py-14"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-[55%_45%]">

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

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Rise Infotech is a Bengaluru-based SAP consulting and training
              organization founded by Kumaresh Bidari. The company helps
              enterprises accelerate digital transformation while enabling
              professionals to build successful careers through practical
              learning, real-world exposure, and industry guidance.
            </p>

            {/* Highlight Cards */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400
                    hover:bg-blue-50
                    hover:shadow-xl
                    hover:shadow-blue-100
                  "
                >
                  <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.subtitle}
                  </p>
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href="https://www.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  bg-blue-600
                  px-7
                  py-3
                  text-center
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-700
                  hover:shadow-lg
                  hover:shadow-blue-200
                "
              >
                Visit Website
              </a>

             <a
  href="https://www.riseinfotech.in/contact"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-xl
    border
    border-slate-300
    px-7
    py-3
    text-center
    font-semibold
    text-slate-900
    transition-all
    duration-300
    hover:border-blue-600
    hover:bg-blue-50
    hover:text-blue-700
  "
>
  Contact Us
</a>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200">

              <Image
                src="/assets/rise2.jpeg"
                alt="Rise Infotech Office"
                width={1200}
                height={800}
                className="
                  h-[240px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105

                  sm:h-[300px]
                  lg:h-[420px]
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}