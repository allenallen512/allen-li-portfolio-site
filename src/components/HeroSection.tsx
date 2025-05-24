
const HeroSection = () => {
  return (
    <section className="h-screen flex items-end justify-start bg-gray-200 relative">
      <div className="absolute inset-0 bg-gray-200 z-0"></div>
      <div className="relative z-10 left-8 md:left-16 bottom-16">
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
