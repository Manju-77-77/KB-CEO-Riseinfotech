
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
      className="relative overflow-hidden bg-white py-14 md:py-16 lg:py-20"
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
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Success Stories &
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Impact
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Experiences shared by professionals and organizations
            who have benefited from consulting, training, and
            mentorship initiatives.
          </p>

        </div>

        {/* Testimonials */}
        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <article
              key={item.name}
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

                {/* Quote Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-3xl font-bold text-blue-600">
                  &quot;
                </div>

                {/* Review */}
                <p className="text-base leading-relaxed text-slate-600">
                  {item.review}
                </p>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-500 via-blue-200 to-transparent" />

                {/* Profile */}
                <div className="mt-6">

                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {item.role}
                  </p>

                </div>

                {/* Number Badge */}
                <div className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center rounded-bl-2xl bg-blue-50 text-sm font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
