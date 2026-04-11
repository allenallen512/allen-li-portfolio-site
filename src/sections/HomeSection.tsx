import { Github, Instagram, Linkedin } from "lucide-react";
import HeroSection from "../components/HeroSection";

const HomeSection = () => {
  return (
    <section id="home" className="relative">
      <HeroSection />
      {/* Fixed Social Media Icons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-20">
        <a
          href="https://instagram.com/allenli512"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/allenli512"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/allenallen512"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <Github size={24} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
