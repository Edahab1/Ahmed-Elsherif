import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const imageModules = import.meta.glob("/src/assets/Events/*.{jpg,jpeg,png,webp}", { eager: true });

  useEffect(() => {
    const loaded = Object.keys(imageModules).map((path) => {
      const filename = path.split("/").pop();
      const title = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      return { src: imageModules[path].default, title };
    });
    setImages(loaded);
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  const visibleCount = 9; // Total visible (4 left + center + 4 right)
  const half = Math.floor(visibleCount / 2);

  const getPosition = (i) => {
    let diff = i - index;
    if (diff < -half) diff += images.length;
    if (diff > half) diff -= images.length;
    return diff;
  };

  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <section
      id="events"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-200 overflow-hidden relative"
    >
      <div className="text-center mb-12 relative z-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 tracking-wide">Events</h2>
        <p className="text-gray-600 text-lg">A glimpse of our memorable moments</p>
      </div>

      <div className="relative w-full flex justify-center items-center">
        {/* Carousel Container */}
        <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
          {images.map((img, i) => {
            const position = getPosition(i);
            if (Math.abs(position) > half) return null;

            const scale = 1.3 - Math.abs(position) * 0.15;
            const blur = Math.abs(position) * 1.5;
            const opacity = 1 - Math.abs(position) * 0.15;
            const zIndex = 50 - Math.abs(position);
            const translateX = position * 180;
            const rotateY = position * -10;

            return (
              <div
                key={i}
                className="absolute transition-all duration-[900ms] ease-[cubic-bezier(0.45,0,0.55,1)] cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  filter: `blur(${blur}px)`,
                  opacity,
                  zIndex,
                }}
              >
                <div className="relative">
                  {/* Main image */}
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-[420px] h-[300px] object-contain rounded-3xl shadow-2xl border-4 border-white bg-white"
                  />

                  {/* Reflection */}
                  <div
                    className="absolute left-0 right-0 bottom-[-60px] opacity-30 blur-[2px]"
                    style={{
                      transform: "scaleY(-1)",
                      backgroundImage: `url(${img.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "60px",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-[60] bg-white/70 hover:bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8 text-gray-800" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-[60] bg-white/70 hover:bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-8 h-8 text-gray-800" />
        </button>
      </div>

      {/* Gradient overlay for cinematic depth */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-gray-100/50 via-transparent to-gray-100/50 pointer-events-none z-10"></div>
    </section>
  );
};

export default Gallery;
