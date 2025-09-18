import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '/Elsherif logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset menuOpen when resizing to md+ screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10 md:h-8" alt="Logo" />
          <span
            className={`hidden md:block self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-500 ${
              scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}
          >
            Ahmed El-Sherif
          </span>
        </a>

        {/* Hamburger / Close button using fontawesome-free icons */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 py-4 ml-3 text-sm text-slate-500 border rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
        </button>

        <div
          className={`${menuOpen ? 'block bg-white' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
              scrolled
                ? 'border-gray-100 dark:bg-gray-800 dark:border-gray-700'
                : 'bg-transparent border-transparent dark:bg-transparent dark:border-transparent'
            }`}
          >
            {['hero', 'about', 'services', 'events', 'contact'].map((section) => (
              <li
                key={section}
                className={`${menuOpen ? 'border-b border-gray-300 last:border-0' : ''}`}
              >
                <Link
                  to={section}
                  smooth={true}
                  duration={800}
                  offset={-60}
                  onClick={handleLinkClick}
                  className={`block py-2 px-3 rounded-sm cursor-pointer transition-colors duration-300 ${
                    menuOpen
                      ? 'text-black hover:bg-gray-100'
                      : scrolled
                      ? 'text-gray-900 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                      : 'text-white hover:text-gray-900 md:hover:bg-transparent md:hover:text-cyan-300 dark:hover:bg-white dark:hover:text-gray-900 md:dark:hover:bg-transparent'
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
