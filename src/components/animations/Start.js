import { useState, useEffect } from "react";
import "./Animation.css";

export default function Start() {
  const [step, setStep] = useState("compiling");
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState(".");

  // Animate dots every 500ms
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(dotInterval);
  }, []);

  // Progress and state switching
  useEffect(() => {
    let interval;
    let timeout;

    if (step === "compiling") {
      interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 1 : 100));
      }, 40); // 4s total

      timeout = setTimeout(() => {
        setStep("executing");
      }, 4000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [step]);

  return (
    <div className='bg-[#331D2C] min-w-[100vw] min-h-[100vh] p-10 flex flex-col justify-center items-center'>
      {step === "compiling" && (
        <>
          <p className='text-[#F0CAA3] xl:text-3xl font-serif xl:mb-2'>
            Compiling{dots}
          </p>
          <p className='text-white xl:text-3xl font-serif xl:mb-4'>
            Portfolio.<span className='text-[#F0CAA3]'>mahekBhartiya()</span>;
          </p>
          <div className="w-[60%] bg-[#A78295] rounded overflow-hidden">
            <div className="loading-bar" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-[#F0CAA3] mt-2 xl:text-xl font-mono">
            {progress}%
          </p>
        </>
      )}

      {step === "executing" && (
        <div>
            <p className='text-[#F0CAA3] xl:text-3xl font-serif animate-fade-down text-center'>Compiled successfully !!!</p>
        <p className='text-[#F0CAA3] xl:text-3xl font-serif animate-fade-down text-center'>
          Executing{dots} <br />
          <span className="xl:text-4xl text-white font-light font-serif">
            Portfolio.<span className='text-[#F0CAA3]'>mahekBhartiya()</span>;
          </span>
        </p>
        </div>
      )}
    </div>
  );
}
