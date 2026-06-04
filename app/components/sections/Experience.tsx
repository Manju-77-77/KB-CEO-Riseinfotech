"use client";
import Image from "next/image";

const companies = [
  {
    name: "TCS",
    fullName: "Tata Consultancy Services",
    role: "SAP Consultant",
    logo: "/assets/tcs.png",
  },
  {
    name: "IBM",
    fullName: "IBM Corporation",
    role: "Advisory Consultant",
    logo: "/assets/ibm.png",
  },
  {
    name: "NTT DATA",
    fullName: "NTT DATA Services",
    role: "Lead Consultant",
    logo: "/assets/nttdata.png",
  },
  {
    name: "Rise Infotech",
    fullName: "Rise Infotech",
    role: "Founder & CEO",
    logo: "/assets/logor.png",
  },
];

export default function TrustedExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="relative overflow-hidden bg-slate-50 py-14 md:py-16 lg:py-20
      "
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <header className="mx-auto mb-14 max-w-3xl text-center md:mb-16">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
            Professional Journey
          </span>

          <h2
            id="experience-heading"
            className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Trusted Experience Across
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Nearly a decade of SAP consulting, enterprise
            implementations, corporate training, and digital
            transformation experience across globally recognized
            organizations.
          </p>

        </header>

        {/* Cards */}
        <ul
          className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Companies worked with"
        >
          {companies.map((company, index) => (
            <li
              key={company.name}
              itemScope
              itemType="https://schema.org/OrganizationRole"
              itemProp="itemListElement"
            >
              <article
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-lg
                  shadow-slate-100
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-xl
                  hover:shadow-blue-100
                  sm:p-8
                "
                aria-label={`${company.fullName} — ${company.role}`}
              >
                {/* Hover Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">

                  <meta
                    itemProp="position"
                    content={String(index + 1)}
                  />

                  {/* Logo */}
                  <div className="mb-8 flex h-16 items-center justify-center">

                    <Image
                      src={company.logo}
                      alt={`${company.fullName} logo`}
                      width={140}
                      height={60}
                      className="h-auto max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      itemProp="logo"
                    />

                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent" />

                  {/* Company */}
                  <h3
                    className="mt-6 text-lg font-bold text-slate-900"
                    itemProp="name"
                  >
                    {company.name}
                  </h3>

                  {/* Role */}
                  <p
                    className="mt-2 text-sm leading-relaxed text-slate-600"
                    itemProp="roleName"
                  >
                    {company.role}
                  </p>

                </div>

              </article>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

