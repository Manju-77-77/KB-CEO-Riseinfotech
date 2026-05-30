"use client";
export default function About() {
  return (

<section
  id="about"
  className="relative bg-[#071021] py-20 md:py-24 lg:py-28 text-white"
>
  <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

    <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

      {/* LEFT CONTENT */}
      <div>

        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
          Executive Profile
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
          Driving Enterprise
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            SAP Transformation
          </span>
        </h2>

        <p className="mt-8 text-base leading-relaxed text-gray-400 sm:text-lg">
          Kumaresh Bidari is an SAP S/4HANA Consultant,
          Corporate Trainer and Founder & CEO of Rise
          Infotech with nearly a decade of experience
          delivering enterprise ERP solutions across
          industries.
        </p>

        <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
          Having worked with leading organizations like
          TCS, IBM and NTT DATA, he has successfully
          contributed to SAP implementations, global
          rollouts, migrations and enterprise support
          projects across multiple domains.
        </p>

        <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
          Today, through Rise Infotech, he is focused on
          helping businesses maximize SAP investments
          while empowering professionals through
          industry-focused training and placement
          support.
        </p>

        {/* Quick Highlights */}
        <div className="mt-10 grid grid-cols-2 gap-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-blue-400">
              10+
            </h3>
            <p className="text-sm text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-lg">
            <h3 className="text-2xl font-bold text-blue-400">
              200+
            </h3>
            <p className="text-sm text-gray-400">
              Placements
            </p>
          </div>

        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent md:block" />

        <div className="space-y-8 md:space-y-10">

          {[
            {
              year: "2011",
              title: "Mechanical Engineering",
              desc: "Started technical journey."
            },
            {
              year: "2015",
              title: "SAP Career Begins",
              desc: "Entered ERP consulting ecosystem."
            },
            {
              year: "2022",
              title: "IBM",
              desc: "Advisory Consultant."
            },
            {
              year: "2024",
              title: "NTT DATA",
              desc: "Lead Consultant."
            },
            {
              year: "2025",
              title: "Rise Infotech",
              desc: "Founded SAP Training & Consulting Company."
            }
          ].map((item) => (
            <div
              key={item.year}
              className="relative md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600 text-sm font-bold md:flex">
                {item.year}
              </div>

              {/* Mobile Year */}
              <span className="mb-3 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400 md:hidden">
                {item.year}
              </span>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]">

                <h3 className="text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
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