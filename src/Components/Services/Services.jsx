import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Services() {
  const consultationCards = [
    { title: "ISO 55000 Compliance", img: "/Services/gearpic.jpg" },
    { title: "Reliability Strategy Development",
      img: "/Services/RSD.jpg",
    },
    { title: "Strategic Asset Management Planning", img: "/Services/SAMP.jpg" },
    { title: "Reliability Centered Maintenance (RCM)", img: "/images/rcm.jpg" },
    {
      title: "Asset Criticality Analysis & Lifecycle Planning",
      img: "/images/criticality.jpg",
    },
    {
      title: "RAM Analysis & Reliability Block Diagrams (RBD)",
      img: "/images/ram.jpg",
    },
    { title: "Asset Lifecycle Planning", img: "/images/lifecycle.jpg" },
    {
      title:
        "Failure Modes & Effects Analysis (FMEA) & Root Cause Analysis (RCA)",
      img: "/images/fmea.jpg",
    },
    { title: "Maintenance Auditing & Benchmarking", img: "/images/audit.jpg" },
    {
      title: "Workforce Engagement & Reliability Culture",
      img: "/images/workforce.jpg",
    },
    { title: "SAP PM Implementation & Optimization", img: "/images/sap.jpg" },
    {
      title: "Reliability & Asset Integrity Solution Selection",
      img: "/images/solution.jpg",
    },
    {
      title: "Asset Performance Management (APM) Solutions as a Service",
      img: "/images/apm.jpg",
    },
    { title: "Spare Parts & Inventory Optimization", img: "/images/spare.jpg" },
    {
      title: "Turnaround & Shutdown Management",
      img: "/images/turnaround.jpg",
    },
    {
      title: "Digital Transformation in Maintenance",
      img: "/images/digital.jpg",
    },
    {
      title: "Predictive & Condition-Based Maintenance (PdM/CBM)",
      img: "/images/pdm.jpg",
    },
    {
      title: "KPI Development & Performance Management",
      img: "/images/kpi.jpg",
    },
  ];

  const trainingCards = [
    { title: "CMRP Certificate Exam Preparation", img: "/images/cmrp.jpg" },
    { title: "CAMA Certificate Exam Preparation", img: "/images/cama.jpg" },
    { title: "CMRT Certificate Exam Preparation", img: "/images/cmrt.jpg" },
    {
      title: "RCM (Reliability Centered Maintenance)",
      img: "/images/rcm-training.jpg",
    },
    { title: "RCA & RCFA", img: "/images/rca.jpg" },
    {
      title: "RELM (Reliability Excellence & Leadership Masterclass)",
      img: "/images/relm.jpg",
    },
    {
      title: "Maintenance Auditing and Benchmarking",
      img: "/images/audit-training.jpg",
    },
    {
      title: "Fundamentals of Reliability Engineering",
      img: "/images/fundamentals.jpg",
    },
    { title: "TPM (Total Productive Maintenance)", img: "/images/tpm.jpg" },
    { title: "Influence Reliability Management", img: "/images/influence.jpg" },
    {
      title: "Machinery Failure Analysis & Prevention",
      img: "/images/machinery.jpg",
    },
    {
      title: "Reliability & Maintenance Engineering FMEA",
      img: "/images/fmea-training.jpg",
    },
    { title: "Understanding ISO 55000", img: "/images/iso-training.jpg" },
    { title: "Asset Management Standard", img: "/images/standard.jpg" },
    { title: "Lean Management Tools Workshop", img: "/images/lean.jpg" },
  ];

  const [activeTab, setActiveTab] = useState("consultation");
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [showModal, setShowModal] = useState(false);

  const cards =
    activeTab === "consultation" ? consultationCards : trainingCards;

  // Responsive card per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      setIndex(0);
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

      {/* Toggle Switch */}
      <div className="flex items-center justify-center mb-10">
        <div className="relative w-72 h-12 bg-gray-300 rounded-full flex items-center cursor-pointer overflow-hidden">
          {/* Active background */}
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-cyan-500 rounded-full shadow-md transform transition-transform duration-500 ease-in-out ${
              activeTab === "training" ? "translate-x-full" : ""
            }`}
          />
          {/* Options */}
          <div className="flex w-full z-10">
            <button
              onClick={() => {
                setActiveTab("consultation");
                setIndex(0);
              }}
              className={`w-1/2 text-center font-medium transition-colors ${
                activeTab === "consultation" ? "text-white" : "text-gray-700"
              }`}
            >
              Consultation
            </button>
            <button
              onClick={() => {
                setActiveTab("training");
                setIndex(0);
              }}
              className={`w-1/2 text-center font-medium transition-colors ${
                activeTab === "training" ? "text-white" : "text-gray-700"
              }`}
            >
              Training
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div
          key={activeTab}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(index * 100) / cardsPerView}%)` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="flex flex-col h-64 rounded-2xl shadow-xl overflow-hidden bg-white">
                {/* Image Section */}
                <div
                  className="flex-grow bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.img})` }}
                ></div>

                {/* Title Section */}
                <div className="bg-cyan-600 text-white text-center py-3 px-2">
                  <h3 className="text-lg font-medium">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {index > 0 && (
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        {index < cards.length - cardsPerView && (
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* View All Button */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-10 px-6 py-3 bg-cyan-600 text-white rounded-xl shadow hover:bg-cyan-700"
      >
        {activeTab === "consultation"
          ? "View All Consultation"
          : "View All Training"}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-2xl shadow-xl p-6 relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            {/* Title with Dynamic Count */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {activeTab === "consultation"
                ? "Consultation Services"
                : "Training Services"}{" "}
              ({cards.length})
            </h3>

            {/* Service List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cards.map((card, i) => (
                <li
                  key={i}
                  className="p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
                >
                  {card.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Element>
  );
}
