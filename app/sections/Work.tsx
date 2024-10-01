import { useEffect } from "react";
import ProjectGrid from "../components/work/ProjectGrid"; // Assuming ProjectGrid is your component

const Work = () => {
  // Rocket animation logic using scroll
  useEffect(() => {
    const rocket = document.getElementById("rocket");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Calculate scroll percentage (how far the user has scrolled)
      const scrollPercent = (scrollY / (docHeight - windowHeight)) * 100;

      // Move the rocket based on the scroll percentage
      const topPosition = (scrollPercent / 100) * windowHeight * 2; // Moves rocket down
      if (rocket) {
        rocket.style.top = `${topPosition}px`; // Set new rocket top position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-8 md:py-10 lg:py-10" id="work">
      {/* Rocket image */}
      <img
        src="/images/rocket.png"
        alt="Rocket"
        className="rocket"
        id="rocket"
        style={{
          position: "fixed", // Ensure the rocket is fixed and doesn't affect other elements
          top: "-100px", // Start above the screen
          left: "50%",
          transform: "translateX(-50%) rotate(140deg)", // Tilt the rocket
          width: "clamp(50px, 8vw, 100px)", // Adjust size based on viewport width
          zIndex: 9999, // Make sure the rocket stays on top
        }}
      />

      <h2 className="mb-2 text-[clamp(40px, 8vw, 100px)] text-[#e4ded7] md:mb-16 text-center">
        PROJECTS
      </h2>

      {/* ProjectGrid component where all your projects are displayed */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ProjectGrid /> {/* This is where your projects from ProjectGrid will render */}
      </div>
    </section>
  );
};

export default Work;
