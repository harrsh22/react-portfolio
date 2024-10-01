import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
    SiFlask,
    SiMysql,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Website Creation for an Organization",
        description: "Developed a website using HTML5, CSS3, and JavaScript helps the organization to list out there people.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML5", "CSS3", "JavaScript"],
        techLinks: [
            "https://html.spec.whatwg.org/", 
            "https://www.w3.org/Style/CSS/", 
            "https://www.javascript.com/"
        ],
        github: "https://github.com/harrshh22/org-website",
        demo: "https://example.com/org-website",
        image: "/projects/project-2.png", // Corrected path for public folder
        available: true,
    },
    {
        id: 1,
        name: "E-commerce Prediction Website",
        description:
            "Developed a website to predict commodities across e-commerce platforms using HTML5, CSS3, JavaScript, Python, Flask, and web scraping.",
        technologies: [SiHtml5, SiCss3, SiJavascript, SiPython, SiFlask],
        techNames: ["HTML5", "CSS3", "JS", "Python", "Flask"],
        techLinks: [
            "https://html.spec.whatwg.org/", 
            "https://www.w3.org/Style/CSS/", 
            "https://www.javascript.com/", 
            "https://www.python.org/", 
            "https://flask.palletsprojects.com/"
        ],
        github: "https://github.com/harrshh22/ecommerce-prediction",
        demo: "https://example.com/ecommerce-prediction",
        image: "/projects/project-3.png", // Corrected path for public folder
        available: true,
    },
    {
        id: 2,
        name: "Weather App",
        description:
            "Developed a weather application using HTML5, CSS3, JavaScript, and the OpenWeather API to display real-time weather data for cities around the world.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML5", "CSS3", "JavaScript"],
        techLinks: [
            "https://html.spec.whatwg.org/", 
            "https://www.w3.org/Style/CSS/", 
            "https://www.javascript.com/"
        ],
        github: "https://github.com/harrsh22/weatherapp",
        demo: "https://example.com/weather-app",
        image: "/projects/project-5.png", // Corrected path for public folder
        available: true,
    },
    {
        id: 3,
        name: "Teacher-Student Database Management System",
        description: "Developed a system to manage student attendance and marks, allowing both teachers and students to access and update records.",
        technologies: [SiPython, SiMysql],
        techNames: ["Python", "MySQL"],
        techLinks: [
            "https://www.python.org/", 
            "https://www.mysql.com/"
        ],
        github: "https://github.com/harrsh22/Teacher-student-database-management",
        demo: "https://example.com/teacher-student-dbms",
        image: "/projects/project-7.png", // Corrected path for public folder
        available: true,
    },
    {
        id: 4,
        name: "Terra Trooper",
        description: "Created the website interface for a six-legged hexapod robot used for disaster management and risk assessment.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML5", "CSS3", "JavaScript"],
        techLinks: [
            "https://html.spec.whatwg.org/", 
            "https://www.w3.org/Style/CSS/", 
            "https://www.javascript.com/"
        ],
        github: "https://github.com/harrsh22/TerraTropper",
        demo: "https://example.com/terra-trooper",
        image: "/projects/project-1.png", // Corrected path for public folder
        available: true,
    },
    {
        id: 5,
        name: "IETE Website Creation",
        description: "Created a website for the Institution of Electronics and Telecommunications Engineers for a hackathon.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML5", "CSS3", "JavaScript"],
        techLinks: [
            "https://html.spec.whatwg.org/", 
            "https://www.w3.org/Style/CSS/", 
            "https://www.javascript.com/"
        ],
        github: "https://github.com/harrsh22/IETE",
        demo: "https://example.com/iete-website",
        image: "/projects/project-4.png", // Corrected path for public folder
        available: true,
    },
];
