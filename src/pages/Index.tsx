
import { Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Index = () => {
  const [visibleItems, setVisibleItems] = useState(0);
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
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev < items.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <Layout>
      <div className="min-h-[200vh] bg-gray-200 relative">
        {/* Fixed Background and Header */}
        <div className="fixed inset-0 bg-gray-200 z-0"></div>
        
        {/* Scrollable Content */}
        <div className="relative z-10">
          {/* Main Content */}
          <div className="min-h-screen flex items-center justify-start">
            <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2">
              <div className="space-y-4">
                <h1 className="font-hanson text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-wider">
                  ALLEN
                </h1>
                <h1 className="font-hanson text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-wider">
                  LI
                </h1>
                <p className="font-hanson text-lg md:text-xl text-white/90 mt-8 tracking-wide">
                  austin, tx
                </p>
                
                {/* Dynamic Text Animation */}
                <div className="mt-12 space-y-2">
                  <p className="font-hanson text-lg md:text-xl text-white/90 tracking-wide">
                    I'm allen i am a:
                  </p>
                  <div className="space-y-1">
                    {items.slice(0, visibleItems).map((item, index) => (
                      <p 
                        key={index}
                        className="font-hanson text-lg md:text-xl text-white/90 tracking-wide animate-fade-in"
                        style={{
                          animationDelay: `${index * 0.8}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        {item}
                        {index < items.length - 1 && ","}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional scrollable content */}
          <div className="min-h-screen bg-transparent"></div>
        </div>

        {/* Fixed Social Media Icons */}
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-20">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
