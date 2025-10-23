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
      <div className="text-center relative z-10 mb-10">
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
            const zIndex = 40 - Math.abs(position);
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
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[45] bg-white/80 hover:bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[45] bg-white/80 hover:bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
        </button>
      </div>

      {/* Enhanced Dash Progress Bar */}
      <div className="relative mt-16 w-[95%] max-w-5xl mx-auto h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.15)] border border-gray-400/40">
        {/* Tick marks for "many images" illusion */}
        <div className="absolute inset-0 flex justify-between items-center">
          {[...Array(images.length * 5)].map((_, i) => (
            <div
              key={i}
              className={`${
                i % 10 === 0
                  ? "h-5 bg-gray-500/80"
                  : i % 5 === 0
                  ? "h-4 bg-gray-400/50"
                  : "h-3 bg-gray-400/25"
              } w-[2px] rounded-full`}
            ></div>
          ))}
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/10 mix-blend-overlay pointer-events-none"></div>

        {/* Blue glowing moving dash */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full shadow-[0_0_25px_10px_rgba(37,99,235,0.6)] transition-all duration-[900ms] ease-[cubic-bezier(0.45,0,0.55,1)]"
          style={{
            left:
              images.length > 1
                ? `${(index / (images.length - 1)) * 100}%`
                : "0%",
            transform: "translate(-50%, -50%) scale(1.15)",
          }}
        ></div>

        {/* Glowing blue light trail */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[4px] bg-blue-500/70 blur-md rounded-full transition-all duration-[900ms]"
          style={{
            width:
              images.length > 1
                ? `${(index / (images.length - 1)) * 100}%`
                : "0%",
          }}
        ></div>
      </div>

      {/* Cinematic overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-gray-100/50 via-transparent to-gray-100/50 pointer-events-none z-10"></div>
    </section>
  );
};

export default Gallery;
