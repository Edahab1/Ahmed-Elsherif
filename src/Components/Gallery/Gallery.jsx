import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  // ✅ Auto-import all images from src/assets/Events
  const imageModules = import.meta.glob("/src/assets/Events/*.{jpg,jpeg,png,webp}", { eager: true });

  useEffect(() => {
    const loadedImages = Object.keys(imageModules).map((path) => {
      const parts = path.split("/");
      const filename = parts[parts.length - 1];
      const title = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      return { src: imageModules[path].default, title };
    });
    setImages(loadedImages);
  }, []);

  const [index, setIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  // ✅ Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000); // <-- 1000ms = 1 second
    return () => clearInterval(interval);
  }, [totalSlides]);

  const start = index * itemsPerSlide;
  const visible = images.slice(start, start + itemsPerSlide);
  const displayed =
    visible.length < itemsPerSlide
      ? [...visible, ...images.slice(0, itemsPerSlide - visible.length)]
      : visible;

  return (
    <section id="events" className="py-20 px-4 bg-gray-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Events</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Automatically loaded events from the folder.
        </p>

        {/* ✅ Smooth animated slide change */}
        <div className="relative w-full overflow-hidden">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-200 ease-in-out"
            key={index} // Forces animation re-render
          >
            {displayed.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-cyan-600 scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
