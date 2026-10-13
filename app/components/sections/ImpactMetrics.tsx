
"use client";

const metrics = [
  {
    value: "10+",
    label: "SAP Industry Experience",
  },
  {
    value: "5+",
    label: "SAP MM Training Experience",
  },
  {
    value: "SAP",
    label: "S/4HANA Expertise",
  },
  {
    value: "6+",
    label: "Industries Served",
  },
];

export default function ImpactMetrics() {
  return (
    <section
      id="achievements"
      className="relative scroll-mt-40 overflow-hidden py-12 md:py-14"
    >
      {/* Original Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" />

      {/* Original Glow Effects */}
      <div
        className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/50 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-200/50 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
            Impact &amp; Achievements
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Delivering Measurable
            <span className="mt-1 block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Driving enterprise transformation through SAP expertise,
            corporate training, implementation excellence, and measurable
            business outcomes.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.22)] sm:p-8"
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number and Icon */}
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  0{index + 1}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-blue-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600"
                  aria-hidden="true"
                >
                  <path
                    d="M5 17 10 12l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 8h5v5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Metric Value */}
              <h3 className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                {metric.value}
              </h3>

              <div className="mt-5 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-blue-100" />

              {/* Metric Label */}
              <p className="mt-4 min-h-10 text-sm font-medium leading-6 text-slate-600">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
