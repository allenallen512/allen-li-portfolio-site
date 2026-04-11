import { useEffect, useRef, useState } from "react";
import WorkCard from "../components/WorkCard";

const caseStudies = [
  {
    id: 1,
    title: "Chaser",
    description:
      "App designed to rewards users for being present in their local communities.",
    image: "/images/chaser/chaser_logo.png",
    tags: ["Mobile Development", "React Native", "Product Strategy"],
    onLinkPress: "https://getchaser.app",
  },
  {
    id: 2,
    title: "Solar Tracker",
    description:
      "Weatherproof solar-powered irradiance forecasting & weather-data collection system powered by a Raspberry Pi, AWS, and customized ML. This project involves 3 repositories. I only have the LSTM model linked.",
    image: "/images/solarTracker/STlogo.png",
    tags: ["Provisional Patent", "Machine Learning", "Embedded Systems", "2nd Place Capstone Expo"],
    onLinkPress: "https://github.com/allenallen512/LSTM-Model",
  },
  {
    id: 3,
    title: "wndr haus",
    description:
      "Application designed for creatives to rent out local spaces for events, workshops, dispatches, and more.",
    image: "/images/haus/wndrhaussubmark.svg",
    tags: ["React", "Supabase", "Product Strategy"],
    onLinkPress: undefined,
  },
];

const WorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          caseStudies.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), i * 500);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="works"
      className="min-h-screen flex flex-col justify-center text-white"
    >
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className="font-hanson text-3xl md:text-4xl font-bold text-white mb-1">
            Works
          </h2>
          <p
            className="font-hanson text-xs mb-10 tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            A selection of projects I've been a part of.
          </p>

          {/* Desktop: equal-width row */}
          <div className="hidden md:flex gap-6 items-stretch">
            {caseStudies.map((study, i) => (
              <div
                key={study.id}
                className="flex-1"
                style={{
                  opacity: visibleCount > i ? 1 : 0,
                  transform: visibleCount > i ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <WorkCard
                  image={study.image}
                  title={study.title}
                  description={study.description}
                  tags={study.tags}
                  onLinkPress={study.onLinkPress}
                />
              </div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-5 md:hidden">
            {caseStudies.map((study, i) => (
              <div
                key={study.id}
                style={{
                  opacity: visibleCount > i ? 1 : 0,
                  transform: visibleCount > i ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <WorkCard
                  image={study.image}
                  title={study.title}
                  description={study.description}
                  tags={study.tags}
                  onLinkPress={study.onLinkPress}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
