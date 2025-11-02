// Import from React
import React from "react";
import { useNavigate } from "react-router-dom";
// Import Images
const Accenture = "https://res.cloudinary.com/darmatnf2/image/upload/v1761029046/Accenture_kcoo9d.png";
const AWS = "https://res.cloudinary.com/darmatnf2/image/upload/v1761029051/AWS_yu4vat.png";
const IBM = "https://res.cloudinary.com/darmatnf2/image/upload/v1761029055/IBM_yyzqdd.png";
const Hackathon = "https://res.cloudinary.com/darmatnf2/image/upload/v1761029069/Hackathon_zfgblj.png";
// MotionWrapper
import MotionWrapper from "../utils/MotionWrapper";
// Import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop";
// Import from Components
import { ChevronDown } from "../components/ChevronDown";

const Certifications = () => {
  // Scroll on top as page Load.
  useScrollToTop();
  const certification = [
    {
      name: "Accenture",
      img: Accenture,
      disc: "Awarded the Certificate of Completion for the Accenture Developer and Technology Job Simulation.Practical tasks covered the Software Development Lifecycle and Testing Lifecycle.The curriculum also included Agile and Waterfall methodologies and Algorithmic Thinking.This professional development was completed on December 21st, 2024.",
    },
    {
      name: "AWS",
      img: AWS,
      disc: "Awarded the Certificate of Completion for the AWS Solutions Architecture Job Simulation.The practical tasks focused on Designing a simple, scalable,hosting architecture.This virtual experience provided hands-on exposure to core AWS architectural concepts.This professional development was completed on April 4th, 2025.",
    },
    {
      name: "IBM",
      img: IBM,
      disc: "Awarded the credential for Web Development Fundamentals issued by IBM SkillsBuild.This foundational course provided a strong understanding of core web technologies.It covers the essential concepts and practices required for developing web applications.The certification was successfully issued on February 21st, 2024.",
    },
    {
      name: "Hackhazards Hackathon",
      img: Hackathon,
      disc: "Awarded the Certificate of Participation for HACKHAZARDS '25, a major community-run hackathon.I participated as part of Team The Hackoholics in this global event.The hackathon focused on developing cutting-edge projects across AI, Web3, Software, and Infra.The event took place from April 11th - 27th, 2025, organized by The NAMESPACE Community.",
    },
  ];
  const navigate = useNavigate();

  return (
    <div id="certification" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--text-color)] mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          {/* <p className="text-[var(--maintext-color)] mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing!
          </p> */}
        </div>
        {/* Content */}
        <div className="w-full p-5 flex flex-col items-center ">
          {/* Card */}
          {certification.map((data) => (
            <MotionWrapper key={data.name}>
              <div
                key={data.name}
                className="bg-black/30 rounded-xl shadow-xl overflow-hidden border border-[var(--text-color)] mt-5 md:flex "
              >
                {/* Section 1 */}
                <div className="w-full p-2 md:flex md:flex-col md:items-center md:justify-center">
                  {/* Certificate Image */}
                  <img
                    src={data.img}
                    alt={data.name}
                    className="object-cover rounded-xl border-2 border-[var(--text-color)] "
                  />
                </div>
                {/* Section 2 */}
                <div className="p-2">
                  {/* Provider name */}
                  <h2 className="text-2xl text-[var(--text-color)] md:text-4xl md:font-semibold md:text-center md:mt-5 ">
                    {data.name}{" "}
                  </h2>
                  {/* Description */}
                  <p className="text-[var(--maintext-color)] md:text-2xl md:mt-4 ">
                    {data.disc}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
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
            />{" "}
            <span className="mr-2 text-[var(--text-color)]">Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
