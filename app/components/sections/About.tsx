"use client";

export default function About() {
  const timeline = [
    {
      year: "2011",
      title: "Mechanical Engineering",
      desc: "Started technical journey and built a strong foundation in engineering principles and problem-solving.",
    },
    {
      year: "2015",
      title: "SAP Career Begins",
      desc: "Entered the SAP ecosystem and started working on enterprise business solutions.",
    },
    {
      year: "2018",
      title: "TCS",
      desc: "Worked as SAP Consultant delivering SAP implementation, support, and business process optimization solutions for enterprise clients.",
    },
    {
      year: "2022",
      title: "IBM",
      desc: "Worked as an Advisory Consultant contributing to SAP implementation and transformation projects.",
    },
    {
      year: "2024",
      title: "NTT DATA",
      desc: "Served as Lead Consultant delivering enterprise SAP solutions and global rollout initiatives.",
    },
    {
      year: "2025",
      title: "Rise Infotech",
      desc: "Founded Rise Infotech to empower businesses and professionals through SAP consulting and training.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-white py-10 md:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
              Executive Profile
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Driving Enterprise
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SAP Transformation
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Kumaresh Bidari is an SAP S/4HANA Consultant,
              Corporate Trainer and Founder & CEO of Rise
              Infotech with nearly a decade of experience
              delivering enterprise ERP solutions across
              industries.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Having worked with leading organizations like
              TCS, IBM and NTT DATA, he has successfully
              contributed to SAP implementations, global
              rollouts, migrations and enterprise support
              projects across multiple domains.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Today, through Rise Infotech, he is focused on
              helping businesses maximize SAP investments
              while empowering professionals through
              industry-focused training and placement support.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-blue-600">
                  10+
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-blue-600">
                  200+
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Placements
                </p>
              </div>

            </div>

          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent md:block" />

            <div className="space-y-5 md:space-y-6">

              {timeline.map((item, index) => (
                <div
                  key={`${item.year}-${index}`}
                  className="relative md:pl-16"
                >
                  {/* Desktop Dot */}
                  <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-md md:flex">
                    {item.year}
                  </div>

                  {/* Mobile Year */}
                  <span className="mb-2 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 md:hidden">
                    {item.year}
                  </span>

                  {/* Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">

                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
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