"use client";
const testimonials = [
  {
    name: "SAP MM Professional",
    role: "Placed at Leading MNC",
    review:
      "The practical SAP training and mentorship provided exceptional industry exposure. The placement guidance helped me confidently transition into the SAP ecosystem.",
  },
  {
    name: "Corporate Training Client",
    role: "Operations Manager",
    review:
      "Kumaresh's expertise in SAP implementation and business process optimization delivered measurable improvements in operational efficiency.",
  },
  {
    name: "SAP Consultant",
    role: "Career Transition Success",
    review:
      "The structured training, real-time projects and interview preparation significantly accelerated my SAP career journey.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#050816] py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-400 sm:text-sm">
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Success Stories &
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Professional Impact
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            Experiences shared by professionals and organizations
            who have benefited from consulting, training and
            mentorship initiatives.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 lg:grid-cols-3">

          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-2"
            >
              <div className="mb-6 text-5xl text-blue-400">
                “
              </div>

              <p className="text-gray-400 leading-relaxed">
                {item.review}
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-blue-400">
                  {item.role}
                </p>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
