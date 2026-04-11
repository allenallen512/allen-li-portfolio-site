import { useState, useEffect, useMemo } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  maxOpacity: number;
}

const ShimmerParticles = ({ opacity }: { opacity: number }) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 90 }, (_, i) => ({
      id: i,
      x: (i * 137.508) % 100,
      y: (i * 97.31) % 100,
      size: i % 3 === 0 ? 1.5 : i % 3 === 1 ? 1.0 : 0.7,
      duration: 2 + (i % 7) * 0.6,
      delay: (i * 0.31) % 6,
      maxOpacity: 0.08 + (i % 5) * 0.05,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ opacity, transition: "opacity 1.2s ease", zIndex: 3 }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white shimmer-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
            "--max-opacity": p.maxOpacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Horizontal-only wheel handler — only intercepts horizontal scroll gestures
  // so vertical scrolling always works naturally throughout the page.
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!isHorizontal) return;

      const target = e.target as Element;
      const hContainer = target.closest("[data-h-scroll]") as HTMLElement | null;

      if (hContainer) {
        e.preventDefault();
        hContainer.scrollLeft += e.deltaX;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const shimmerOpacity = Math.max(0, (scrollProgress - 0.65) / 0.35);

  return (
    <div className="min-h-screen relative">
      {/*
        ─── Fixed background stack (bottom → top) ───────────────────────────
        z-index 0 : hero photo — always pinned to the viewport
        z-index 1 : permanent subtle tint (replaces the bg-black/20 on hero)
        z-index 2 : scroll-driven dark overlay (opacity 0→1 as user scrolls)
        z-index 3 : shimmer particles (appear once overlay is mostly opaque)
        z-index 10: scrolling page content
        z-index 50: navigation
        ─────────────────────────────────────────────────────────────────────
      */}

      {/* Background photo — truly fixed, never moves */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/b8c1098c-48ca-4e74-8eff-27b23b5d228a.png')`,
          zIndex: 0,
        }}
      />

      {/* Permanent subtle tint so the initial hero photo has some contrast */}
      <div
        className="fixed inset-0 bg-black/20 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Scroll-driven dark overlay */}
      <div
        className="fixed inset-0 bg-black pointer-events-none"
        style={{ opacity: scrollProgress, zIndex: 2 }}
      />

      {/* Shimmer particles */}
      <ShimmerParticles opacity={shimmerOpacity} />

      <Navigation scrollProgress={scrollProgress} />

      {/* All page content scrolls over the fixed backdrop */}
      <main className="relative" style={{ zIndex: 10 }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
