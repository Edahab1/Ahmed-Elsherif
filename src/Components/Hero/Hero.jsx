import React from "react";
import bgPic from "/hero bg.jpeg";
import { Link } from "react-scroll";
import "/src/App.css"; // 👈 Import your global CSS here

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row bg-black items-end justify-center px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${bgPic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
    </section>
  );
};

export default Hero;
