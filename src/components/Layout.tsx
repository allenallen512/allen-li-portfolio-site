
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;
