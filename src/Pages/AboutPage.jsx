import React from "react";
import MotionWrapper from "../utils/MotionWrapper";

const AboutPage = () => {
  const certifications = [
    {
      id: 1,
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle University",
      year: "2025",
      description: "Professional certification in AI foundations and cloud infrastructure from Oracle.",
      skills: ["AI Foundations", "Cloud Infrastructure", "Oracle Cloud"]
    },
    {
      id: 2,
      title: "Full Stack Web Development Honors Track",
      issuer: "Ramdeobaba University, Nagpur",
      year: "2023-2025",
      description: "Comprehensive full-stack web development program covering frontend and backend technologies.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      id: 3,
      title: "Build with India - Top 5,000 Finalist",
      issuer: "HackwithIndia & Google",
      year: "2024",
      description: "Placed among top 5,000 teams out of 25,000 participating teams in BuildwithIndia competition (Finale at Google Office). Recognized for outstanding performance and achievement.",
      skills: ["Competitive Programming", "Problem Solving", "Team Work"]
    },
    {
      id: 4,
      title: "RBUCON Computing: INNOVANZA'25 - National Level Project Competition",
      issuer: "Ramdeobaba University, Nagpur",
      year: "2025",
      description: "Participated in national level project competition and presented 'HyperScape: Hyperspectral Image Classification using Deep Learning' project.",
      skills: ["Deep Learning", "Computer Vision", "Research", "Project Presentation"]
    }
  ];

  return (
    <div>
      <section id="Certification" className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-[var(--text-color)] font-bold mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <MotionWrapper key={cert.id} direction={index % 2 === 0 ? "-x" : "x"}>
                <div className="bg-dark-card border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[var(--text-color)]">
                      {cert.title}
                    </h3>
                    <span className="text-accent text-sm font-semibold bg-accent/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-[var(--maintext-color)] mb-2 font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="text-[var(--maintext-color)] mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs bg-gray-700 text-[var(--maintext-color)] px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Additional Recognition Section */}
          <div className="mt-16 text-center">
            <MotionWrapper direction="y">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4">
                  Competitive Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[var(--maintext-color)]">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">3★</div>
                    <div className="text-sm">CodeChef Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">1650+</div>
                    <div className="text-sm">LeetCode Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">600+</div>
                    <div className="text-sm">Problems Solved</div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;