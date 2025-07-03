import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      isHomePage ? "bg-transparent" : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
    }`}>
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Left: Logo Image */}
          <div className="pl-4 md:pl-8 flex items-center gap-4">
            <img
              src={isHomePage ? "/assets/inverted-logo.png" : "/assets/personal-logo.png"}
              alt="Allen Li Logo"
              className="h-20 w-20 md:h-28 md:w-28 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                isHomePage ? "text-white" : "text-gray-900"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block pr-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-hanson text-xl font-bold tracking-wide transition-all duration-300 hover:opacity-70 ${
                    isHomePage 
                      ? location.pathname === item.path
                        ? "text-white"
                        : "text-white/80"
                      : location.pathname === item.path
                        ? "text-gray-900"
                        : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className={`flex flex-col space-y-4 px-4 py-6 ${
              isHomePage ? "bg-black/90" : "bg-white"
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-hanson text-lg font-bold tracking-wide transition-all duration-300 hover:opacity-70 ${
                    isHomePage 
                      ? "text-white"
                      : location.pathname === item.path
                        ? "text-gray-900"
                        : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
