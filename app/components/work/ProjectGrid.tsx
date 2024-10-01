import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 w-[90%] lg:max-w-[1200px]">
        {projects.map((project: ProjectProps) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            techNames={project.techNames}
            techLinks={project.techLinks}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
