import React, { useState, useEffect } from 'react';
import {
  FaCode, FaDatabase, FaReact, FaNodeJs, FaCss3Alt,
  FaHtml5, FaJs, FaJava, FaPython, FaBootstrap,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiMysql, SiExpress,
} from 'react-icons/si';
import '../App.css'; // Ensure this imports the updated CSS shown below

const iconMap = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  Java: <FaJava className="text-red-600" />,
  Python: <FaPython className="text-blue-300" />,
  React: <FaReact className="text-blue-400" />,
  'Express.js': <SiExpress className="text-gray-200" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  Bootstrap: <FaBootstrap className="text-purple-600" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  MySQL: <SiMysql className="text-blue-500" />,
};

const skillsData = [
  {
    title: 'Programming Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python'],
  },
  {
    title: 'Frameworks and Libraries',
    skills: ['React', 'Express.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
];

const SkillCard = ({ title, skills, isFlipped, onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className={`card ${isFlipped ? 'touch-active' : ''}`}>
        <div className="card-face card-front">
          {title}
        </div>
        <div className="card-face card-back">
          <h3>{title}</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                {iconMap[skill] || <FaCode />} {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SkillCards = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleCardClick = (index) => {
    if (!isTouchDevice) return;
    setFlippedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="skills-section">
      <h2 className="skills-heading max-w-[100%] text-xl 2xl:text-4xl text-center break-words">
        <span className="text-white">Portfolio.<br className='xl:hidden'/></span>
        <span className='text-[#F0CAA3]'>mahekBhartiya<br className='xl:hidden'/>(<span className='text-[#C7D9DD] font-semibold'>Skills</span>);</span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((card, index) => (
          <SkillCard
            key={index}
            title={card.title}
            skills={card.skills}
            isFlipped={flippedIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCards;
