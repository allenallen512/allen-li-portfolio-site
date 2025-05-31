
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className={`font-hanson text-2xl font-bold tracking-wide ${
            isHomePage ? "text-white" : "text-gray-900"
          }`}>
            ali.
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-hanson text-lg font-bold tracking-wide transition-all duration-300 hover:opacity-70 ${
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
    </header>
  );
};

export default Navigation;
