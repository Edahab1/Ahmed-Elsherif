import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import logoDark from "/logo dark.png";

export default function Blog() {
  const [activeTab, setActiveTab] = useState("articles");

  const tabs = [
    { id: "articles", label: "Articles" },
    { id: "certificates", label: "Certificates & Accomplishments" },
    { id: "news", label: "Latest News" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-md">
        <div className="relative flex items-center justify-center py-6 px-6">
          <RouterLink
            to="/"
            className="absolute left-4 sm:left-6 flex items-center cursor-pointer"
          >
            <img
              src={logoDark}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 transition-transform duration-300 hover:scale-105"
            />
          </RouterLink>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
            Blog & Updates
          </h1>
        </div>

        <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg pb-6 sm:pb-8 px-4">
          Explore my thoughts, achievements, and recent updates
        </p>
      </header>

      {/* blog Tabs */}
      <div className="flex justify-center border-b bg-white sticky top-[80px] z-40 shadow-sm overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-6 py-3 text-sm md:text-base font-semibold transition-colors duration-300 whitespace-nowrap ${
              activeTab === tab.id
                ? "border-b-2 border-cyan-600 text-cyan-600"
                : "text-gray-500 hover:text-cyan-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-grow p-6 md:p-10 bg-gray-50">
        {activeTab === "articles" && (
          <div className="text-center text-gray-600">
            <p className="text-lg">📝 Articles will appear here soon.</p>
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="text-center text-gray-600">
            <p className="text-lg">
              🏆 Certificates & Accomplishments will appear here soon.
            </p>
          </div>
        )}

        {activeTab === "news" && (
          <div className="text-center text-gray-600">
            <p className="text-lg">
              📢 Latest news and announcements coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
