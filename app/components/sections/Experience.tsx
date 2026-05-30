import Image from "next/image";

const companies = [
  {
    name: "TCS",
    role: "SAP Consultant",
    logo: "/assets/tcs.png",
  },
  {
    name: "IBM",
    role: "Advisory Consultant",
    logo: "/assets/ibm.png",
  },
  {
    name: "NTT DATA",
    role: "Lead Consultant",
    logo: "/assets/nttdata.png",
  },
  {
    name: "Rise Infotech",
    role: "Founder & CEO",
    logo: "/assets/logor.png",
  },
];

export default function TrustedExperience() {
  return (
    <section
      id="experience"
      className="relative bg-[#050816] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
            Professional Journey
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Trusted Experience Across
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Nearly a decade of SAP consulting, enterprise implementations,
            corporate training, and digital transformation experience across
            globally recognized organizations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {companies.map((company) => (
            <article
              key={company.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Logo */}
                <div className="mb-6 flex h-16 items-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={140}
                    height={60}
                    className="h-auto max-h-12 w-auto object-contain"
                  />
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-blue-500/60 via-blue-400/20 to-transparent" />

                {/* Role */}
                <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {company.role}
                </p>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}