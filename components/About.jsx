"use client";
import Image from "next/image";
import { icons } from "@/asserts/assert";
import { motion } from "framer-motion";
import { useRef, useState } from 'react';
export default function About() {

 const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <>
      <section
        id="about"
        className="bg-white text-black dark:bg-gray-800 dark:text-white p-0 mx-auto my-0  text-center w-[100%] h-auto md:px-[10%]  md:w-[100%] md:h-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-semibold py-[2rem]">
            About <span className="text-purple-400">ME😊</span>
          </h2>
        </motion.div>

        <div className="flex flex-col justify-center items-center gap-5  md:flex md:flex-row md:justify-around md:items-center">
                <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
            > 
         
          <div className="right w-[80%] m-auto md:w-[90%] relative md:my-[1.5rem]">
             <div className="relative w-fit">
      <video
        ref={videoRef}
        width="500"
        height="400"
        className="z-10 relative"
        controls
        preload="none"
      >
        <source src="coding-vid.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <Image
          src="/play-solid.svg" // ✅ make sure it's in `/public` folder
          alt="program"
          width={60}
          height={50}
          onClick={handlePlay}
          className="dark:bg-gray-800 absolute z-20 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] cursor-pointer"
        />
      )}
    </div>
              
            
            <div className="sm:w-[95%] sm:h-[100%] top-0 left-[12%] md:w-[80%] md:h-[15rem] bg-purple-400 absolute md:top-[-2rem] md:left-[30%]"></div>
          </div>
          </motion.div>
           
               
          <div className=" left dark:bg-black  w-[90%] mt-5 md:w-[40%] border-1 border-white p-[1rem] rounded-4xl shadow-xl hover:shadow-2xl hover:shadow-purple-200">
            <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}  
           >  
            <p className="mt-2 bg-white text-black  dark:bg-black dark:text-white text-gray-700 text-left">
              I’m Shaik Faiyaz, a full-stack web developer with over 3 years of
              experience creating responsive, user-focused websites and web
              applications. I’ve built custom dashboards, learning platforms,
              and business websites using modern technologies. I’m passionate
              about writing clean code and delivering high-quality, scalable
              solutions for startups and small businesses.
            </p>
            <div className="border-1 border-purple-300  text-left my-5 flex">
              <Image
                src={icons.skill}
                className="dark:bg-white"
                width={60}
                height={50}
                alt="program"
              />
              <span className=" bg-white text-black dark:bg-black dark:text-white px-4 ">
                {" "}
                My core stack includes React.js, Next.js, Node.js, MongoDB, and
                Tailwind CSS.
              </span>
            </div>
            <div className="border-1 border-purple-300 my-5 text-left flex">
              <Image
                src={icons.eduction}
                className="dark:bg-white"
                width={60}
                height={50}
                alt="program"
              />
              <span className="bg-white text-black dark:bg-black dark:text-white px-4">
                Osmania University Master of Computer Science (MSCS), Computer
                science 2023-2025 .
              </span>
            </div>
            <a href="./cv-resume.pdf" download="./cv-resume.pdf">
              {" "}
              <button className="border-2 bg-purple-400 text-white font-bold px-10 py-3 m-5 rounded-2xl cursor-pointer hover:bg-white hover:text-black">
                Download CV
              </button>
            </a>
             </motion.div>
          </div>
         
        </div>
      </section>
    </>
  );
}
