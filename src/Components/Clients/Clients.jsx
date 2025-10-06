import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dynamic clients data
const clients = [
  { name: "Aramco Saudi", logo: "/Logo/aramco.png" },
  { name: "ADNOC", logo: "/Logo/ADNOC.png" },
  { name: "ENGIE", logo: "/Logo/ENGIE.png" },
  { name: "CAIRN", logo: "/Logo/CAIRN.png" },
  { name: "rekeep", logo: "/Logo/rekeep.png" },
  { name: "Cipla", logo: "/Logo/Cipla.png" },
  { name: "OQGN", logo: "/Logo/OQGN.png" },
  { name: "Petromaint", logo: "/Logo/Petromaint.png" },
  { name: "SOYVEN", logo: "/Logo/SOYVEN.png" },
  { name: "SEIL", logo: "/Logo/SEIL.png" },
];

export default function OurClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // number of logos visible at once

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleItems >= clients.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - visibleItems < 0 ? clients.length - visibleItems : prev - 1
    );
  };

  return (
    <Element
      name="clients"
      className="py-10 min-h-[50vh] text-center relative"
    >
      <h2 className="text-4xl font-bold mb-10">Our Clients</h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / clients.length) * 100}%)`,
            width: `${(clients.length / visibleItems) * 100}%`,
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-6 w-1/4" // 4 per row
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
