import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const SkillsAndExperience = () => {
  return (
    <motion.section
      className="relative z-20 w-full py-12 bg-[#0E1016] text-white flex items-center justify-center"
      id="skills-experience"
      initial="initial"
      animate="animate"
    >
      <div className="w-[90%] lg:max-w-[1200px] mx-auto">
        {/* Title with animation */}
        <AnimatedTitle
          text={"NON-TECH SKILLS & CLUB EXPERIENCE"}
          className="mb-12 text-left text-[40px] font-bold leading-[1.2em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:text-[50px] lg:text-[60px]"
          wordSpace={"mr-[10px]"}
          charSpace={"mr-[0.001em]"}
        />

        {/* Non-Tech Skills Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center items-center text-center mb-12">
          {[
            "Leadership Skills",
            "Event Management",
            "Communication Skills",
            "Designing Skills",
            "Team Collaboration"
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg transition duration-300"
            >
              <p className="text-[22px] font-semibold text-[#e4ded7] mb-2">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Club Experience Section */}
        <div className="mb-12">
          <AnimatedTitle
            text={"Club Experience"}
            className="mb-8 text-left text-[30px] font-bold leading-[1.2em] tracking-tighter text-[#e4ded7]"
            wordSpace={"mr-[5px]"}
            charSpace={"mr-[0.001em]"}
          />
          <ul className="space-y-6">
            {[
              "Know-I ML club (Planning Executive)",
              "Speakers' Forum (Member)",
              "Designer (SVCE Student Council)",
              "Rotaract Club (Member)"
            ].map((club, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative p-4 bg-[#1b1e23] rounded-lg shadow-lg transition duration-300"
              >
                <p className="text-[20px] font-medium text-[#e4ded7]">
                  {club}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Special Mention Section */}
        <div className="bg-[#1b1e23] p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105">
          <AnimatedTitle
            text={"Special Mention"}
            className="text-[30px] font-semibold mb-4 text-[#e4ded7]"
            wordSpace={"mr-[5px]"}
            charSpace={"mr-[0.001em]"}
          />
          <AnimatedBody
            text="HOSTED ROTA-TECHX - 24HR HACK AND MAKE-A-THON"
            className="text-[22px] font-medium mb-2 text-[#e4ded7]"
          />
          <p className="text-[18px] text-gray-400">
            A 24-hour hackathon was organised by my event chairperson and I, as event secretary at GUVI Geeks, IITM Research Park, along with Rotaract Members. The entire event was managed by us, right from the venue setup to the event's conclusion.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsAndExperience;
