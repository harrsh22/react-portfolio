import React from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const Certifications = () => {
  return (
    <motion.section
      className="relative z-20 w-full py-12 bg-[#0E1016] text-white flex items-center justify-center"
      id="certifications"
      initial="initial"
      animate="animate"
    >
      <div className="w-[90%] lg:max-w-[1200px] mx-auto">
        {/* Title with animation */}
        <AnimatedTitle
          text={"CERTIFICATIONS & COURSES"}
          className="mb-12 text-center text-[40px] font-bold leading-[1.2em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:text-[50px] lg:text-[60px]"
          wordSpace={"mr-[10px]"}
          charSpace={"mr-[0.001em]"}
        />

        {/* Certifications timeline */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {/* Google Project Management */}
          <motion.a
            href="https://www.coursera.org/account/accomplishments/verify/9QC3BDGWBHY3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg transition duration-300"
          >
            <AnimatedBody
              delay={0.2}
              text="Google Project Management"
              className="text-[26px] font-semibold mb-2"
            />
            <AnimatedBody
              delay={0.3}
              text="Completed an in-depth program focused on essential project management skills, including Agile methodologies, risk management, and effective stakeholder communication. Gained hands-on experience with project planning, budgeting, and project management tools."
              className="text-[20px] text-gray-400"
            />
          </motion.a>

          {/* Udemy Web Development Course */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg transition duration-300"
          >
            <AnimatedBody
              delay={0.4}
              text="Udemy Web Development Course"
              className="text-[26px] font-semibold mb-2"
            />
            <AnimatedBody
              delay={0.5}
              text="Completed a course covering full stack web development, including HTML, CSS, JavaScript. Gained practical experience in building responsive and dynamic web applications, with a focus on user experience and performance optimization."
              className="text-[20px] text-gray-400"
            />
          </motion.div>

          {/* VyVoxel AR and VR Course */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative p-6 bg-[#1b1e23] rounded-lg shadow-lg transition duration-300"
          >
            <AnimatedBody
              delay={0.6}
              text="VyVoxel AR and VR Course"
              className="text-[26px] font-semibold mb-2"
            />
            <AnimatedBody
              delay={0.7}
              text="Completed a course focused on the principles and applications of Augmented Reality (AR) and Virtual Reality (VR) technologies. Acquired hands-on experience in developing immersive AR/VR experiences using tools like Unity."
              className="text-[20px] text-gray-400"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
