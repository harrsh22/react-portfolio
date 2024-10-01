import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // FontAwesome icons

const Hero = () => {
    return (
        <motion.section
            className="relative z-20 flex h-[100vh] w-full justify-center items-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />

            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0 z-30 pointer-events-auto">
                <div className={`relative flex flex-col items-center justify-center ${inter.className}`}>
                    
                    {/* Animated Title: Name */}
                    <AnimatedTitle
                        text="Harrshithaa Sridhar"
                        className="mb-1 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                        wordSpace="mr-[10px]"
                        charSpace="mr-[0.001em]"
                    />

                    {/* Animated Title: Portfolio Description */}
                    <AnimatedTitle
                        text="Personal Portfolio"
                        className="text-center text-[20px] font-medium leading-[1.2em] tracking-normal text-[#e4ded7] sm:text-[25px] md:text-[30px] lg:text-[35px]"
                        wordSpace="mr-[5px]"
                        charSpace="mr-[0.001em]"
                    />
                </div>

                {/* Button for Resume */}
                <div className="mt-6 z-30">
                    <a
                        href="https://drive.google.com/file/d/1K1qov5LeJvuVVbNCs5yMTAPnhgFWHb1n/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 text-[14px] sm:text-[16px] md:text-[18px] bg-[#e4ded7] text-[#0E1016] font-medium rounded-lg hover:bg-[#d1ccc4] transition"
                    >
                        View My Resume
                    </a>
                </div>

                {/* Email and Phone Icons */}
                <div className="mt-4 flex space-x-4 z-30">
                    <a
                        href="mailto:harrshithaasri@gmail.com"
                        className="text-[#e4ded7] hover:text-[#d1ccc4] transition"
                        aria-label="Email"
                    >
                        <FaEnvelope size={20} />
                    </a>
                    <a
                        href="tel:+9444186221"
                        className="text-[#e4ded7] hover:text-[#d1ccc4] transition"
                        aria-label="Phone"
                    >
                        <FaPhone size={20} />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
