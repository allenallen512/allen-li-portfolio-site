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
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      isHomePage ? "bg-transparent" : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
    }`}>
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Left: Logo Image and Text */}
          <div className="pl-8 flex items-center gap-4">
            <img
              src={isHomePage ? "/assets/inverted-logo.png" : "/assets/personal-logo.png"}
              alt="Allen Li Logo"
              className="h-28 w-28 object-contain"
            />
          </div>
          {/* Right: Navigation */}
          <div className="pr-8">
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
      </div>
    </header>
  );
};

export default Navigation;
