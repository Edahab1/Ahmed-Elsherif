import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logoLight from "/logo light.png";
import logoDark from "/logo dark.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        menuOpen
          ? "bg-gray-900 md:bg-transparent"
          : scrolled
          ? "bg-white md:bg-white border-b border-gray-200 dark:bg-gray-900"
          : "bg-transparent md:bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logoDark}
            className="h-10 md:h-16 transition-all duration-300"
            alt="Logo"
          />
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 py-4 ml-3 text-sm text-slate-400 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </button>

        {/* Menu */}
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ${
              menuOpen ? "text-white" : "md:bg-transparent"
            }`}
          >
            {["home", "about", "services", "events", "contact"].map((section) => (
              <li
                key={section}
                className={`${menuOpen ? "border-b border-gray-700 last:border-0" : ""}`}
              >
                <Link
                  to={section}
                  smooth={true}
                  duration={800}
                  offset={-60}
                  onClick={handleLinkClick}
                  className={`block py-2 px-3 rounded-sm cursor-pointer transition-colors duration-300 ${
                    menuOpen
                      ? "text-white hover:text-cyan-400"
                      : scrolled
                      ? "md:text-slate-900 md:dark:text-slate-100 hover:text-cyan-600"
                      : "text-white hover:text-cyan-500"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
