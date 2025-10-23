import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const imageModules = import.meta.glob(
    "/src/assets/Events/*.{jpg,jpeg,png,webp}",
    { eager: true }
  );

  useEffect(() => {
    const loaded = Object.keys(imageModules).map((path) => {
      const filename = path.split("/").pop();
      const title = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      return { src: imageModules[path].default, title };
    });
    setImages(loaded);
  }, []);

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  const visibleCount = 9;
  const half = Math.floor(visibleCount / 2);

  const getPosition = (i) => {
    let diff = i - index;
    if (diff < -half) diff += images.length;
    if (diff > half) diff -= images.length;
    return diff;
  };

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <section
      id="events"
      className="relative z-0 py-20 bg-gradient-to-b from-gray-50 to-gray-200 overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 tracking-wide">
          Events
        </h2>
      </div>

      {/* Gallery Carousel */}
      <div className="relative w-full flex justify-center items-center">
        <div className="relative flex justify-center items-center w-full h-[420px] md:h-[500px] overflow-hidden">
          {images.map((img, i) => {
            const position = getPosition(i);
            if (Math.abs(position) > half) return null;

            const scale = 1.3 - Math.abs(position) * 0.15;
            const blur = Math.abs(position) * 1.5;
            const opacity = 1 - Math.abs(position) * 0.15;
            const zIndex = 40 - Math.abs(position); // keep navbar above
            const translateX = position * 180;
            const rotateY = position * -10;

            const isCAMA = img.title.toLowerCase().includes("cama");
            const imageScale = isCAMA
              ? "object-contain md:object-cover scale-[1.05] md:scale-[1]"
              : "object-cover";

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
                  <img
                    src={img.src}
                    alt={img.title}
                    className={`w-[280px] h-[200px] md:w-[420px] md:h-[300px] rounded-3xl shadow-2xl border-4 border-white bg-white ${imageScale}`}
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

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[45] bg-white/70 hover:bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[45] bg-white/70 hover:bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>
      </div>

      {/* 🌊 Enhanced Moving Dash Progress Bar */}
      <div className="relative mt-12 w-[90%] max-w-3xl mx-auto h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full overflow-hidden shadow-inner">
        {/* Tick marks illusion */}
        <div className="absolute inset-0 flex justify-between items-center">
          {[...Array(images.length * 4)].map((_, i) => (
            <div
              key={i}
              className={`${
                i % 5 === 0
                  ? "h-3 bg-gray-400/60"
                  : i % 2 === 0
                  ? "h-2 bg-gray-400/30"
                  : "h-1 bg-gray-400/20"
              } w-[1.5px] rounded-full`}
            ></div>
          ))}
        </div>

        {/* Inner gradient layer for 3D illusion */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/40 via-transparent to-gray-50/40 mix-blend-overlay pointer-events-none"></div>

        {/* Moving glowing dash */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-[0_0_15px_6px_rgba(37,99,235,0.5)] animate-pulse transition-all duration-[900ms] ease-[cubic-bezier(0.45,0,0.55,1)]"
          style={{
            left: `${(index / (images.length - 1)) * 100}%`,
            transform: "translate(-50%, -50%) scale(1.1)",
          }}
        ></div>

        {/* Blue glowing trail */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-blue-500/50 blur-sm transition-all duration-[900ms]"
          style={{
            width: `${(index / (images.length - 1)) * 100}%`,
          }}
        ></div>
      </div>

      {/* Cinematic overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-gray-100/50 via-transparent to-gray-100/50 pointer-events-none z-10"></div>
    </section>
  );
};

export default Gallery;
