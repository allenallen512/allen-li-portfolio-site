
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const HeroSection = () => {
  const carouselItems = [
    "software developer",
    "gym rat",
    "product designer",
    "traveler",
    "water polo player",
    "Aggie",
    "product manager",
    "reader",
    "music enjoyer",
    "runner",


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
        <div className="w-full">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            autoplay={true}
            autoplayInterval={1000}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="flex items-center justify-center p-3">
                    <h2 className="font-hanson text-sm md:text-base lg:text-lg font-bold text-white/70 text-center leading-tight tracking-wide">
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
