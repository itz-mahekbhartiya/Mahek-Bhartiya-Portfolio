import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import profile from "../assets/1000225705.jpg";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Navbar() {
  const navItems = ['Home', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNavbarInView, setIsNavbarInView] = useState(true);
  const navbarRef = useRef(null);
  const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahek-bhartiya/",
    icon: linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/itz-mahekbhartiya",
    icon: github,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mahek_bhartiya",
    icon: instagram,
  },
];

  // Intersection Observer for Navbar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // Trigger when at least 10% is visible
      }
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  return (
    <>
     {/* Mini Navbar - appears only when main navbar is out of view */}
{!isNavbarInView && (
  <div className="fixed top-0 left-0 w-full bg-[#3a2433] text-white z-50 transition-all px-4 py-3 overflow-x-hidden">
    <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
      {navItems.map((item, index) => (
        <Link
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={() => setActiveIndex(index)}
          className={`cursor-pointer whitespace-nowrap transition-all duration-300 text-md sm:text-base ${
            activeIndex === index ? 'font-bold text-[#F0CAA3]' : 'text-white'
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  </div>
)}


      {/* Main Navbar */}
      <div
        ref={navbarRef}
        className="w-screen h-screen bg-[#3a2433] text-white flex flex-col justify-between p-10"
      >
        <div className="mt-[5%]">
          <h2 className="text-4xl font-semibold font-impact tracking-wide md:tracking-wider md:font-light">
            <span className="text-white">Portfolio.</span>
            <span className='text-[#F0CAA3]'><br className='xl:hidden'/>mahekBhartiya();</span>
          </h2>
          <p className="text-xl mt-2">A Full Stack Developer</p>
          <p className="text-lg max-w-1/2 mt-4 text-justify">
            Hi! I'm a tech enthusiast who turns ideas into interactive, intelligent, and impactful digital experiences one line of code at a time.
          </p>
        </div>

        <nav className="mt-6 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer transition-all duration-300 font-serif ${
                activeIndex === index
                  ? 'text-2xl font-bold text-[#F0CAA3]'
                  : 'text-lg text-white'
              }`}
            >
              {index + 1}____{item}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          
<div className="flex gap-4">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:bg-[#2d1a27] px-2 py-1 rounded"
    >
      <img src={social.icon} alt={social.name} className="w-6 h-6" />
      <span className="hidden xl:inline">{social.name}</span>
    </a>
  ))}
</div>
        </div>
      </div>
    </>
  );
}
