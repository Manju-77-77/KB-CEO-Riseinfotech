"use client";

const services = [
  {
    title: "SAP Consulting",
    description:
      "Helping enterprises accelerate digital transformation with end-to-end SAP solutions.",
    highlights: [
      "S/4HANA Implementation",
      "Global Rollouts",
      "AMS Support",
    ],
  },
  {
    title: "Corporate Training",
    description:
      "Industry-focused training programs designed around practical scenarios and projects.",
    highlights: [
      "SAP MM",
      "SAP FICO",
      "Real-Time Projects",
    ],
  },
  {
    title: "Career Support",
    description:
      "Helping SAP professionals build successful careers with expert guidance.",
    highlights: [
      "Resume Building",
      "Mock Interviews",
      "Placement Assistance",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-slate-50 py-14 md:py-16"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
            Services
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            SAP Consulting &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Development
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Helping enterprises achieve digital transformation and
            professionals build successful SAP careers through consulting,
            training, and career support.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">

          {services.map((service, index) => (
            <article
              key={service.title}
              className="
                group
                flex
                h-full
                flex-col
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-400
                hover:shadow-2xl
                hover:shadow-slate-900/15
              "
            >

              {/* Number */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-3">

                {service.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    {item}
                  </div>
                ))}

              </div>

              {/* CTA */}
              <a
                href="https://www.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-200
                  bg-blue-50
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-blue-700
                  transition-all
                  duration-300
                  hover:bg-blue-600
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-blue-200
                "
              >
                Visit Website
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}