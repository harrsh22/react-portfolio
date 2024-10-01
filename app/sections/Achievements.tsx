import React from "react";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

// Achievements Grid Component
const Achievements = () => {
  return (
    <section
      className="relative z-20 w-full py-12 bg-[#0E1016] text-white flex items-center justify-center"
      id="achievements"
    >
      <div className="w-[90%] lg:max-w-[1200px] mx-auto">
        {/* Title */}
        <AnimatedTitle
          text={"ACHIEVEMENTS"}
          className="mb-12 text-center text-[45px] font-bold leading-[1.2em] tracking-tighter text-[#e4ded7] sm:text-[50px] md:text-[55px] lg:text-[60px]"
          wordSpace={"mr-[10px]"}
          charSpace={"mr-[0.001em]"}
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Achievement 1: SVCE Student Star */}
          <div className="p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300 transform">
            <a
              href="https://www.instagram.com/p/CXSd8ljJzQJ/?utm_source=ig_web_copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedBody
                delay={0.2}
                text="December 2021"
                className="text-[#e4ded7] text-xl mb-4"
              />
              <AnimatedBody
                delay={0.3}
                text="SVCE Student Star 3.0"
                className="text-[26px] font-semibold mb-4"
              />
              <AnimatedBody
                delay={0.4}
                text="Recognized as a standout student-athlete, U-19 basketball player, skilled guitarist, and dancer."
                className="text-lg text-gray-400"
              />
            </a>
          </div>

          {/* Achievement 2: Ramanujam Maths Quiz */}
          <div className="p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300 transform">
            <a href="/harrshithaasridhar" target="_blank" rel="noopener noreferrer">
              <AnimatedBody
                delay={0.2}
                text="2021"
                className="text-[#e4ded7] text-xl mb-4"
              />
              <AnimatedBody
                delay={0.3}
                text="Ramanujam Maths Quiz"
                className="text-[26px] font-semibold mb-4"
              />
              <AnimatedBody
                delay={0.4}
                text="Achieved third place in the math quiz, earning a cash prize of ₹1500."
                className="text-lg text-gray-400"
              />
            </a>
          </div>

          {/* Achievement 3: Finalist at PEC Hacks */}
          <div className="p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300 transform">
            <AnimatedBody
              delay={0.2}
              text="2022"
              className="text-[#e4ded7] text-xl mb-4"
            />
            <AnimatedBody
              delay={0.3}
              text="Finalist at PEC Hacks"
              className="text-[26px] font-semibold mb-4"
            />
            <AnimatedBody
              delay={0.4}
              text="Developed Terra Tooper, a hexapod robot designed to assist in natural disaster scenarios."
              className="text-lg text-gray-400"
            />
          </div>

          {/* Achievement 4: CSI- Inquizitive */}
          <div className="p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300 transform">
            <AnimatedBody
              delay={0.2}
              text="2022"
              className="text-[#e4ded7] text-xl mb-4"
            />
            <AnimatedBody
              delay={0.3}
              text="CSI- Inquizitive"
              className="text-[26px] font-semibold mb-4"
            />
            <AnimatedBody
              delay={0.4}
              text="Won first prize in a technical quiz covering topics like Operating Systems and Networks."
              className="text-lg text-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
