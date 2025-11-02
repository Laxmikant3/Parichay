// Import from react
import React, { useEffect } from "react";
// Import from pages
import Home from "../Pages/Home/HomePage";
import About from "../Pages/AboutPage";
import Skill from "../Pages/SkillPage";
import Project from "../Pages/ProjectPage";
import Contact from "../Pages/ContactPage";
// Import from Components
import GitChart from "../components/GithubChart";

import LeetcodeChart from "../components/LeetcodeChart.jsx";
import Footer from "../components/FooterPage";
// Import from Hooks
import SmoothScrollProvider from "../Hooks/SmoothScroll.jsx";
// Import from utils
import FloatingDots from "../utils/FloatingDots.jsx";
const Layout = () => {
  // Welcome message print on Console
  useEffect(() => {
    const headerStyle =
      "font-size: 34px; color: #4F46E5; font-weight: bold; padding: 10px 0;";
    const discription = "font-size: 14px; color: #9766e3; font-weight: bold;";
    // Header Message and Developer Name
    console.log(`%c Shriharsh Nandigamwar`, headerStyle);
    console.log(
      `%cA Full Stack Developer passionate about crafting seamless digital experiences. Always excited to tackle new challenges where I can create value and grow as a coder. Let's connect if you've got a project that could use my skills!`,
      discription
    );
  }, []);
  return (
    <SmoothScrollProvider>
      <div className="relative ">
        <FloatingDots count={5} className="z-50 absolute inset-0" />
        <div className="relative z-10">
          <Home />
          
          <Skill />
          <GitChart />
          <LeetcodeChart />
          <Project />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default Layout;
