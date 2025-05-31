
const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-start relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/b8c1098c-48ca-4e74-8eff-27b23b5d228a.png')`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/20 z-1"></div>
      <div className="relative z-10 left-8 md:left-16">
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
    </section>
  );
};

export default HeroSection;
