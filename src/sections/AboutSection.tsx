import TimelineTile from "../components/TimelineTile";
import { Download, Github } from "lucide-react";
import { professionalEvents, personalEvents } from "../data/aboutData";

// Normalise "November 2025", "Febuary 2025", etc. → "2025"; "Currently" stays as-is
const normalizeYear = (year: string): string => {
  if (year === "Currently") return "Currently";
  const match = year.match(/\d{4}/);
  return match ? match[0] : year;
};

// Label card — frozen left side of the timeline
const RowLabel = ({ label, color }: { label: string; color: string }) => (
  <div
    className="flex-shrink-0 w-16 flex items-center justify-center h-[100px] sm:h-[180px]"
  >
    <span
      className="font-hanson text-[10px] font-bold tracking-[0.15em] writing-vertical"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        color,
        letterSpacing: "0.15em",
      }}
    >
      {label}
    </span>
  </div>
);

const AboutSection = () => {
  // Build sorted year list (Currently first, then descending)
  const allYears = Array.from(
    new Set([
      ...professionalEvents.map((e) => normalizeYear(e.year)),
      ...personalEvents.map((e) => normalizeYear(e.year)),
    ])
  ).sort((a, b) => {
    if (a === "Currently") return -1;
    if (b === "Currently") return 1;
    return parseInt(b) - parseInt(a);
  });

  const proByYear = professionalEvents.reduce<Record<string, typeof professionalEvents>>(
    (acc, e) => { const y = normalizeYear(e.year); (acc[y] ??= []).push(e); return acc; },
    {}
  );
  const perByYear = personalEvents.reduce<Record<string, typeof personalEvents>>(
    (acc, e) => { const y = normalizeYear(e.year); (acc[y] ??= []).push(e); return acc; },
    {}
  );

  return (
    <section id="about" className="min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-8 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-hanson text-3xl md:text-5xl font-bold mb-4 text-white">
              About
            </h1>
          </div>

          {/* Bio Section */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <h2 className="font-hanson text-2xl md:text-3xl font-bold text-white">
                Allen Li
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                📍 New York City, NY
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                Passionate about building
                high quality and innovative solutions for problems that matter.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                I've been awarded multiple organizational accolades for my work in leadership and recruitment. I pride myself on
                versatility and adaptability, always eager to learn and grow in new environments.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/assets/Allen_Li_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 text-white font-hanson font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 text-sm sm:text-base hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="https://github.com/allenallen512"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white font-hanson font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 text-sm sm:text-base hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>

            <div
              className="aspect-square rounded-2xl flex items-center justify-center overflow-hidden w-full max-w-sm md:max-w-none mx-auto order-1 md:order-2"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="/assets/grad_pic.jpeg"
                alt="Allen Li Graduation"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <h2 className="font-hanson text-3xl md:text-4xl font-bold text-white mb-1">
              Timeline
            </h2>
            <p className="font-hanson text-xs text-white/35 mb-8 tracking-wide">
              Scroll to explore →
            </p>

            {/* Two-row layout: frozen labels + year-aligned scroll container */}
            <div className="flex items-stretch gap-0">
              {/* Frozen row labels — spacer matches the year-label row height */}
              <div className="flex-shrink-0 flex flex-col gap-4">
                <div className="h-8" /> {/* year-label row spacer */}
                <RowLabel label="WORK" color="rgba(147,197,253,0.8)" />
                <RowLabel label="LIFE" color="rgba(196,181,253,0.8)" />
              </div>

              {/* Horizontal scroll — one column per year, both rows travel together */}
              <div
                data-h-scroll
                className="hide-scrollbar overflow-x-auto overflow-y-hidden flex-1"
              >
                <div className="flex gap-6 w-max">
                  {allYears.map((year) => {
                    const workEvents = proByYear[year] ?? [];
                    const lifeEvents = perByYear[year] ?? [];
                    return (
                      <div key={year} className="flex flex-col gap-4">
                        {/* Year label */}
                        <div className="h-8 flex items-center">
                          <span className="font-hanson text-[10px] tracking-widest text-white/30">
                            {year}
                          </span>
                        </div>

                        {/* Work row for this year */}
                        <div className="flex gap-3">
                          {workEvents.length > 0 ? (
                            workEvents.map((event, i) => (
                              <TimelineTile
                                key={`pro-${year}-${i}`}
                                type="professional"
                                year={event.year}
                                title={event.title}
                                company={event.company}
                                description={event.description}
                              />
                            ))
                          ) : (
                            <div className="w-[130px] sm:w-[220px] h-[100px] sm:h-[180px] opacity-0 flex-shrink-0" />
                          )}
                        </div>

                        {/* Life row for this year */}
                        <div className="flex gap-3">
                          {lifeEvents.length > 0 ? (
                            lifeEvents.map((event, i) => (
                              <TimelineTile
                                key={`per-${year}-${i}`}
                                type="personal"
                                year={event.year}
                                title={event.title}
                                description={event.description}
                              />
                            ))
                          ) : (
                            <div className="w-[130px] sm:w-[220px] h-[100px] sm:h-[180px] opacity-0 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {/* Trailing spacer */}
                  <div className="w-6 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
