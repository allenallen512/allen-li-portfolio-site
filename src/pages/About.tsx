
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="container mx-auto px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-hanson text-5xl md:text-6xl font-bold mb-12 text-center">
              About
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
                  not only meet objectives but exceed expectations. Every project 
                  is an opportunity to explore new possibilities and create 
                  something truly unique.
                </p>
                <div className="pt-4">
                  <h3 className="font-hanson text-xl font-bold mb-3">Expertise</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Creative Direction</li>
                    <li>• Digital Design</li>
                    <li>• Brand Strategy</li>
                    <li>• Visual Storytelling</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                <p className="text-gray-500 font-hanson">Photo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
