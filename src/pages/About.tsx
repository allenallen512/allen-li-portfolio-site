
import Layout from "../components/Layout";
import { Download } from "lucide-react";
import { professionalEvents, personalEvents } from "../data/aboutData";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="container mx-auto px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header with Resume Download */}
            <div className="text-center mb-16">
              <h1 className="font-hanson text-5xl md:text-6xl font-bold mb-8">
                About
              </h1>
              <button className="inline-flex items-center gap-2 bg-gray-900 text-white font-hanson font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Bio Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="font-hanson text-3xl font-bold">
                  Creative Professional
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Based in Austin, Texas, I'm a passionate creative professional 
                  dedicated to bringing innovative ideas to life. My work spans 
                  across multiple disciplines, always seeking to push boundaries 
                  and create meaningful experiences.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  With a keen eye for detail and a commitment to excellence, 
                  I collaborate with clients and teams to deliver projects that 
                  not only meet objectives but exceed expectations.
                </p>
              </div>
              
              <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                <p className="text-gray-500 font-hanson">Photo Coming Soon</p>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="relative">
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
                            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-900">
                              <div className="font-hanson text-sm font-bold text-gray-500 mb-2">
                                PROFESSIONAL
                              </div>
                              <div className="font-hanson text-lg font-bold text-gray-900 mb-2">
                                {professionalEvents[index].year}
                              </div>
                              <h3 className="font-hanson text-xl font-bold mb-1">
                                {professionalEvents[index].title}
                              </h3>
                              <p className="text-gray-600 font-medium mb-2">
                                {professionalEvents[index].company}
                              </p>
                              <p className="text-gray-700 text-sm">
                                {professionalEvents[index].description}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>

                        {/* Personal Side (Right) */}
                        <div className="text-left pl-8">
                          {personalEvents[index] && (
                            <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-gray-600">
                              <div className="font-hanson text-sm font-bold text-gray-500 mb-2">
                                PERSONAL
                              </div>
                              <div className="font-hanson text-lg font-bold text-gray-900 mb-2">
                                {personalEvents[index].year}
                              </div>
                              <h3 className="font-hanson text-xl font-bold mb-2">
                                {personalEvents[index].title}
                              </h3>
                              <p className="text-gray-700 text-sm">
                                {personalEvents[index].description}
                              </p>
                            </div>
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
