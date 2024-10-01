import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const Education = () => {
  return (
    <motion.section
      className="relative z-20 w-full py-12 bg-[#0E1016] text-white flex items-center justify-center"
      id="education"
      initial="initial"
      animate="animate"
    >
      <div className="w-[90%] lg:max-w-[1200px] mx-auto">
        {/* Title with animation */}
        <AnimatedTitle
          text={"EDUCATION"}
          className="mb-12 text-center text-[35px] font-bold leading-[1.2em] tracking-tighter text-[#e4ded7] sm:text-[40px] md:text-[45px] lg:text-[55px]"
          wordSpace={"mr-[10px]"}
          charSpace={"mr-[0.001em]"}
        />

        {/* Education details */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {/* Bachelor's Degree */}
          <div className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <AnimatedBody delay={0.2} text="2021 - 2025" className="text-[#e4ded7] text-base mb-2" />
            <AnimatedBody
              delay={0.3}
              text="Bachelor of Engineering - Computer Science & Engineering"
              className="text-[25px] font-semibold mb-2"
            />
            <AnimatedBody delay={0.4} text="Sri Venkateswara College of Engineering" className="text-lg mb-1" />
            <AnimatedBody delay={0.5} text="CGPA: 8.0" className="text-sm text-gray-400" />
          </div>

          {/* Class 12 */}
          <div className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <AnimatedBody delay={0.6} text="2019 - 2021" className="text-[#e4ded7] text-base mb-2" />
            <AnimatedBody
              delay={0.7}
              text="AISSCE (XII) - Science Stream: Computer Science Group"
              className="text-[25px] font-semibold mb-2"
            />
            <AnimatedBody delay={0.8} text="DAV Sr Secondary School, Chennai" className="text-lg mb-1" />
            <AnimatedBody delay={0.9} text="Marks: 89%" className="text-sm text-gray-400" />
          </div>

          {/* Class 10 */}
          <div className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <AnimatedBody delay={1.0} text="2008 - 2019" className="text-[#e4ded7] text-base mb-2" />
            <AnimatedBody
              delay={1.1}
              text="AISSCE (X)"
              className="text-[25px] font-semibold mb-2"
            />
            <AnimatedBody delay={1.2} text="DAV Sr Secondary School, Chennai" className="text-lg mb-1" />
            <AnimatedBody delay={1.3} text="Marks: 94%" className="text-sm text-gray-400" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
