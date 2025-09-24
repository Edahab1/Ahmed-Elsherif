import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "/Asset Reliability.png";
import img2 from "/CMRP.jpg";
import img3 from "/engineering design.jpg";
import img4 from "/CMRP.jpg"; // example extra card

export default function Services() {
  const consultationCards = [
    { id: 1, title: "Asset Reliability", img: img1 },
    { id: 2, title: "Engineering Design", img: img3 },
    { id: 3, title: "Extra Consultation", img: img4 },
  ];

  const trainingCards = [
    { id: 4, title: "CMRP Certification", img: img2 },
    { id: 5, title: "Advanced Training", img: img3 },
    { id: 6, title: "Workshops", img: img1 },
    { id: 7, title: "Workshops serv", img: img1 },
  ];

  const [activeTab, setActiveTab] = useState("consultation");
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const cards =
    activeTab === "consultation" ? consultationCards : trainingCards;

  // Adjust cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      setIndex(0); // reset slide on resize
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (index < cards.length - cardsPerView) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <Element
      name="services"
      className="py-16 min-h-screen bg-gray-100 flex flex-col items-center justify-center relative"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Services</h2>

      {/* Tabs */}
      <div className="flex space-x-6 mb-8">
        <button
          onClick={() => {
            setActiveTab("consultation");
            setIndex(0);
          }}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeTab === "consultation"
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Consultation
        </button>
        <button
          onClick={() => {
            setActiveTab("training");
            setIndex(0);
          }}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeTab === "training"
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Training
        </button>
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Cards wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / cardsPerView}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 h-96 flex flex-col justify-center items-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-48 w-full object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-700">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Left arrow */}
        {index > 0 && (
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-slate-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Right arrow */}
        {index < cards.length - cardsPerView && (
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-slate-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>
    </Element>
  );
}
