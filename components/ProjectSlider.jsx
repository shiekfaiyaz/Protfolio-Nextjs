 'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const projects = [
  {
    title: "Learning Web App",
    image: "/Edugame.png",
    gitlink:"https://github.com/shiekfaiyaz/EduGameHub-E-Learning.git",
    description: "A full-stack educational platform built using EJS templates, Node.js, and MongoDB.",
  },
  {
    title: "TinDog Website",
    image: "/TinDog.png",
     gitlink:"https://github.com/shiekfaiyaz/EduGameHub-E-Learning.git",
    description: "A responsive and stylish pet matchmaking website clone built using Bootstrap 5 and jQuery",
  },

  {
    title: "Tic-Tac-Toe Game",
    image: "/tic-tac-toe.png",
     gitlink:"https://github.com/shiekfaiyaz/EduGameHub-E-Learning.git",
    description: "A fun and interactive Tic-Tac-Toe game made with vanilla JavaScript, HTML, and CSS",
  },
 
  {
    title: "Food Website ",
    image: "/food-website.png",
    gitlink:"https://shiekfaiyaz.github.io/HTML_CSS_Projects/",
    description: "Converted a food delivery UI design into a fully responsive HTML/CSS/JS website",
  },
  {
    title: "React Landing Page",
    image: "/Landing-page.png",
    gitlink:" https://github.com/shiekfaiyaz/Landing-page-Html.git",
    description: "A clean and responsive one-page React landing page.",
  },
  {
    title: "Blog Platform",
    image: "/cssBlog.png",
    gitlink:"https://github.com/shiekfaiyaz/Web-Action-blog-html.git",
    description: "A full blog system with authentication.",
  },


];

const CARDS_PER_PAGE = 3;

export default function ProjectsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + CARDS_PER_PAGE;

  const next = () => {
    if (endIndex < projects.length) {
      setStartIndex(startIndex + CARDS_PER_PAGE);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - CARDS_PER_PAGE);
    }
  };

  return (
    <section className="bg-white text-black dark:bg-black dark:text-white  py-10  " id="projects">
      <div className="max-w-6xl mx-auto px-4 text-center ">
         <motion.div
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 dark:text-purple-400">My Projects</h2>
</motion.div>

        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {projects.slice(startIndex, endIndex).map((project, idx) => (
            
            <div key={idx} className="border-2 dark:border-purple-400 bg-white text-black dark:bg-gray-800 dark:text-white  hover:shadow-2xl hover:shadow-lg dark:shadow-purple-400 rounded-lg overflow-hidden">
                <motion.div
            
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className=" m-5 flex justify-between items-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
               <a href={project.gitlink}> <button className='border-2 bg-purple-400 text-white font-bold w-[7rem] h-[3rem] m-[1rem] rounded-2xl cursor-pointer hover:bg-white hover:text-black'>GitHub</button>
               </a>
              </div>
                <p className=" text-black  dark:text-white  text-sm m-5">{project.description}</p>
          </motion.div>
            </div> 
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className={`px-4 py-2 rounded ${
              startIndex === 0
                ? 'bg-gray-300 cursor-not-allowed text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700 '
            }`}
          >
             Prev
          </button>

          <button
            onClick={next}
            disabled={endIndex >= projects.length}
            className={`px-4 py-2 rounded ${
              endIndex >= projects.length
                ? 'bg-gray-300 cursor-not-allowed text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Next 
          </button>
        </div>
      </div>
    </section>
  );
}
