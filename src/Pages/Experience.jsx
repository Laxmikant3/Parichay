// import from React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop";
// Import images
const SCcertificate =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761029277/certificate_u1uqqd.png";
// Removed invalid PDF import (Vite cannot resolve PDFs this way)
// Instead, we’ll use the public folder path
// import SCletter from "/SkillCraft Tecnology Certificate & Letter of Recommendation.pdf";
// Import from components
import { ChevronDown } from "../components/ChevronDown";
// Import from motion
import { motion } from "framer-motion";

const Experience = () => {
  useScrollToTop();
  const navigate = useNavigate();

  return (
    <div className="mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--text-color)] mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Content */}
        <div className="p-2 rounded-md">
          <h2 className="text-3xl font-bold text-start text-[var(--text-color)] mb-6 md:text-center">
            Internship Experience
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 justify-center ">
            {/* IMG */}
            <div>
              <img
                src={SCcertificate}
                alt="Certificate"
                className="rounded-xl md:w-100"
              />
            </div>

            {/* Description */}
            <div>
              <div className="space-y-2 md:space-y-8 mt-2">
                <p className="text-lg text-[var(--text-color)]">
                  <span className="font-semibold">Name:</span>{" "}
                  <span className="text-[var(--maintext-color)]">
                    Shriharsh Vijay Nandigamwar
                  </span>
                </p>
                <p className="text-lg text-[var(--text-color)]">
                  <span className="font-semibold">Internship:</span>{" "}
                  <span className="text-[var(--maintext-color)]">
                    Web Development
                  </span>
                </p>
                <p className="text-lg text-[var(--text-color)]">
                  <span className="font-semibold">Company:</span>{" "}
                  <span className="text-[var(--maintext-color)]">
                    SkillCraft Technology
                  </span>
                </p>
                <p className="text-lg text-[var(--text-color)]">
                  <span className="font-semibold">Duration:</span>{" "}
                  <span className="text-[13px] md:text-lg text-[var(--maintext-color)]">
                    15th February 2025 – 17th March 2025
                  </span>
                </p>
                <p className="text-lg text-[var(--text-color)]">
                  <span className="font-semibold">Certificate ID:</span>{" "}
                  <span className="text-[var(--maintext-color)]">
                    SCT/FEB25/5707
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-5 flex items-center justify-center">
            <motion.a
              whileTap={{ scale: 0.9 }}
              href="/SkillCraft_Certificate.pdf" // served from /public
              download="SkillCraft_Certificate.pdf"
              className="flex items-center justify-center border border-[var(--text-color)] p-3 rounded-md text-xl text-[var(--text-color)]"
            >
              Download Letter
            </motion.a>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex items-center justify-center mt-3">
        <button
          title="Go back to home"
          onClick={() => navigate("/")}
          className="flex items-center justify-center border border-[var(--text-color)] p-3 rounded-md text-xl"
        >
          <ChevronDown
            stroke="var(--text-color)"
            className={`transition-transform duration-300 rotate-90`}
          />
          <span className="mr-2 text-[var(--text-color)]">Back</span>
        </button>
      </div>
    </div>
  );
};

export default Experience;
