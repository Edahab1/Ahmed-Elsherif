import React from "react";
import bgPic from "/Hero-bg.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${bgPic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full mx-auto gap-8 pt-5">
        {/* Left: Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img
            src="/Elsherif Main.png"
            alt="Eng. Ahmed El-Sherif"
            className="object-contain lg:object-cover h-[90vh] w-auto sm:h-[85vh] lg:h-[92vh] drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
            style={{ objectPosition: "bottom" }}
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center flex flex-col items-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white drop-shadow-lg">
            Eng. Ahmed El-Sherif
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-400 drop-shadow-md">
            Senior Reliability & Asset Management Consultant
            <span className="block mt-1 text-gray-200 text-xl md:text-2xl">
              (Technical Trainer)
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl drop-shadow-md">
            Driving operational excellence by optimizing system reliability,
            minimizing downtime, and leveraging data analytics for proactive
            maintenance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-8 cursor-pointer">
            <Link
              to="services"
              smooth={true}
              duration={800}
              offset={-60}
              className="inline-block bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
            >
              View Services
            </Link>
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

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 text-4xl">
            <a
              href="https://www.youtube.com/channel/UCL5opv9lCxaDE0qs0kmcITQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform hidden"
            >
              <i className="fa-brands fa-square-youtube text-red-500"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-el-sherif%E2%94%82cmrp-%C2%AE%E2%94%82crl-%C2%AE%E2%94%82cama2-%C2%AE%E2%94%82asu%E2%80%93li%C2%AE%E2%94%82bmi%C2%AE%E2%94%82tot%C2%AE-2010b3121/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-square-linkedin text-blue-600"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
