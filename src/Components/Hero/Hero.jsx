import React from "react";
import bgPic from '/Hero-bg.jpg';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12"
      style={{
        backgroundImage: `
          url(${bgPic}),
          radial-gradient(circle at top left, rgba(0,0,0,0.6), transparent 70%),
          radial-gradient(circle at bottom right, rgba(0,0,0,0.6), transparent 70%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for extra darkening */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight text-white drop-shadow-lg">
          Eng. Ahmed El-Sherif
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-400 drop-shadow-md">
          Reliability and Asset Management Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl mx-auto drop-shadow-md">
          Driving operational excellence by optimizing system reliability,
          minimizing downtime, and leveraging data analytics for proactive
          maintenance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#projects"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
          >
            View Services
          </a>
          <Link
            to="contact"
            smooth={true}
                  duration={800}
                  offset={-60}
            className="inline-block border-2 border-cyan-600 text-white hover:bg-cyan-600 hover:text-white transition-colors duration-300 font-semibold px-8 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-400"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
