
"use client";

const services = [
  {
    title: "SAP Consulting",
    description:
      "End-to-end SAP consulting services helping organizations optimize operations, accelerate transformation, and maximize ROI from SAP investments.",
    features: [
      "SAP S/4HANA Implementation",
      "Migration & Upgrades",
      "Global Rollouts",
      "AMS Support",
      "Cutover Planning",
    ],
    icon: "⚙️",
  },
  {
    title: "Corporate Training",
    description:
      "Industry-focused SAP training programs designed to build practical expertise through real-world scenarios and project-based learning.",
    features: [
      "SAP MM",
      "SAP FICO",
      "SAP SD",
      "SAP ABAP",
      "Real-Time Projects",
    ],
    icon: "🎓",
  },
  {
    title: "Career & Placement Support",
    description:
      "Comprehensive career acceleration services helping SAP professionals secure opportunities with leading organizations.",
    features: [
      "Resume Building",
      "Mock Interviews",
      "Career Guidance",
      "Certification Support",
      "Placement Assistance",
    ],
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-14 md:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
            Services
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Comprehensive SAP &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Business Solutions
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Helping businesses transform operations and professionals
            build successful careers through consulting, training,
            and placement support.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service, index) => (
            <article
              key={service.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                shadow-slate-100
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl
                hover:shadow-blue-100
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Top */}
                <div className="mb-6 flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-2xl">
                    {service.icon}
                  </div>

                  <span className="text-sm font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent" />

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">

                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}

                </ul>

                {/* CTA */}
                <button
                  aria-label={`Learn more about ${service.title}`}
                  className="
                    mt-8
                    w-full
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-blue-700
                  "
                >
                  Learn More
                </button>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

