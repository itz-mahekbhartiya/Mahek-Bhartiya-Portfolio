import React, { useState } from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    level: "Bachelor of Engineering",
    institution: "PDEA's College of Engineering, Pune",
    board: "Savitribai Phule Pune University",
    score: "8.65 SGPA",
    coursework: "DSA, DBMS, CN, Web Dev, ML",
  },
  {
    id: 2,
    level: "Diploma in Computer Engineering",
    institution: "Institute of Technology, Kannad, Chh. Sambhajinagar",
    board: "Maharashtra State Board of Technical Education",
    score: "87.54%",
    coursework: "Python, Php, C++, C, Java",
  },
  {
    id: 3,
    level: "SSC",
    institution: "Mother Ganga English School Kannad",
    board: "Maharashtra State Board",
    score: "73.40%",
  },
];

const getTransformOrigin = (xPercent) => {
  if (xPercent < 33) return "left center";
  if (xPercent > 66) return "right center";
  return "center center";
};

const Education = () => {
  const [showAll, setShowAll] = useState(false);

  const applyCardEffect = (id, clientX = null, boundingRect = null) => {
    const card = document.getElementById(`edu-card-${id}`);
    const rect = boundingRect || card.getBoundingClientRect();
    const x = clientX !== null ? clientX - rect.left : rect.width / 2;
    const xPercent = (x / rect.width) * 100;
    const origin = getTransformOrigin(xPercent);
    card.style.transition = "background 0.3s ease, transform 0.3s ease";
    card.style.transformOrigin = origin;
    card.style.background = `linear-gradient(to right, rgba(255,255,255,0.15) ${xPercent}%, rgba(31,18,27,1) 100%)`;
  };

  const resetCardEffect = (id) => {
    const card = document.getElementById(`edu-card-${id}`);
    card.style.transition = "background 0.3s ease, transform 0.3s ease";
    card.style.background = "#1f121b";
    card.style.transformOrigin = "center center";
  };

  const handleMouseMove = (e, id) => {
    applyCardEffect(id, e.clientX);
  };

  const handleTouchMove = (e, id) => {
    const touch = e.touches[0];
    const card = document.getElementById(`edu-card-${id}`);
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
        <span className='text-[#F0CAA3]'>mahekBhartiya<br className='xl:hidden'/>(<span className='text-[#C7D9DD] font-semibold'>Education</span>);</span>
      </h2>

      {(showAll ? educationData : educationData.slice(0, 3)).map((edu) => (
        <motion.div
          key={edu.id}
          id={`edu-card-${edu.id}`}
          onMouseMove={(e) => handleMouseMove(e, edu.id)}
          onTouchMove={(e) => handleTouchMove(e, edu.id)}
          onMouseLeave={() => handleMouseLeave(edu.id)}
          onTouchEnd={() => handleTouchEnd(edu.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1.02 }}
          className="group flex flex-col md:flex-row items-center md:justify-between cursor-pointer rounded-2xl p-4 transition-all duration-300 ease-in-out bg-[#1f121b] text-white shadow-lg hover:shadow-2xl w-full max-w-5xl"
        >
          <div className="z-10 relative w-full text-center md:text-left">
            <p className="text-sm font-semibold text-pink-300">{edu.level}</p>
            <h2 className="text-lg sm:text-xl font-bold my-1">{edu.institution}</h2>
            <p className="text-sm text-gray-300"><span className="text-pink-300">Board:</span> {edu.board}</p>
            <p className="text-sm text-gray-300"><span className="text-pink-300">Score:</span> {edu.score}</p>
            <p className="text-sm text-gray-300"><span className="text-pink-300">Coursework:</span> {edu.coursework}</p>
          </div>
        </motion.div>
      ))}

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-pink-600 text-white py-2 px-4 rounded-xl transition duration-300 hover:bg-pink-800"
        >
          {showAll ? "View Less Education" : "View More Education"}
        </button>
      </div>
    </div>
  );
};

export default Education;
