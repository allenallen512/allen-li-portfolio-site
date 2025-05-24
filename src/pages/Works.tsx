
import Layout from "../components/Layout";

const Works = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A comprehensive design system for a fintech startup",
      image: "/placeholder.svg",
      tags: ["UI/UX Design", "Product Strategy", "Design Systems"]
    },
    {
      id: 2,
      title: "Mobile App Redesign",
      description: "Complete overhaul of a fitness tracking application",
      image: "/placeholder.svg",
      tags: ["Mobile Design", "User Research", "Prototyping"]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack development of a custom e-commerce solution",
      image: "/placeholder.svg",
      tags: ["Full-Stack Development", "React", "Node.js"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-hanson text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-wide">
              Works
            </h1>
            <p className="font-hanson text-lg text-gray-600 mb-16 tracking-wide">
              A collection of case studies showcasing my design and development work.
            </p>

            <div className="grid gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="group cursor-pointer">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-6 aspect-video">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-hanson text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
                      {study.title}
                    </h2>
                    <p className="font-hanson text-lg text-gray-600 tracking-wide">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="font-hanson text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
