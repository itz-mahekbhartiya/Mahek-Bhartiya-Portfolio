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
    github: "https://github.com/itz-mahekbhartiya/ONLINE-FIR-REGISTRATION-SYSTEM.git",
    developmentTime: "Sep 2021- April 2022",
    link: "",
  },
  {
    id: 2,
    tech: "MERN",
    name: "Attendance Tracker",
    desc: "Track your attendance in real time",
    image: projectAttendance,
    github: "https://github.com/itz-mahekbhartiya/Attendance-Tracker.git",
    developmentTime: "Oct 2024- Dec 2024",
    link: "https://attendance-tracker-frontend-i659.onrender.com/",
  },
  {
    id: 3,
    tech: "Machine Learning",
    name: "Virtual Pen and Eraser",
    desc: "Sketch using your finger with using touching the display. It is project presented in Hackathon arranged by Edunet Foundation.",
    image: projectVPE,
    github: "https://github.com/itz-mahekbhartiya/Virtual-pen-and-eraser.git",
    developmentTime: "2023",
    link: "",
  },
  {
    id: 4,
    tech: "Node.js, Express.js, and MongoDB",
    name: "URL Shortner",
    desc: "Very larger URL! Shorten it!",
    image: projectURLShortner,
    github: "https://github.com/itz-mahekbhartiya/URL-Shorter.git",
    developmentTime: "Aug 2024",
    link: "",
  },
  {
    id: 5,
    tech: "Node.js, Express.js, React.js and MySQL",
    name: "Hospital Management System",
    desc: "I robust website solution for all the employees in the hospital. It digitalize the paper work, and reduces manual error.",
    image: "",
    github: "https://github.com/itz-mahekbhartiya/hospital-management-system.git",
    developmentTime: "Nov 2025",
    link: "",
  },
  {
    id: 6,
    tech: "Node.js, Express.js, node-cron and MySQL",
    name: "Database Synchronization Project",
    desc: "It sychronizes changes in offline database with the online database using i CRON job.",
    image: "",
    github: "https://github.com/itz-mahekbhartiya/Database-Synchronization-System-using-Express.js.git",
    developmentTime: "Jan 2026",
    link: "",
  },
  {
    id: 7,
    tech: "Node.js, Express.js, React.js and MySQL",
    name: "Store Rating App",
    desc: "A web application to rate the store according to your experience.",
    image: "",
    github: "https://github.com/itz-mahekbhartiya/Store-Rating-App.git",
    developmentTime: "Jul 2025",
    link: "",
  },
  {
    id: 8,
    tech: "Next.js, Mahcine Learning and MongoDB",
    name: "College Predictor",
    desc: "A web application to help the passout student to have a free AI counsellor.",
    image: "",
    github: "https://github.com/itz-mahekbhartiya/FreeLance-Project-01.git",
    developmentTime: "Dec 2025",
    link: "",
  },
];

// Helper function to extract the latest date from the string for sorting
const parseDate = (dateStr) => {
  // If it's a range (e.g. "Oct 2024- Dec 2024"), take the second part
  const parts = dateStr.split("-");
  const finalDateStr = parts[parts.length - 1].trim();
  return new Date(finalDateStr);
};

// Sort projects: Latest first
const sortedProjects = [...projects].sort((a, b) => 
  parseDate(b.developmentTime) - parseDate(a.developmentTime)
);

const getTransformOrigin = (xPercent) => {
  if (xPercent < 33) return "left center";
  if (xPercent > 66) return "right center";
  return "center center";
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const applyCardEffect = (id, clientX = null, boundingRect = null) => {
    const card = document.getElementById(`card-${id}`);
    if (!card) return;
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
    if (!card) return;
    card.style.transition = "background 0.3s ease, transform 0.3s ease";
    card.style.background = "#1f121b";
    card.style.transformOrigin = "center center";
  };

  const handleMouseMove = (e, id) => applyCardEffect(id, e.clientX);
  const handleTouchMove = (e, id) => {
    const touch = e.touches[0];
    const card = document.getElementById(`card-${id}`);
    const rect = card.getBoundingClientRect();
    applyCardEffect(id, touch.clientX, rect);
  };

  return (
    <div className="min-h-screen bg-[#3a2433] p-4 md:p-10 flex flex-col items-center gap-6">
      <h2 className="skills-heading max-w-[80%] text-xl 2xl:text-4xl text-center break-words">
        <span className="text-white">Portfolio.</span><br className='xl:hidden'/>
        <span className='text-[#F0CAA3]'>mahekBhartiya<br className='xl:hidden'/>(<span className='text-[#C7D9DD] font-semibold'>Projects</span>);</span>
      </h2>

      {(showAll ? sortedProjects : sortedProjects.slice(0, 3)).map((project) => (
        <motion.a
          key={project.id}
          href={project.link && project.link.trim() !== "" ? project.link : project.github}
          target="_blank"
          rel="noopener noreferrer"
          id={`card-${project.id}`}
          onMouseMove={(e) => handleMouseMove(e, project.id)}
          onTouchMove={(e) => handleTouchMove(e, project.id)}
          onMouseLeave={() => resetCardEffect(project.id)}
          onTouchEnd={() => resetCardEffect(project.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1.02 }}
          className="group flex flex-col md:flex-row items-center md:justify-between cursor-pointer rounded-2xl p-4 transition-all duration-300 ease-in-out bg-[#1f121b] text-white shadow-lg hover:shadow-2xl w-full max-w-5xl"
          style={{ width: "100%" }}
        >
          <div className="z-10 relative w-full md:w-2/3 md:pr-4 mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm font-semibold text-pink-300">{project.tech}</p>
            <h2 className="text-lg sm:text-xl font-bold my-1">{project.name}</h2>
            <p className="text-sm text-gray-300">{project.desc}</p>
            <p className="text-xs text-gray-500 mt-2">{project.developmentTime}</p>
            <a className="text-sm text-gray-300"><span className="text-sm font-semibold text-pink-300">Github: </span>  {project.github}</a><br></br>
            {project.link && project.link.trim() !== "" ? <a className="text-sm text-gray-300"><span className="text-sm font-semibold text-pink-300">Live Project: </span> {project.github}</a> : ""}
            
          </div>
          <div className="relative w-full md:w-1/3 flex justify-center items-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-auto object-cover rounded-xl opacity-70 transition duration-300 group-hover:opacity-100 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-32 md:h-40 flex items-center justify-center border border-dashed border-gray-600 rounded-xl text-gray-400 italic">
                No image available
              </div>
            )}
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