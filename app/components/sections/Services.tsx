
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
      className="relative overflow-hidden bg-slate-50 py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            SAP Consulting &
            <span className="mt-1 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Development
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Helping enterprises achieve digital transformation and
            professionals build successful SAP careers through consulting,
            training, and career support.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
        </div>

        {/* Service Cards */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.25)] sm:p-8"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number and label */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-lg font-bold text-blue-700 transition-all duration-300 group-hover:border-blue-200 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="my-6 h-px bg-slate-100" />

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                What we offer
              </p>

              <ul className="space-y-4">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path
                          d="m5 10 3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                {/* Navigate to the dedicated Services & Booking page */}
                <a
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200/60"
                >
                  Book a Session
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h12m-5-5 5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
