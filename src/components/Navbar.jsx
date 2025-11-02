// Import from react
import { useEffect, useState } from "react";
import {
  RiCodeSSlashLine,
  RiFolderLine,
  RiHomeLine,
  RiInformationLine,
  RiMailLine,
} from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";
//import lenis
import { useLenis } from "../Hooks/SmoothScroll";
// Import from Components
import { ChevronDown } from "./ChevronDown";
import { ChevronsRight } from "./ChevronsRight";
// Import from motion
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const logo = "< Lk />";
  // Navigation
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el && lenis) {
      lenis.scrollTo(el, {
        offset: -50,
        duration: 0.8,
        easing: (t) => t,
      });
    }
  };
  // Theme
  const [theme, setTheme] = useState("Purple");
  const saveTheme = localStorage.getItem("theme");
  const [open, setOpen] = useState(false);
  const themes = [
    { name: "Orange", value: "orange", color: "#f27d05 " },
    { name: "Blue", value: "blue", color: "#5593f6" },
    { name: "Purple", value: "purple", color: "#9766e3 " },
    { name: "Green", value: "green", color: "#3bde76" },
  ];
  useEffect(() => {
    if (saveTheme) {
      setTheme(saveTheme);
      if (saveTheme === "orange") {
        document.documentElement.setAttribute("data-theme", "orange");
      }
      if (saveTheme === "blue") {
        document.documentElement.setAttribute("data-theme", "blue");
      }
      if (saveTheme === "purple") {
        document.documentElement.setAttribute("data-theme", "purple");
      }
      if (saveTheme === "green") {
        document.documentElement.setAttribute("data-theme", "green");
      }
    } else {
      document.documentElement.setAttribute("data-theme", "purple");
      localStorage.setItem("theme", "purple");
    }
  }, [theme]);
  const toggleTheme = (e) => {
    localStorage.setItem("theme", e);
    document.documentElement.setAttribute("data-theme", e);
  };
  // Mode Light & Dark
  const [Mode, setMode] = useState("dark");
  const saveMode = localStorage.getItem("mode");
  let ModeText;
  useEffect(() => {
    if (saveMode) {
      setMode(saveMode);
      if (saveMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  }, []);
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  };
  if (Mode === "dark") {
    ModeText = (
      <span className="flex items-center gap-1">
        <FiSun />
        Light
      </span>
    );
  } else {
    ModeText = (
      <span className="flex items-center gap-1">
        <FiMoon />
        Dark
      </span>
    );
  }
  // Animation Variable for Mobile nav
  const sidebarVariants = {
    // hidden state
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
    // Visible state
    visible: {
      x: "0%",
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  };
  return (
    <nav className="fixed top-0 w-full bg-[var(--bg-color)] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#intro"
            className="text-2xl font-bold text-[var(--text-color)]"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("intro");
            }}
          >
            {logo}
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[var(--maintext-color)] font-medium">
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("intro")}
            >
              Home
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("About")}
            >
              About
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("skill")}
            >
              Skills
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("project")}
            >
              Projects
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
            {/* Theme Option */}
            
            {/* Mode */}
            <button
              onClick={toggleMode}
              className="flex items-center text-[var(--maintext-color)]"
            >
              {ModeText}
            </button>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-color)]"
            >
              {isOpen ? (
                <ChevronsRight stroke="var(--text-color)" />
              ) : (
                <ChevronsRight
                  stroke="var(--text-color)"
                  className="rotate-180"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute md:hidden w-[100%] h-screen text-xl text-[var(--text-color)] "
            key="mobile-nav"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Blur Div */}
            <motion.div
              className="absolute w-[50%] h-screen backdrop-blur-sm"
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(!isOpen)}
            ></motion.div>
            {/* Main Div that contain info */}
            <div className="absolute h-screen p-5 pt-6 w-[50%] right-0 bg-[var(--bg-color)] mt-[-1px]">
              {/* Home */}
              <div
                onClick={() => {
                  handleScroll("intro");
                  setIsOpen(false);
                }}
                className="flex gap-2 items-center mt-3 p-2 "
              >
                <RiHomeLine /> <span>Home</span>{" "}
              </div>
              {/* About me */}
              <div
                onClick={() => {
                  handleScroll("About");
                  setIsOpen(false);
                }}
                className="flex gap-2 items-center mt-3 p-2 "
              >
                <RiInformationLine /> <span>About </span>{" "}
              </div>
              {/* Skill */}
              <div
                onClick={() => {
                  handleScroll("skill");
                  setIsOpen(false);
                }}
                className="flex gap-2 items-center mt-3 p-2 "
              >
                <RiCodeSSlashLine /> <span> Skills</span>{" "}
              </div>
              {/* Projects */}
              <div
                onClick={() => {
                  handleScroll("project");
                  setIsOpen(false);
                }}
                className="flex gap-2 items-center mt-3 p-2 "
              >
                <RiFolderLine /> <span>Projects </span>{" "}
              </div>
              {/* Contact me */}
              <div
                onClick={() => {
                  handleScroll("contact");
                  setIsOpen(false);
                }}
                className="flex gap-2 items-center mt-3 p-2 "
              >
                <RiMailLine /> <span>Contact </span>{" "}
              </div>
              {/* Theme Dark & Light */}
              <button
                onClick={toggleMode}
                className=" flex gap-2 items-center mt-3 p-2"
              >
                {ModeText}
              </button>
              {/* Theme Options List */}
              <div className="flex gap-2 items-center mt-3 p-2">
                <div className="relative">
                  {/* Button */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="[var(--bg-color)] p-1 flex items-center"
                  >
                    Theme
                    <ChevronDown
                      stroke="var(--text-color)"
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180" : "rotate-0"
                      } `}
                    />
                  </button>
                  {/* theme option */}
                  {open && (
                    <ul className="absolute mt-2 rounded-md shadow-lg z-10">
                      {themes.map((t) => (
                        <li
                          key={t.value}
                          onClick={(e) => {
                            toggleTheme(t.value);
                            setOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer flex gap-3 items-center"
                        >
                          <div
                            className={`h-5 w-5 rounded-full`}
                            style={{ backgroundColor: t.color }}
                          ></div>
                          <span className="text-[var(--maintext-color)]">
                            {t.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
