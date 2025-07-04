import { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import WorkCard from "../components/WorkCard";

const Works = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const caseStudies = [
    {
      id: 1,
      title: "Chasers",
      description: "App designed to rewards users for being present in their local communities.",
      image: "/images/chaser/chaser_logo.png",
      tags: ["In-Progress", "UI/UX Design", "GTM", "Mobile Development"]
    },
    {
      id: 2,
      title: "Solar Tracker",
      description: "Weatherproof solar-powered irradiance forecasting & weather-data collection system powered by a Raspberry Pi, AWS, and customized ML.",
      image: "/images/solarTracker/STlogo.png",
      tags: ["Machine Learning", "Provisional Patent", "Embedded Systems", "2nd Place Capstone Expo"]
    },
    {
      id: 3,
      title: "wndr haus",
      description: "Application designed for creatives to rent out local spaces for events, workshops, dispatches, and more. Was never launched.",
      image: "/images/haus/wndrhaussubmark.svg",
      tags: ["React", "Supabase", "Product Strategy"]
    },
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current && window.innerWidth >= 768) { // Only do horizontal scroll on desktop
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-10xl mx-auto">
            <h1 className="font-hanson text-3xl md:text-6xl font-bold text-gray-900 mb-8 tracking-wide">
              Works
            </h1>
            <p className="font-hanson text-base md:text-lg text-gray-600 mb-16 tracking-wide max-w-2xl">
              A collection of case studies showcasing my design and development work.
            </p>

            {/* Responsive Scrolling Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden md:overflow-y-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex flex-col md:flex-row gap-8 pb-6 md:w-max">
                {caseStudies.map((study) => (
                  <WorkCard
                    key={study.id}
                    image={study.image}
                    title={study.title}
                    description={study.description}
                    tags={study.tags}
                    size="large"
                  />
                ))}
                {/* Peek element only on desktop */}
                <div className="hidden md:block w-20 flex-shrink-0"></div>
              </div>
            </div>

            {/* Scroll indicator - only show on desktop */}
            <p className="hidden md:block font-hanson text-sm text-gray-500 mt-4 tracking-wide">
              ← Scroll horizontally to see more projects
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
