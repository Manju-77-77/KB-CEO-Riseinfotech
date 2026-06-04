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
   
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-slate-50 py-12 md:py-14"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
            Services
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            SAP Consulting &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Development
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Helping enterprises achieve digital transformation and
            professionals build successful SAP careers through
            consulting, training, and placement support.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid gap-5 lg:grid-cols-3">

          {services.map((service, index) => (
            <article
              key={service.title}
              className="
                h-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-md
              "
            >
              {/* Top */}
              <div className="mb-5 flex items-center justify-between">

               

                <span className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="mt-3 h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent" />

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-5 space-y-2">

                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    {feature}
                  </li>
                ))}

              </ul>

              {/* CTA Button */}
              <a
                href="https://enroll.riseinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Learn more about ${service.title}`}
                className="
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-700
                  hover:shadow-lg
                "
              >
                Learn More
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}