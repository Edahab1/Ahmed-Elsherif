export default function Footer() {
  return (
    <footer className="border border-slate-600 shadow-sm dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-4 font-medium text-center flex flex-col sm:flex-row justify-between items-center gap-3">

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © Eng. Ahmed El Sherif, {new Date().getFullYear()}. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="text-2xl flex gap-5 items-center">

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@ahmedelsherif-1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube text-red-600"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ahmed-elsherif-reliability/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin text-blue-600"></i>
          </a>

        </div>
      </div>
    </footer>
  );
}