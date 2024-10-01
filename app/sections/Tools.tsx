import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiCplusplus,
  SiAdobe,
} from "react-icons/si";

const Tools = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-32 pb-40 md:pt-36 md:pb-48 lg:pt-44 lg:pb-56"
      id="tools"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ animation: "slowVideo 60s linear infinite" }}
        >
          <source src="/space.mp4" type="video/mp4" />
        </video>
        {/* Crossfade Effect */}
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-t from-transparent to-[#0E1016]"></div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-[#0E1016]"></div>
      </div>

      <div className="relative z-20 mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Tech Stack"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
          {/* Tools grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-center text-center">
            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiHtml5 size={40} className="mx-auto mb-4 text-[#e34f26]" />
              <p className="text-lg font-semibold text-[#e4ded7]">HTML</p>
            </div>
            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiCss3 size={40} className="mx-auto mb-4 text-[#1572b6]" />
              <p className="text-lg font-semibold text-[#e4ded7]">CSS</p>
            </div>
            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiJavascript size={40} className="mx-auto mb-4 text-[#f7df1e]" />
              <p className="text-lg font-semibold text-[#e4ded7]">JavaScript</p>
            </div>
            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiPython size={40} className="mx-auto mb-4 text-[#306998]" />
              <p className="text-lg font-semibold text-[#e4ded7]">Python</p>
            </div>

            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiReact size={40} className="mx-auto mb-4 text-[#61dbfb]" />
              <p className="text-lg font-semibold text-[#e4ded7]">React</p>
            </div>
            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiNextdotjs size={40} className="mx-auto mb-4 text-white" />
              <p className="text-lg font-semibold text-[#e4ded7]">Next.js</p>
            </div>

            {/* C++ */}
            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiCplusplus size={40} className="mx-auto mb-4 text-[#00599C]" />
              <p className="text-lg font-semibold text-[#e4ded7]">C++</p>
            </div>

            {/* UI/UX Designing */}
            <div className="bg-[#1b1e23] p-4 rounded-lg hover:shadow-lg hover:bg-[#272b30] hover:scale-105 transition duration-300 transform">
              <SiAdobe size={40} className="mx-auto mb-4 text-[#FF0000]" />
              <p className="text-lg font-semibold text-[#e4ded7]">UI/UX </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
