import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FileText, ExternalLink } from "lucide-react";
import logoDark from "/logo dark.png";

export default function Blog() {
  const [activeTab, setActiveTab] = useState("articles");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Aligning Asset Management Strategies",
      description:
        "How aligning business and asset strategies enhances long-term reliability and value creation.",
      file: "/Articles/Aligning-asset-management-strategies.pdf",
    },
    {
      id: 2,
      title: "Asset Integrity Management",
      description:
        "Key principles and practices for maintaining safety, reliability, and compliance in operations.",
      file: "/Articles/Asset-integrity-management.pdf",
    },
    {
      id: 3,
      title: "Optimizing Preventive Maintenance in Refineries",
      description:
        "Leveraging analytics and reliability engineering to optimize preventive maintenance programs.",
      file: "/Articles/optimizing-preventive-maintenance-in-refineries.pdf",
    },
  ];

  const moreArticles = [
    {
      id: 1,
      title: "Unlocking the Power of AR and VR in Maintenance",
      link: "https://www.linkedin.com/pulse/unlocking-power-ar-vr-maintenance-ahmed-qxxkf",
    },
    {
      id: 2,
      title: "Measuring and Deciding on the Optimal Inventory Level (Mini and Max)",
      link: "https://www.linkedin.com/pulse/measuring-deciding-optimal-inventory-level-mini-max-ahmed-jnjqf",
    },
    {
      id: 3,
      title: "The Power of Tracking Maintenance Cost in Oil and Gas",
      link: "https://www.linkedin.com/pulse/power-tracking-maintenance-cost-oil-gas-unlocking-ahmed-qjkvf",
    },
    {
      id: 4,
      title: "The Role of Lubrication in Reducing Downtime and Decreasing Maintenance Costs",
      link: "https://www.linkedin.com/pulse/role-lubrication-reducing-downtime-decreasing-costs-ahmed-el4ff",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 flex flex-col relative">
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
            Blog & Insights
          </h1>
        </div>

        <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg pb-6 sm:pb-8 px-4">
          Explore articles and insights on reliability, integrity, and asset management.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center border-b bg-white sticky top-[80px] z-40 shadow-sm overflow-x-auto">
        <button
          onClick={() => setActiveTab("articles")}
          className={`px-6 py-3 text-base font-semibold transition-colors duration-300 whitespace-nowrap ${
            activeTab === "articles"
              ? "border-b-2 border-cyan-600 text-cyan-600"
              : "text-gray-500 hover:text-cyan-500"
          }`}
        >
          Articles
        </button>
      </div>

      {/* Sidebar (Floating Left, outside main content) */}
      <aside className="hidden lg:block fixed top-60 left-10 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 h-fit">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          More Articles
        </h3>
        <ul className="space-y-5">
          {moreArticles.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-cyan-700 font-medium hover:text-cyan-900 transition group"
              >
                <ExternalLink className="w-4 h-4 text-cyan-600 mt-1 group-hover:text-cyan-800 transition" />
                <span className="text-sm leading-tight">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Articles Section */}
      <div className="flex justify-center lg:justify-end py-10 px-6 max-w-7xl mx-auto w-full">
        <div className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col h-full p-6">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center bg-cyan-600/10 w-12 h-12 rounded-full group-hover:bg-cyan-600/20 transition">
                    <FileText className="text-cyan-600 w-6 h-6" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition line-clamp-2">
                    {article.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm flex-grow leading-relaxed mb-4 line-clamp-4">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-2">
                  <span className="inline-block text-cyan-600 font-semibold text-sm group-hover:underline">
                    View Article →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 bg-gray-800 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-red-600 transition"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedArticle.title}
              </h3>
            </div>

            <iframe
              src={selectedArticle.file}
              title={selectedArticle.title}
              className="w-full flex-grow"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
