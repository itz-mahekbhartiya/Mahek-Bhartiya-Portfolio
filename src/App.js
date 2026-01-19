import './App.css';
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Project from './components/Project';
import Start from './components/animations/Start';
import Skill from "./components/Skill";
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setShowStart(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div className="App overflow-x-hidden">
      {showStart && <Start />}
      {!showStart && (
        <>
        <div id='home'>
        <Navbar />
        </div>
         

          <div id="education">
            <Education />
          </div>
          
          <div id="experience">
            <Experience />
          </div>
          
          <div id="projects">
            <Project />
          </div>

          <div id="skills">
            <Skill />
          </div>

          <div id="contact">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
