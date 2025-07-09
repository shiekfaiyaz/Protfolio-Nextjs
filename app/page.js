"use client";
import ProjectSlider from "@/components/ProjectSlider";
import ReviewCard from "@/components/ReviewCard";
import PricePlans from "@/components/PricePlans";
import ServiceCard from "@/components/ServiceCard";
import Contact from "@/components/Contact";
import { icons } from "@/asserts/assert";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
 

export default function Home() {

  const [imageIndex, setImageIndex] = useState(0);

  const images = ["/profile3.png", "/profile.png"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const index = Math.min(images.length - 1, Math.floor(scrollTop / 100));
      setImageIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // text-animation 

  
  
  return (
    <>
      <main>
        <Navbar />

        {/* Hero section  */}

        <section
          id="home"
          className=" bg-white text-black dark:bg-black dark:text-white relative flex items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          {/* Background*/}
          <Image
            src="/hero-bg-img.jpg"
            alt="Background design"
            fill
            className="object-cover w-[80%] mx-auto blur-[150px] scale-x-[-1] opacity-50 "
            priority // Important for LCP
            sizes="(max-width: 768px) 100vw, 100vw"
          />

          {/* Main content container - uses flex for responsive layout */}
          <div className="flex flex-col justify-around md:flex-row items-center justify-between max-w-[80%] mx-auto z-20">
            {/* Left Content Area (Text and Buttons) */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-10 px-2">
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Hi,👋 I’m Shaik, Web
                  <span className="text-purple-400">Developer</span> and{" "}
                  <span className="text-purple-400">Designer</span>
                </h1>
              </motion.section>
              <motion.section
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className=" text-black  dark:text-white text-base sm:text-lg text-gray-600 mb-8 max-w-lg md:max-w-none mx-auto md:mx-0">
                  I build modern, responsive web applications using React,
                  Next.js, Node.js, and Tailwind CSS. Let’s work together to
                  bring your ideas to life.
                </p>
              </motion.section>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <a href="#projects">
                    <button className="dark:text-white border-2 border-purple-400 text-black font-bold px-8 py-3 rounded-2xl cursor-pointer hover:bg-purple-400  hover:dark:text-black hover:text-white w-full sm:w-auto">
                      My Work
                    </button>
                  </a>
                  <a href="https://www.upwork.com/freelancers/~016245cb361bf528ed">
                    <button className="border-2 bg-purple-400 text-white font-bold px-8 py-3 my-6 rounded-2xl cursor-pointer hover:bg-white hover:text-black w-full sm:w-auto md:ml-20">
                      Hire Me
                    </button>
                  </a>
                </motion.section>
              </div>
            </div>

            {/* Right Content Area (Profile Image and Blobs) */}
            <div className="w-full mt-[2rem] md:w-1/2 flex justify-center md:justify-end relative pb-10 md:pb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-md mx-auto"
              >
                <Image
                  src={images[imageIndex]} // make sure `images[imageIndex]` is defined in the parent
                  width={500}
                  height={150}
                  alt="Scroll Image"
                  className="relative z-50 w-4/5 sm:w-3/5 md:w-[80%] max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition duration-500 ease-in-out"
                />
              </motion.div>
              {/* Decorative Blobs */}
              <div
                className=" sm:block absolute w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] bg-purple-200 rounded-full animate-blob md:top-[0%] -right-0 bottom-20"
                style={{
                  borderRadius: "70% 30% 40% 70% / 60% 40% 60% 40%",
                }}
              ></div>
              <div
                className="hidden sm:block absolute  w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] bg-purple-200 rounded-full animate-blob  -right-0 bottom-20"
                style={{
                  borderRadius: "70% 30% 40% 70% / 60% 40% 60% 40%",
                }}
              ></div>
            </div>
          </div>
        </section>


 
 
        {/* test animtion  */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center p-10 dark:bg-black dark:text-white"
        >
          <h1 className="text-4xl font-bold"><span className="text-purple-400">Welcome to My</span> Portfolio</h1>
          <p className="text-gray-500 mt-2">Web Developer | Designer</p>
        </motion.section>












        {/* About-section */}
        <About />

        {/* skills */}

        <Skills />

        {/* services */}

        <ServiceCard />

        {/* projects */}
        <section
          id="project"
          className="bg-white text-black dark:bg-black dark:text-white md:w-[90%] md:dark:w-[100%] py-20 text-center dark:text-purple-400 w-[100%] m-auto h-auto bg-white"
        >
          <h2 className="text-3xl font-semibold">Portfolio</h2>
          <p className="dark:text-white mt-2">
            List of featured personal and freelance projects.
          </p>

          <ProjectSlider />
        </section>

        {/*Reviews  */}
        <section
          id="reviews"
          className="w-[90%] m-auto bg-gray-50 md:w-[80%] md:h-auto md:mb-[3rem]"
        >
          <h2 className="text-2xl font-semibold mb-4">Client Reviews</h2>
          <ReviewCard />
        </section>

        {/* priceng */}
        <section
          id="reviews"
          className="p-5 h-auto  bg-[linear-gradient(177deg,rgba(198,142,253,1)_43%,rgba(192,240,252,1)_48%)]"
        >
          <PricePlans />
        </section>
        {/* content */}

        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
1;
