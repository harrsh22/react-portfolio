import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const Experience = () => {
  return (
    <motion.section
      className="relative z-20 w-full py-12 bg-[#0E1016] text-white flex items-center justify-center"
      id="experience"
      initial="initial"
      animate="animate"
    >
      <div className="w-[90%] lg:max-w-[1200px] mx-auto">
        {/* Title with animation */}
        <AnimatedTitle
          text={"EXPERIENCE"}
          className="mb-12 text-center text-[35px] font-bold leading-[1.2em] tracking-tighter text-[#e4ded7] sm:text-[40px] md:text-[45px] lg:text-[55px]"
          wordSpace={"mr-[10px]"}
          charSpace={"mr-[0.001em]"}
        />

        {/* Experience timeline */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {/* Full-Stack Development Internship */}
          <div className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <AnimatedBody delay={0.2} text="July 2024 - September 2024" className="text-[#e4ded7] text-base mb-2" />
            <AnimatedBody
              delay={0.3}
              text="Full-Stack Developer Internship"
              className="text-[25px] font-semibold mb-2"
            />
            <AnimatedBody delay={0.4} text="BYT INDIA" className="text-lg mb-1" />
            <AnimatedBody
              delay={0.5}
              text="During my internship, I utilized HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL to develop numerous landing pages and dynamic, responsive websites for various clients. This experience helped me sharpen my technical skills and ability to deliver high-quality web solutions."
              className="text-md text-gray-400"
            />
          </div>

          {/* Project Management Internship */}
          <div className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <AnimatedBody delay={0.6} text="July 2024 - September 2024" className="text-[#e4ded7] text-base mb-2" />
            <AnimatedBody
              delay={0.7}
              text="Project Management Internship"
              className="text-[25px] font-semibold mb-2"
            />
            <AnimatedBody delay={0.8} text="BYT INDIA" className="text-lg mb-1" />
            <AnimatedBody
              delay={0.9}
              text="In this role, I oversaw project deployment from the developer side to the client side. This internship enhanced my project management skills and ensured seamless client satisfaction during project transitions."
              className="text-md text-gray-400"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
