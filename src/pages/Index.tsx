
import { Instagram, Linkedin } from "lucide-react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-200 relative flex items-center justify-center">
        {/* Main Content */}
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
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
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

        {/* Brand Logo */}
        <div className="fixed top-8 left-8">
          <h2 className="font-hanson text-2xl font-bold text-white tracking-wide">
            ali.
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
