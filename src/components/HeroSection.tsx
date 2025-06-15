
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const HeroSection = () => {
  const carouselItems = [
    "creative professional",
    "visual storyteller", 
    "brand strategist",
    "design enthusiast",
    "problem solver"
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/b8c1098c-48ca-4e74-8eff-27b23b5d228a.png')`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/20 z-1"></div>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-start w-full px-8 md:px-16">
        {/* Name section */}
        <div className="mb-16">
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

        {/* Carousel section */}
        <div className="w-full max-w-4xl">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            autoplay={true}
            autoplayInterval={3000}
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center p-6">
                    <h2 className="font-hanson text-xl md:text-2xl lg:text-3xl font-bold text-white/80 text-center leading-tight tracking-wide">
                      {item}
                    </h2>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
