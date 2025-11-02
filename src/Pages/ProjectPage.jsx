import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Images - Demo images based on project themes
// Virtu-TryOn - Fashion/Virtual Try-on
const VirtuTryon1 = "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=400&fit=crop&auto=format";
const VirtuTryon2 = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop&auto=format";
const VirtuTryon3 = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format";

// JobPilot - Job Search/Career Platform
const JobPilot1 = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format";
const JobPilot2 = "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop&auto=format";
const JobPilot3 = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&auto=format";

// Food Ordering Web App - Restaurant/Food Delivery
const FoodOrdering1 = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&auto=format";
const FoodOrdering2 = "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop&auto=format";
const FoodOrdering3 = "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=400&fit=crop&auto=format";

// Notation - Education/Resource Sharing
const Notation1 = "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&h=400&fit=crop&auto=format";
const Notation2 = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&auto=format";
const Notation3 = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&auto=format";

// Pingy - Real-time Chat/Messaging
const Pingy1 = "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop&auto=format";
const Pingy2 = "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop&auto=format";
const Pingy3 = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";

// HyperScape - AI/Computer Vision/Urban Planning
const HyperScape1 = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format";
const HyperScape2 = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&auto=format";
const HyperScape3 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&auto=format";

const projects = [
  // Virtu-TryOn
  {
    title: "Virtu-TryOn",
    description: "A virtual try-on application that allows users to virtually try clothing items using augmented reality and computer vision technologies.",
    LiveLink: "https://github.com/Laxmikant3/virtu-tryon",
    GithubLink: "https://github.com/Laxmikant3/virtu-tryon",
    tech: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "OpenCV",
      "TensorFlow"
    ],
    images: [VirtuTryon1, VirtuTryon2, VirtuTryon3],
  },
  // JobPilot
  {
    title: "JobPilot",
    description: "A comprehensive job search and career management platform that helps job seekers find opportunities and manage their applications efficiently.",
    LiveLink: "https://github.com/Laxmikant3/job-pilot",
    GithubLink: "https://github.com/Laxmikant3/job-pilot",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS"
    ],
    images: [JobPilot1, JobPilot2, JobPilot3],
  },
  // Food Ordering Web App
  {
    title: "Food Ordering Web App",
    description: "A full-stack food ordering application with real-time order tracking, menu management, and seamless user experience for both customers and restaurants.",
    LiveLink: "https://github.com/Laxmikant3/food-ordering-web",
    GithubLink: "https://github.com/Laxmikant3/food-ordering-web",
    tech: [
      "React.js",
      "Node.js",
      "MySQL",
      "Express.js",
      "REST API"
    ],
    images: [FoodOrdering1, FoodOrdering2, FoodOrdering3],
  },
  // Notation - Resource Sharing App
  {
    title: "Notation - Resource Sharing",
    description: "Built a platform to help students seamlessly share academic resources such as notes, assignments, and study material. Supports diverse file formats with real-time updates.",
    LiveLink: "https://school-bag.vercel.app/",
    GithubLink: "https://github.com/Laxmikant3/Notation",
    tech: [
      "MERN Stack",
      "Real-time Updates",
      "File Upload",
      "REST API",
      "Firebase"
    ],
    images: [Notation1, Notation2, Notation3],
  },
  // Pingy - Real-Time Chat App
  {
    title: "Pingy - Real-Time Chat",
    description: "Developed a full-stack real-time chat platform using the MERN stack with Socket.io for instant, bidirectional communication, enabling private and group chats with JWT authentication.",
    LiveLink: "https://pingy-d9x5.onrender.com/",
    GithubLink: "https://github.com/Laxmikant3/Pingy",
    tech: [
      "MERN Stack",
      "Socket.io",
      "JWT Auth",
      "Real-time Chat",
      "React.js"
    ],
    images: [Pingy1, Pingy2, Pingy3],
  },
  // HyperScape - Urban Land Classification
  {
    title: "HyperScape - Urban Land Classification",
    description: "Deep Learning-Based Urban Land Classification using Hyperspectral Imagery. Designed a CNN-based architecture with 3D-CNN and Transformer extensions for enhanced classification accuracy.",
    LiveLink: "https://github.com/Laxmikant3/HyperScape",
    GithubLink: "https://github.com/Laxmikant3/HyperScape",
    tech: [
      "Python",
      "Deep Learning",
      "CNN",
      "TensorFlow",
      "PyTorch",
      "Computer Vision"
    ],
    images: [HyperScape1, HyperScape2, HyperScape3],
  }
];

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0);

  // Auto change image every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="bg-black/30 rounded-md shadow-xl overflow-hidden border border-[var(--text-color)] flex flex-col transform-none">
      {/* Image Slideshow */}
      <div className="h-44 md:h-52 lg:h-56 w-full overflow-hidden relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={project.images[current]}
            alt={project.title}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Arrows (only visible on hover) */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft className="text-[var(--text-color)] w-5 h-5 cursor-pointer" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight className="text-[var(--text-color)] w-5 h-5 cursor-pointer" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 w-full flex justify-center gap-2">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition border ${
                i === current ? "bg-[var(--text-color)]" : "bg-gray-800"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl text-[var(--text-color)] md:text-2xl font-bold mb-3">
          {project.title}
        </h2>
        <p className="text-[var(--maintext-color)] text-sm md:text-base mb-4">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-gray-900 text-[#A1A1AA] text-xs px-3 py-1 rounded-full border border-[var(--text-color)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <motion.a
            href={project.LiveLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
            className="flex-1 text-center bg-gray-900 text-[#A1A1AA] py-2 px-4 rounded-[8px] border border-gray-500/10 font-medium transition-all duration-150 active:scale-95 hover:scale-102 ease-in-out"
            whileHover={{
              backgroundColor: "var(--text-color)",
              color: "black",
            }}
            transition={{ duration: 0.4 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.GithubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Source Code"
            className="flex-1 text-center bg-gray-900 text-[#A1A1AA] py-2 px-4 rounded-[8px] border border-gray-500/10 font-medium transition-all duration-150 active:scale-95 hover:scale-102 ease-in-out"
            whileHover={{
              backgroundColor: "var(--text-color)",
              color: "black",
            }}
            transition={{ duration: 0.4 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div id="project" className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <motion.div
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[35px] md:text-[40px] lg:text-6xl font-bold text-[var(--text-color)]">
            My Projects
          </h3>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-[var(--maintext-color)] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore some of the projects I've worked on. These showcase my skills and expertise in full-stack development, machine learning, and real-time applications.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="px-3 sm:px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}