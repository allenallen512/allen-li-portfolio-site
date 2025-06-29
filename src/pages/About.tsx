import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import TimelineTile from "../components/TimelineTile";
import { Download } from "lucide-react";
import { professionalEvents, personalEvents } from "../data/aboutData";

const About = () => {
  const bioSectionRef = useRef<HTMLDivElement>(null);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<'bio' | 'timeline'>('bio');
  
  useEffect(() => {
    const bioSection = bioSectionRef.current;
    const timelineSection = timelineSectionRef.current;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (scrollPosition > windowHeight * 0.3 && currentSection === 'bio') {
          timelineSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setCurrentSection('timeline');
        } else if (scrollPosition < windowHeight * 0.3 && currentSection === 'timeline') {
          bioSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setCurrentSection('bio');
        }
      }, 50); // Small delay to prevent rapid firing
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection]);

  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="container mx-auto px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Smaller Header */}
            <div className="text-center mb-12">
              <h1 className="font-hanson text-4xl md:text-5xl font-bold mb-4">
                About
              </h1>
            </div>

            {/* Bio Section with Download Button */}
            <div id="bio-section" ref={bioSectionRef} className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="font-hanson text-3xl font-bold">
                  Allen Li
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Currently in: Austin, TX 
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Software Engineer at Dell Technologies. Passionate about building 
                  high quality and innovative solutions for problems that matter.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  I've been awarded multiple organizational accolades for my work in leadership and recruitment. I pride myself on 
                  versatility and adaptability, always eager to learn and grow in new environments.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Recent Texas A&M graduate (Cum Laude) with a Computer Engineering degree and Mathematics 
                  Minor.
                </p>
                <a
                  href="/assets/Allen_Li_Resume (23).pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gray-900 text-white font-hanson font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
              
              <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/grad_pic.jpeg"
                  alt="Allen Li Graduation"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Timeline Section */}
            <div id="timeline-section" ref={timelineSectionRef} className="relative">
              <h2 className="font-hanson text-4xl font-bold text-center mb-16">Timeline</h2>
              
              {/* Timeline Container */}
              <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {Math.max(professionalEvents.length, personalEvents.length) > 0 && 
                    Array.from({ length: Math.max(professionalEvents.length, personalEvents.length) }).map((_, index) => (
                      <div key={index} className="relative grid grid-cols-2 gap-8 items-center">
                        {/* Professional Side (Left) */}
                        <div className="text-right pr-8">
                          {professionalEvents[index] && (
                            <TimelineTile
                              type="professional"
                              year={professionalEvents[index].year}
                              title={professionalEvents[index].title}
                              company={professionalEvents[index].company}
                              description={professionalEvents[index].description}
                            />
                          )}
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>

                        {/* Personal Side (Right) */}
                        <div className="text-left pl-8">
                          {personalEvents[index] && (
                            <TimelineTile
                              type="personal"
                              year={personalEvents[index].year}
                              title={personalEvents[index].title}
                              description={personalEvents[index].description}
                            />
                          )}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

