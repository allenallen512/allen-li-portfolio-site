
import Layout from "../components/Layout";
import WorkCard from "../components/WorkCard";

const Works = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A comprehensive design system for a fintech startup that revolutionized their user experience.",
      image: "/placeholder.svg",
      tags: ["UI/UX Design", "Product Strategy", "Design Systems"]
    },
    {
      id: 2,
      title: "Mobile App Redesign",
      description: "Complete overhaul of a fitness tracking application with focus on user engagement and retention.",
      image: "/placeholder.svg",
      tags: ["Mobile Design", "User Research", "Prototyping"]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-stack development of a custom e-commerce solution with modern payment integration.",
      image: "/placeholder.svg",
      tags: ["Full-Stack Development", "React", "Node.js"]
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Complete brand redesign for a tech startup including logo, typography, and visual guidelines.",
      image: "/placeholder.svg",
      tags: ["Branding", "Visual Design", "Typography"]
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      description: "Enterprise dashboard design for data analytics platform with complex data visualization.",
      image: "/placeholder.svg",
      tags: ["Dashboard Design", "Data Viz", "Enterprise UX"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-hanson text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-wide">
              Works
            </h1>
            <p className="font-hanson text-lg text-gray-600 mb-16 tracking-wide max-w-2xl">
              A collection of case studies showcasing my design and development work.
            </p>

            {/* Horizontal Scrolling Container */}
            <div className="overflow-x-auto">
              <div className="flex gap-8 pb-6" style={{ width: 'max-content' }}>
                {caseStudies.map((study) => (
                  <WorkCard
                    key={study.id}
                    image={study.image}
                    title={study.title}
                    description={study.description}
                    tags={study.tags}
                  />
                ))}
                {/* Peek element to show there's more content */}
                <div className="w-20 flex-shrink-0"></div>
              </div>
            </div>

            {/* Scroll indicator */}
            <p className="font-hanson text-sm text-gray-500 mt-4 tracking-wide">
              ← Scroll horizontally to see more projects
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
