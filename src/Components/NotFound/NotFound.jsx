import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4">
      <h1 className="text-8xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-8">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
        Please check the URL or return to the homepage.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-full shadow transition-all duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} ZRAMS | All Rights Reserved
      </div>
    </div>
  );
}
