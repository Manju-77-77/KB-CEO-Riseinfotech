"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const timeline = [
  {
    year: "2015",
    title: "SAP Consulting Career",
    desc: "Started professional journey in SAP consulting, focusing on enterprise solutions, procurement processes, and business transformation.",
  },
  {
    year: "2018",
    title: "TCS",
    desc: "Worked as SAP Consultant delivering SAP implementations, support engagements, and business process optimization for enterprise clients.",
  },
  {
    year: "2022",
    title: "IBM",
    desc: "Served as Advisory Consultant contributing to SAP transformation programs, solution design, and enterprise modernization initiatives.",
  },
  {
    year: "2024",
    title: "NTT DATA",
    desc: "Worked as Lead Consultant driving SAP implementations, global rollout programs, and large-scale enterprise transformation projects.",
  },
  {
    year: "2025",
    title: "Rise Infotech",
    desc: "Founded Rise Infotech to empower organizations and professionals through SAP consulting, corporate training, and career development programs.",
  },
];

export default function About() {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrame = useRef<number | null>(null);

  // Revealed cards remain visible permanently.
  const [revealed, setRevealed] = useState<boolean[]>(
    timeline.map(() => false)
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = timelineRefs.current.filter(
      (element): element is HTMLDivElement => element !== null
    );

    if (elements.length === 0) return;

    // Reveal each card as it enters the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleIndices = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) =>
            Number(entry.target.getAttribute("data-timeline-index"))
          );

        if (visibleIndices.length > 0) {
          setRevealed((previous) => {
            const next = [...previous];

            visibleIndices.forEach((index) => {
              if (index >= 0 && index < next.length) {
                next[index] = true;
              }
            });

            return next;
          });
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    // Move the active circle to the card nearest the activation point.
    const updateActiveCard = () => {
      const activationPoint = window.innerHeight * 0.43;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const referencePoint = rect.top + Math.min(rect.height / 2, 48);
        const distance = Math.abs(referencePoint - activationPoint);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((previous) =>
        previous === closestIndex ? previous : closestIndex
      );
    };

    const handleScroll = () => {
      if (animationFrame.current !== null) return;

      animationFrame.current = window.requestAnimationFrame(() => {
        updateActiveCard();
        animationFrame.current = null;
      });
    };

    const handleResize = () => {
      updateActiveCard();
    };

    updateActiveCard();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };
  }, []);

  return (
    <section id="about" className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[44%_56%] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-600">
              Executive Profile
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Driving Enterprise
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SAP Transformation
              </span>
            </h2>

            <div className="relative mt-7 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_45px_-15px_rgba(15,30,61,0.18)]">
              <div className="relative h-[320px] w-full sm:h-[380px]">
                <Image
                  src="/assets/rise1.png"
                  alt="Kumaresh Bidari at Rise Infotech"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-bottom"
                />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Kumaresh Bidari
                    </p>
                    <p className="text-xs text-white/80">
                      Founder &amp; CEO, Rise Infotech
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Kumaresh Bidari is an SAP S/4HANA Consultant, Corporate Trainer,
              and Founder &amp; CEO of Rise Infotech with over 10 years of
              industry experience. Having worked with leading organizations
              including TCS, IBM, and NTT DATA, he has successfully delivered
              SAP implementations, global rollouts, data migration, and digital
              transformation initiatives while mentoring aspiring SAP
              professionals through practical, real-time training programs and
              helping them build successful careers in SAP S/4HANA.
            </p>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            {/* Timeline track */}
            <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-blue-200 via-slate-200 to-transparent md:block">
              <div
                className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-blue-600 to-cyan-500 transition-[height] duration-700 ease-in-out"
                style={{
                  height: `${(activeIndex / (timeline.length - 1)) * 100}%`,
                }}
              />
            </div>

            <div className="space-y-5">
              {timeline.map((item, index) => {
                const isActive = activeIndex === index;
                const isRevealed = revealed[index];

                return (
                  <div
                    key={`${item.year}-${index}`}
                    ref={(element) => {
                      timelineRefs.current[index] = element;
                    }}
                    data-timeline-index={index}
                    className={`group relative md:pl-14 transition-[opacity,transform,filter] duration-1000 ease-out motion-reduce:transition-none ${
                      isRevealed
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-12 opacity-0 blur-[3px]"
                    }`}
                  >
                    {/* Timeline circle */}
                    <div
                      className={`absolute left-0 top-1.5 z-10 hidden h-8 w-8 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-[background-color,border-color,color,box-shadow] duration-500 ease-out md:flex ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-[0_0_0_5px_rgba(37,99,235,0.12)]"
                          : "border-blue-200 bg-white text-blue-600 shadow-sm"
                      }`}
                    >
                      {item.year.slice(2)}
                    </div>

                    {/* Mobile year */}
                    <span
                      className={`mb-2 inline-flex rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 md:hidden ${
                        isActive
                          ? "border-blue-200 bg-blue-50 text-blue-600"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Original-size experience card */}
                    <div
                      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-[border-color,box-shadow] duration-500 ease-out ${
                        isActive
                          ? "border-blue-200 shadow-lg shadow-blue-100/60"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <span className="hidden text-xs font-medium text-blue-500 md:inline">
                          {item.year}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}