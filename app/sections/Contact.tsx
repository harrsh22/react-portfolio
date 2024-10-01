import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-auto min-h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-auto md:py-20 lg:h-auto lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <ContactBackground />
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        {/* Updated className with your requested changes */}
        <div className="flex flex-col justify-center relative w-full sm:items-center text-center">
          <h1 className="text-[48px] font-extrabold uppercase leading-[1em] text-[#e4ded7] sm:text-[72px] md:text-[100px] lg:text-[120px] xl:text-[150px]">
            Contact
          </h1>
        </div>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-8 sm:mt-16 md:mt-24 lg:mt-12 lg:flex-row lg:justify-between lg:max-w-[1440px]">
          {/* Email Section */}
          <div className="w-full max-w-[90%] sm:w-[400px] text-center md:w-[310px] md:text-left lg:w-[420px] text-[14px] font-semibold uppercase text-[#e4ded7]">
            <AnimatedBody
              text="Got a question, proposal, project, or want to work together on something?"
              className="mb-4 text-center md:text-left"
            />
            <Link
              href="mailto:harrshithaasri@gmail.com"
              target="_blank"
              aria-label="Send me an email"
              className="block mt-4 underline underline-offset-2 hover:no-underline text-center md:text-left"
            >
              <AnimatedBody text="Send me an email" />
            </Link>
          </div>

          {/* Social Links: GitHub & LinkedIn */}
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14 sm:text-[20px] md:flex-row md:gap-10 md:text-[16px] lg:flex-row lg:gap-20 lg:text-[24px]">
            <Link
              href="https://github.com/harrsh22"
              target="_blank"
              aria-label="View GitHub Profile"
              className="hover:text-[#ff7f50] transition duration-300"
            >
              <AnimatedTitle
                text="GITHUB"
                className="text-[20px] sm:text-[24px] md:text-[20px] lg:text-[28px]"
                wordSpace="mr-[0.25em]"
                charSpace="mr-[0.01em]"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/harrshithaa-sridhar/"
              target="_blank"
              aria-label="View LinkedIn Profile"
              className="hover:text-[#ff7f50] transition duration-300"
            >
              <AnimatedTitle
                text="LINKEDIN"
                className="text-[20px] sm:text-[24px] md:text-[20px] lg:text-[28px]"
                wordSpace="mr-[0.25em]"
                charSpace="mr-[0.01em]"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
