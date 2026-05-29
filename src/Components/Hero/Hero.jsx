import React from "react";
import bgPic from "/hero bg.jpeg";
import { Link } from "react-scroll";
import "/src/App.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative

        h-[55vh]
        sm:h-[70vh]
        md:min-h-screen

        flex flex-col lg:flex-row
        items-end justify-center

        px-6 md:px-12

        overflow-hidden

        bg-no-repeat

        bg-contain bg-black

        bg-center

        pt-[80px] md:pt-[100px]
      "
      style={{
        backgroundImage: `url(${bgPic})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Social Icons */}
      <div
        className="
          absolute z-20

          bottom-6 left-1/2
          -translate-x-1/2

          md:bottom-10

          flex gap-5
        "
      >
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="
            w-12 h-12
            md:w-14 md:h-14

            rounded-full

            bg-white/20
            backdrop-blur-lg

            border border-white/50

            flex items-center justify-center

            text-white text-xl md:text-2xl

            shadow-lg shadow-black/40

            hover:bg-[#0A66C2]
            hover:border-[#0A66C2]
            hover:scale-110

            transition duration-300 cursor-pointer
          "
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>

        <Link
          to="home"
          smooth={true}
          duration={800}
          className="
            w-12 h-12
            md:w-14 md:h-14

            rounded-full

            bg-white/20
            backdrop-blur-lg

            border border-white/50

            flex items-center justify-center

            text-white text-xl md:text-2xl

            shadow-lg shadow-black/40

            hover:bg-red-600
            hover:border-red-600
            hover:scale-110

            transition duration-300 cursor-pointer
          "
        >
          <i className="fa-brands fa-youtube"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;