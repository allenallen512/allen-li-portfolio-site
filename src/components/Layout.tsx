
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className={isHomePage ? "" : "pt-20"}>{children}</main>
    </div>
  );
};

export default Layout;
