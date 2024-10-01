import React from "react";
import { ProjectProps } from "./projectDetails";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  techNames,
  techLinks,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      className="relative text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      style={{
      background: "linear-gradient(180deg, #1b1821 0%, #101014 100%)", // Gradient background color
      }}      
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }} // Animation on hover
    >
      {/* Project Image */}
      <Image
        src={image}
        alt={name}
        width={500}
        height={300}
        className="rounded-md"
      />
      <h3 className="mt-4 text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-gray-400">{description}</p>

      {/* Technologies Section */}
      <div className="flex flex-wrap mt-4">
        {technologies.map((Icon, index) => (
          <a
            key={index}
            href={techLinks[index]}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 mb-3 text-white hover:text-gray-300"
          >
            <Icon className="text-3xl" />
            <p className="text-sm mt-1">{techNames[index]}</p>
          </a>
        ))}
      </div>

      {/* Project Links */}
      <div className="mt-4 flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <SiGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <BsLink45Deg className="text-xl" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
