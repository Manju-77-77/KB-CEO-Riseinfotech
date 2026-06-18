"use client";

import Image from "next/image";

export default function About() {
  const timeline = [
    {
      year: "2015",
      title: "SAP Consulting Career",
      desc: "Started professional journey in SAP consulting, focusing on enterprise solutions, procurement processes, and business transformation.",
    },
    {
      year: "2018",
      title: "TCS",
      desc: "Worked as SAP Consultant delivering SAP implementations, support engagements, and business process optimization for enterprise clients.",
    },
    {
      year: "2022",
      title: "IBM",
      desc: "Served as Advisory Consultant contributing to SAP transformation programs, solution design, and enterprise modernization initiatives.",
    },
    {
      year: "2024",
      title: "NTT DATA",
      desc: "Worked as Lead Consultant driving SAP implementations, global rollout programs, and large-scale enterprise transformation projects.",
    },
    {
      year: "2025",
      title: "Rise Infotech",
      desc: "Founded Rise Infotech to empower organizations and professionals through SAP consulting, corporate training, and career development programs.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">

        <div className="grid items-start gap-12 lg:grid-cols-[45%_55%]">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
              Executive Profile
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Driving Enterprise
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SAP Transformation
              </span>
            </h2>

              {/* IMAGE */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

              <Image
                src=""
                alt="Kumaresh Bidari at Rise Infotech"
                width={800}
                height={500}
                className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>


            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Kumaresh Bidari is an SAP S/4HANA Consultant, Corporate Trainer, and Founder & CEO of Rise Infotech with 10+ years of industry experience. Having worked with TCS, IBM, and NTT DATA, he has delivered SAP implementations, global rollouts, data migration, and digital transformation projects while mentoring thousands of aspiring SAP professionals.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Having worked with TCS, IBM and NTT DATA, he has led SAP
              implementations, global rollouts, migrations and digital
              transformation initiatives while helping professionals build
              successful SAP careers through Rise Infotech.
            </p>

            {/* STATS
            <div className="mt-6 flex gap-4">

              <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-2xl font-bold text-blue-600">
                  10+
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Years SAP Consulting
                </p>
              </div>

              <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-2xl font-bold text-blue-600">
                  200+
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Career Placements
                </p>
              </div>

            </div> */}

          
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-4 top-0 hidden h-full w-[2px] bg-slate-200 md:block" />

            <div className="space-y-4">

              {timeline.map((item, index) => (
                <div
                  key={`${item.year}-${index}`}
                  className="relative md:pl-14"
                >

                  {/* Desktop Year */}
                  <div className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-[10px] font-bold text-blue-600 shadow-sm md:flex">
                    {item.year}
                  </div>

                  {/* Mobile Year */}
                  <span className="mb-2 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 md:hidden">
                    {item.year}
                  </span>

                  {/* Timeline Card */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">

                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}