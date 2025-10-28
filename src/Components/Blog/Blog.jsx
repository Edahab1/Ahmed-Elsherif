import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import logoDark from "/logo dark.png";

export default function Blog() {
  const [activeTab, setActiveTab] = useState("articles");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Asset Reliability Strategies",
      file: "/Articles/Aligning-asset-management-strategies.pdf",
    },
    {
      id: 2,
      title: "Data Analytics in Maintenance",
      file: "/Articles/Asset-integrity-management.pdf",
    },
    {
      id: 3,
      title: "Digital Transformation in Asset Management",
      file: "/Articles/Optimizing-preventive-maintenance-in-refineries.pdf",
    },
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

      {/* Tabs */}
      <div className="flex justify-center border-b bg-white sticky top-[80px] z-40 shadow-sm overflow-x-auto">
        <button
          onClick={() => setActiveTab("articles")}
          className={`px-4 sm:px-6 py-3 text-sm md:text-base font-semibold transition-colors duration-300 whitespace-nowrap ${
            activeTab === "articles"
              ? "border-b-2 border-cyan-600 text-cyan-600"
              : "text-gray-500 hover:text-cyan-500"
          }`}
        >
          Articles
        </button>
      </div>

      {/* Articles Section */}
      {activeTab === "articles" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
              onClick={() => setSelectedArticle(article)}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm">Click to view full article</p>
            </div>
          ))}
        </div>
      )}

      {/* PDF Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white w-full max-w-5xl h-[80vh] rounded-2xl shadow-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-3 right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
            >
              ✕
            </button>

            {/* Inline PDF Viewer */}
            <iframe
              src={selectedArticle.file}
              title={selectedArticle.title}
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
