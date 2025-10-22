import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  // Auto-import all images from src/assets/Events
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

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  // Show 5 images (2 left, center, 2 right)
  const visibleCount = 5;
  const half = Math.floor(visibleCount / 2);

  const getPosition = (i) => {
    let diff = i - index;
    if (diff < -half) diff += images.length;
    if (diff > half) diff -= images.length;
    return diff;
  };

  const handleClick = (position) => {
    if (position === 1) {
      // Clicked right image → next
      setIndex((prev) => (prev + 1) % images.length);
    } else if (position === -1) {
      // Clicked left image → previous
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-100 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Events</h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center">
        <div className="relative flex justify-center items-center w-full h-[480px]">
          {images.map((img, i) => {
            const position = getPosition(i);
            if (Math.abs(position) > half) return null;

            // Adjust transformation values for size and spacing
            const scale = 1.3 - Math.abs(position) * 0.25; // Center is 1.3x
            const blur = Math.abs(position) * 2;
            const zIndex = 10 - Math.abs(position);
            const opacity = position === 0 ? 1 : 0.7;
            const translateX = position * 320;

            return (
              <div
                key={i}
                className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${
                  position === 0 ? "pointer-events-none" : "hover:opacity-90"
                }`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  filter: `blur(${blur}px)`,
                  opacity,
                  zIndex,
                }}
                onClick={() => handleClick(position)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-[460px] h-[340px] object-contain rounded-2xl shadow-2xl border-4 border-white bg-white"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
