import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  scrollProgress?: number;
}

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Works", id: "works" },
  { name: "Contact", id: "contact" },
];

const Navigation = ({ scrollProgress = 0 }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const onHero = scrollProgress < 0.1;

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -55% 0px", threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => sectionObserver.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        onHero
          ? "bg-transparent"
          : "bg-black/30 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo — swap to inverted version once past the hero */}
          <div className="pl-4 md:pl-8 flex items-center gap-4">
            <img
              src={onHero ? "/assets/personal-logo.png" : "/assets/inverted-logo.png"}
              alt="Allen Li Logo"
              className="h-20 w-20 md:h-28 md:w-28 object-contain cursor-pointer transition-opacity duration-300"
              onClick={() => scrollTo("home")}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block pr-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`font-hanson text-xl font-bold tracking-wide transition-all duration-300 hover:opacity-70 ${
                    activeSection === item.id ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 px-4 py-6 bg-black/80 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`font-hanson text-lg font-bold tracking-wide transition-all duration-300 hover:opacity-70 text-left ${
                    activeSection === item.id ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
