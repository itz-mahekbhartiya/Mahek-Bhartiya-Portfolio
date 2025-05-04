import React, { useState } from "react";
import { motion } from "framer-motion";
import projectFIR from "../assets/projectFIR.png";
import projectVPE from "../assets/projectVPandE.png";
import projectAttendance from "../assets/projectAttendance.png";
import projectURLShortner from "../assets/projectURLShortner.png";
const projects = [
  {
    id: 1,
    tech: "PHP",
    name: "Crime DB System",
    desc: "Online FIR registration",
    image: projectFIR,
    link: "https://anotherprojectlink.com",
  },
  {
    id: 2,
    tech: "MERN",
    name: "Attendance Tracker",
    desc: "Track your attendance in real time",
    image: projectAttendance,
    link: "https://yourprojectlink.com",
  },
  {
    id: 3,
    tech: "Machine Learning",
    name: "Virtual Pen and Eraser",
    desc: "Sketch using your finger with using touching the display.",
    image: projectVPE,
    link: "https://anotherprojectlink.com",
  },
  {
    id: 4,
    tech: "Node.js, Express.js, and MongoDB",
    name: "URL Shortner",
    desc: "Very larger URL! Shorten it!",
    image: projectURLShortner,
    link: "https://github.com/itz-mahekbhartiya/URL-Shorter.git",
  },
];

const getTransformOrigin = (xPercent) => {
  if (xPercent < 33) return "left center";
  if (xPercent > 66) return "right center";
  return "center center";
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const applyCardEffect = (id, clientX = null, boundingRect = null) => {
    const card = document.getElementById(`card-${id}`);
    const rect = boundingRect || card.getBoundingClientRect();
    const x = clientX !== null ? clientX - rect.left : rect.width / 2;
    const xPercent = (x / rect.width) * 100;
    const origin = getTransformOrigin(xPercent);
    card.style.transition = "background 0.3s ease, transform 0.3s ease";
    card.style.transformOrigin = origin;
    card.style.background = `linear-gradient(to right, rgba(255,255,255,0.15) ${xPercent}%, rgba(31,18,27,1) 100%)`;
  };

  const resetCardEffect = (id) => {
    const card = document.getElementById(`card-${id}`);
    card.style.transition = "background 0.3s ease, transform 0.3s ease";
    card.style.background = "#1f121b";
    card.style.transformOrigin = "center center";
  };

  const handleMouseMove = (e, id) => {
    applyCardEffect(id, e.clientX);
  };

  const handleTouchMove = (e, id) => {
    const touch = e.touches[0];
    const card = document.getElementById(`card-${id}`);
    const rect = card.getBoundingClientRect();
    applyCardEffect(id, touch.clientX, rect);
  };

  const handleMouseLeave = (id) => {
    resetCardEffect(id);
  };

  const handleTouchEnd = (id) => {
    resetCardEffect(id);
  };

  return (
    <div className="min-h-screen bg-[#3a2433] p-4 md:p-10 flex flex-col items-center gap-6">
      <h2 className="skills-heading max-w-[80%] text-xl 2xl:text-4xl text-center break-words">
        <span className="text-white">Portfolio.</span><br className='xl:hidden'/>
        <span className='text-[#F0CAA3]'>mahekBhartiya<br className='xl:hidden'/>(<span className='text-[#C7D9DD] font-semibold'>Projects</span>);</span>
      </h2>

      {(showAll ? projects : projects.slice(0, 3)).map((project) => (
        <motion.a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          id={`card-${project.id}`}
          onMouseMove={(e) => handleMouseMove(e, project.id)}
          onTouchMove={(e) => handleTouchMove(e, project.id)}
          onMouseLeave={() => handleMouseLeave(project.id)}
          onTouchEnd={() => handleTouchEnd(project.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1.02 }}
          className="group flex flex-col md:flex-row items-center md:justify-between cursor-pointer rounded-2xl p-4 transition-all duration-300 ease-in-out bg-[#1f121b] text-white shadow-lg hover:shadow-2xl w-full max-w-5xl"
          style={{ width: "100%" }}
        >
          <div className="z-10 relative w-full md:w-2/3 md:pr-4 mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm font-semibold text-pink-300">{project.tech}</p>
            <h2 className="text-lg sm:text-xl font-bold my-1">{project.name}</h2>
            <p className="text-sm text-gray-300">{project.desc}</p>
          </div>
          <div className="relative w-full md:w-1/3">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="w-full h-auto object-cover rounded-xl opacity-70 transition duration-300 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </motion.a>
      ))}

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-pink-600 text-white py-2 px-4 rounded-xl transition duration-300 hover:bg-pink-800"
        >
          {showAll ? "View Less Projects" : "View More Projects"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
