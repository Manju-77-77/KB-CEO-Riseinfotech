
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Experience from "./Experience";
import Expertise from "./Expertise";
import Industries from "./Industries";

type TimelineItem = {
  year: string;
  company: string;
  title: string;
  desc: string;
  projects?: string;
  industries?: string;
  focus?: string;
  mission?: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2015",
    company: "Education | B.E. – Mechanical Engineering",
    title: "KLE Institute of Technology (KLEIT), Hubballi",
    desc: "Developed strong technical, analytical, and problem-solving skills.",
  },
  {
    year: "2016",
    company: "IBM | SAP End User",
    title: "SAP End User – Procurement & Supply Chain",
    desc: "Gained practical experience in purchasing, procurement, inventory management, and supply chain operations.",
    focus: "Procurement, Inventory & Supply Chain.",
  },
  {
    year: "2017",
    company: "SAP | Functional Consultant",
    title: "SAP MM Functional Consultant",
    desc: "Specialized in SAP MM configuration, procurement processes, testing, and business process optimization.",
    projects: "SAP S/4HANA Implementation, Testing & Support.",
  },
  {
    year: "2018",
    company: "TCS | SAP MM Senior Consultant",
    title: "SAP MM Senior Consultant – Implementation & Support",
    desc: "Delivered SAP MM solutions for procurement, inventory management, and process improvement.",
    projects:
      "S/4HANA Implementation, Functional Testing & Application Support.",
    industries: "Healthcare, Food Processing & Electronics.",
  },
  {
    year: "2022",
    company: "IBM | Advisory Consultant",
    title: "Advisory Consultant – SAP S/4HANA",
    desc: "Contributed to enterprise transformation, solution design, and process optimization.",
    projects:
      "S/4HANA On-Premise & Cloud Implementations, Global Rollouts, Data Migration & System Upgrades.",
    industries:
      "Healthcare, Chemicals, Oil & Gas, Energy & Utilities.",
  },
  {
    year: "2024",
    company: "NTT DATA | Lead Consultant",
    title: "Lead Consultant – SAP S/4HANA",
    desc: "Led solution delivery, data migration, and enterprise procurement transformation.",
    projects:
      "S/4HANA Public Cloud Implementation, Data Migration & Global Rollouts.",
    industries:
      "Stationery & Consumables, Electronics & Healthcare.",
  },
  {
    year: "2025",
    company: "Rise Infotech | Founder",
    title: "Founder – SAP Training & Consulting",
    desc: "Founded Rise Infotech to deliver industry-oriented SAP training, consulting, and practical learning experiences.",
    focus:
      "Corporate Training, End-to-End SAP Projects, Career Mentorship & Consulting.",
    mission: "We don't just teach SAP — we transform careers.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameRef = useRef<number | null>(null);
  const secondFrameRef = useRef<number | null>(null);
  const completionTimeoutRef = useRef<number | null>(null);
  const blinkTimeoutRef = useRef<number | null>(null);
  const completionStarted = useRef(false);

  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(
    timeline.map(() => false)
  );
  const [progress, setProgress] = useState(0);
  const [journeyCompleted, setJourneyCompleted] = useState(false);
  const [finalCardBlink, setFinalCardBlink] = useState(false);
  const [lineBounds, setLineBounds] = useState({
    top: 16,
    height: 0,
  });

  const markerCenter = useCallback(
    (index: number, listTop: number) => {
      const marker = markerRefs.current[index];
      const item = itemRefs.current[index];
      const visible =
        !!marker && getComputedStyle(marker).display !== "none";
      const element = visible ? marker : item;

      if (!element) return null;

      const rect = element.getBoundingClientRect();

      return (
        (visible ? rect.top + rect.height / 2 : rect.top) -
        listTop
      );
    },
    []
  );

  const updateLineBounds = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const listTop = list.getBoundingClientRect().top;
    const first = markerCenter(0, listTop);
    const last = markerCenter(timeline.length - 1, listTop);

    if (first === null || last === null) return;

    setLineBounds({
      top: first,
      height: Math.max(0, last - first),
    });
  }, [markerCenter]);

  const updateTimeline = useCallback(() => {
    const section = sectionRef.current;
    const list = listRef.current;

    if (!section || !list) return;

    const activationPoint = window.innerHeight * 0.43;
    const sectionRect = section.getBoundingClientRect();
    let nextActive = 0;

    if (
      sectionRect.top <= activationPoint &&
      sectionRect.bottom > 0
    ) {
      itemRefs.current.forEach((item, index) => {
        if (
          item &&
          (markerCenter(index, 0) ?? Infinity) <= activationPoint
        ) {
          nextActive = index;
        }
      });

      setRevealed((previous) => {
        let changed = false;

        const next = previous.map((shown, index) => {
          if (index <= nextActive && !shown) {
            changed = true;
            return true;
          }

          return shown;
        });

        return changed ? next : previous;
      });
    }

    setActive((previous) =>
      previous === nextActive ? previous : nextActive
    );
  }, [markerCenter]);

  const updateLineProgress = useCallback(() => {
    const section = sectionRef.current;
    const list = listRef.current;

    if (!section || !list) return;

    if (
      section.getBoundingClientRect().top >
      window.innerHeight * 0.43
    ) {
      setProgress(0);
      setActive(0);
      return;
    }

    let currentIndex = 0;
    const activationPoint = window.innerHeight * 0.43;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const marker = markerRefs.current[index];
      const visible =
        !!marker && getComputedStyle(marker).display !== "none";
      const element = visible ? marker : item;
      const rect = element!.getBoundingClientRect();
      const position = visible
        ? rect.top + rect.height / 2
        : rect.top;

      if (position <= activationPoint) {
        currentIndex = index;
      }
    });

    setActive((previous) =>
      previous === currentIndex ? previous : currentIndex
    );

    const listTop = list.getBoundingClientRect().top;
    const first = markerCenter(0, listTop);
    const current = markerCenter(currentIndex, listTop);

    if (first === null || current === null) return;

    const nextProgress = Math.max(0, current - first);

    setProgress((previous) =>
      Math.abs(previous - nextProgress) > 0.5
        ? nextProgress
        : previous
    );
  }, [markerCenter]);

  // Animate the final timeline marker after the last card appears.
  useEffect(() => {
    if (
      !revealed[timeline.length - 1] ||
      completionStarted.current
    ) {
      return;
    }

    completionStarted.current = true;

    completionTimeoutRef.current = window.setTimeout(() => {
      setJourneyCompleted(true);
      setFinalCardBlink(true);

      blinkTimeoutRef.current = window.setTimeout(() => {
        setFinalCardBlink(false);
        blinkTimeoutRef.current = null;
      }, 900);

      completionTimeoutRef.current = null;
    }, 550);

    return () => {
      if (completionTimeoutRef.current !== null) {
        window.clearTimeout(completionTimeoutRef.current);
        completionTimeoutRef.current = null;
      }
    };
  }, [revealed]);

  // Update timeline positions efficiently while scrolling.
  useEffect(() => {
    const update = () => {
      updateTimeline();
      updateLineBounds();
      updateLineProgress();
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      if (secondFrameRef.current !== null) {
        cancelAnimationFrame(secondFrameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;

        secondFrameRef.current = requestAnimationFrame(() => {
          secondFrameRef.current = null;
          update();
        });
      });
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        update();
      });
    };

    scheduleUpdate();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
      window.removeEventListener("load", scheduleUpdate);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      if (secondFrameRef.current !== null) {
        cancelAnimationFrame(secondFrameRef.current);
      }
    };
  }, [updateTimeline, updateLineBounds, updateLineProgress]);

  // Keep the timeline line aligned when cards resize.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new ResizeObserver(() => {
      updateLineBounds();
      updateLineProgress();
    });

    observer.observe(list);
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    window.addEventListener("resize", updateLineBounds);
    window.addEventListener("load", updateLineBounds);

    updateLineBounds();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLineBounds);
      window.removeEventListener("load", updateLineBounds);
    };
  }, [updateLineBounds, updateLineProgress]);

  // Clean up timers on unmount.
  useEffect(
    () => () => {
      if (completionTimeoutRef.current !== null) {
        window.clearTimeout(completionTimeoutRef.current);
      }

      if (blinkTimeoutRef.current !== null) {
        window.clearTimeout(blinkTimeoutRef.current);
      }
    },
    []
  );

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="relative bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            {/* EXECUTIVE PROFILE */}
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

              {/* Profile image with hover zoom */}
              <div className="group relative mt-7 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_45px_-15px_rgba(15,30,61,0.18)]">
                <div className="relative h-[320px] w-full overflow-hidden sm:h-[380px]">
                  <Image
                    src="/assets/CEO- KB image.jpeg"
                    alt="Kumaresh Bidari at Rise Infotech"
                    fill
                    preload
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-bottom transition-transform duration-1000 ease-in-out group-hover:scale-105 motion-reduce:transition-none"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 px-5 py-4">
                    <p className="text-sm font-semibold text-white">
                      Kumaresh Bidari
                    </p>
                    <p className="text-xs text-white/80">
                      Founder &amp; CEO, Rise Infotech
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Kumaresh Bidari is an SAP S/4HANA Consultant, Corporate
                Trainer, and Founder &amp; CEO of Rise Infotech with over
                10 years of industry experience. Having worked with
                leading organizations including TCS, IBM, and NTT DATA,
                he has successfully delivered SAP implementations,
                global rollouts, data migration, and digital
                transformation initiatives while mentoring aspiring SAP
                professionals through practical, real-time training
                programs and helping them build successful careers in
                SAP S/4HANA.
              </p>
            </div>

            {/* PROFESSIONAL JOURNEY TIMELINE */}
            <div ref={listRef} className="relative space-y-5">
              {/* Grey timeline track with animated blue progress */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-0 hidden w-[3px] -translate-x-1/2 overflow-hidden rounded-full bg-slate-200 md:block"
                style={{
                  top: `${lineBounds.top}px`,
                  height: `${lineBounds.height}px`,
                }}
              >
                <div
                  className="w-full rounded-full bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-400"
                  style={{
                    height: `${Math.min(progress, lineBounds.height)}px`,
                    transition:
                      "height 450ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              </div>

              {timeline.map((item, index) => {
                const isActive = active === index;
                const isFinalCard = index === timeline.length - 1;
                const isGreen =
                  isFinalCard &&
                  journeyCompleted &&
                  revealed[index];

                return (
                  <div
                    key={`${item.year}-${item.company}`}
                    ref={(element) => {
                      itemRefs.current[index] = element;
                    }}
                    className="group relative animate-[timelineCardIn_700ms_cubic-bezier(0.22,1,0.36,1)_both] transition-transform duration-500 ease-out hover:-translate-y-1 motion-reduce:animate-none motion-reduce:transition-none md:pl-14"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {/* Desktop timeline marker */}
                    <div
                      ref={(element) => {
                        markerRefs.current[index] = element;
                      }}
                      className={`absolute left-0 top-5 z-10 hidden h-8 w-8 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-all duration-700 ease-in-out md:flex ${
                        isGreen
                          ? "timeline-heartbeat border-emerald-400 bg-emerald-400 text-white"
                          : "border-blue-600 bg-blue-600 text-white shadow-sm"
                      } ${
                        isFinalCard && finalCardBlink
                          ? "timeline-final-blink"
                          : ""
                      }`}
                    >
                      {item.year.slice(2)}
                    </div>

                    {/* Mobile year label */}
                    <span
                      className={`mb-2 inline-flex rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-500 md:hidden ${
                        isActive
                          ? "border-blue-200 bg-blue-50 text-blue-600"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Animated journey card */}
                    <div
                      className={`relative overflow-hidden rounded-2xl border bg-white p-5 transition-[border-color,box-shadow,background-color,transform] duration-500 ease-out group-hover:border-blue-300 group-hover:shadow-[0_18px_38px_-20px_rgba(37,99,235,0.45)] sm:p-6 ${
                        isActive
                          ? "border-blue-200 bg-blue-50/[0.12] shadow-[0_12px_32px_-18px_rgba(37,99,235,0.35)]"
                          : "border-slate-200 shadow-sm"
                      }`}
                    >
                      {/* Animated gradient border */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 transition-transform duration-500 ease-out group-hover:scale-x-100"
                      />

                      {/* Company and year */}
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 sm:text-sm">
                          {item.company}
                        </p>

                        <span className="hidden shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 md:inline-flex">
                          {item.year}
                        </span>
                      </div>

                      {/* Role or qualification */}
                      <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-800 sm:text-lg">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        {item.desc}
                      </p>

                      {/* Projects */}
                      {item.projects && (
                        <div className="mt-4 border-t border-slate-100 pt-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Projects
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.projects}
                          </p>
                        </div>
                      )}

                      {/* Industries */}
                      {item.industries && (
                        <div className="mt-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Industries
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.industries}
                          </p>
                        </div>
                      )}

                      {/* Focus areas */}
                      {item.focus && (
                        <div className="mt-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Focus Areas
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.focus}
                          </p>
                        </div>
                      )}

                      {/* Rise Infotech mission */}
                      {item.mission && (
                        <div className="mt-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 transition-colors duration-300 hover:border-blue-200">
                          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                            Our Mission
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-800 sm:text-base">
                            “{item.mission}”
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Expertise />
      <Industries />

      <style jsx>{`
        @keyframes timelineCardIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}
