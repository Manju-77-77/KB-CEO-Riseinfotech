"use client";
const services = [
  {
    title: "SAP Consulting",
    description:
      "End-to-end SAP consulting services helping organizations streamline operations, improve efficiency and maximize business value.",
    features: [
      "SAP S/4HANA Implementation",
      "Migration & Upgrades",
      "Global Rollouts",
      "AMS Support",
      "Cutover Planning",
    ],
  },
  {
    title: "Corporate Training",
    description:
      "Industry-focused SAP training programs designed for professionals and enterprises seeking practical expertise.",
    features: [
      "SAP MM",
      "SAP FICO",
      "SAP SD",
      "SAP ABAP",
      "Real-Time Projects",
    ],
  },
  {
    title: "Placement Assistance",
    description:
      "Career acceleration programs helping aspiring SAP professionals secure opportunities in leading organizations.",
    features: [
      "Resume Building",
      "Mock Interviews",
      "Career Guidance",
      "Certification Support",
      "Placement Assistance",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#050816] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
            Services
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Comprehensive SAP &
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Business Solutions
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            Helping businesses transform operations and professionals
            build successful careers through consulting, training,
            and placement support.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid gap-6 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/60 via-blue-400/20 to-transparent" />

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  aria-label={`Learn more about ${service.title}`}
                  className="mt-8 w-full rounded-xl border border-blue-500/20 bg-blue-500/10 px-5 py-3 font-medium text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white"
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

