
import { useState, useEffect } from "react";

const AboutSection = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const items = [
    "product designer",
    "software developer", 
    "product manager",
    "reader",
    "music listener",
    "runner",
    "weight lifter"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev < items.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [isVisible, items.length]);

  return (
    <section 
      id="about-section"
      className="h-screen flex items-center justify-start relative"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/b8c1098c-48ca-4e74-8eff-27b23b5d228a.png')`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/20 z-1"></div>
      <div className="relative z-10 left-8 md:left-16">
        {isVisible && (
          <div className="space-y-4">
            <p className="font-hanson text-lg md:text-xl text-white/90 tracking-wide animate-fade-in">
              I'm allen i am a:
            </p>
            <div className="flex flex-wrap items-center gap-x-2">
              {items.slice(0, visibleItems).map((item, index) => (
                <span
                  key={index}
                  className="font-hanson text-lg md:text-xl text-white/90 tracking-wide animate-fade-in"
                  style={{
                    animationDelay: `${(index + 1) * 0.8}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {item}
                  {index < items.length - 1 && index < visibleItems - 1 && ","}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
