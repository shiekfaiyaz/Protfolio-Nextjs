'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const reviews = [
  {
    name: 'John Doe',
    role: 'Upwork Client',
    image:'/ava.jpg',
    reating:'⭐⭐⭐⭐⭐',
    quoteIcon:'/left-quote.png',
    feedback:
      'Faiyaz delivered outstanding work on a tight deadline. His deep understanding of React and backend integration made the project done . He also provided clear documentation and was extremely communicative throughout. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    role: 'Freelancer Client',
      image:'/ava3.jpg',
    reating:'⭐⭐⭐⭐',
    quoteIcon:'/left-quote.png',
    feedback:
      'Working with Faiyaz was a pleasure. He quickly understood our vision and built a sleek, responsive landing page using Next.js and Tailwind CSS. He’s a proactive problem solver and handled feedback gracefully. We’ll definitely collaborate again!',
  },
  {
    name: 'Alex Brown',
    role: 'Startup Founder',
      image:'/ava4.jpg',
    reating:'⭐⭐⭐⭐⭐',
    quoteIcon:'/left-quote.png',
    feedback:
      'Faiyaz built our entire MVP from scratch using the MERN stack. He ensured performance, clean code, and even set up CI/CD for deployment. His professionalism, attention to detail, and full-stack expertise are rare. A++ developer!',
  },
  {
    name: 'Emily Carter',
    role: 'Design Agency Manager',
      image:'/ava2.jpg',
    reating:'⭐⭐⭐⭐',
    quoteIcon:'/left-quote.png',
    feedback:
      'Faiyaz helped us redesign a small section of our homepage using Tailwind CSS. The new layout looks amazing and performs great across devices. His eye for design and quick turnaround really impressed our team.',
  },
  {
    name: 'Michael Zhang',
    role: 'eCommerce Store Owner',
      image:'/profile4.jpg',
      quoteIcon:'/left-quote.png',
    reating:'⭐⭐⭐⭐⭐',
    feedback:
      'I hired Faiyaz to fix a few JavaScript bugs and optimize the checkout flow. He quickly identified the issues, solved them efficiently, and even suggested improvements. Super reliable and technically strong!',
  },
];

export default function ClientReviews() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const { name, image, role, reating , feedback , quoteIcon} = reviews[index];

  return (


    <section id="clients" className="dark:bg-gray-800 dark:text-white py-16 px-6 bg-gray-100 text-center md:h-auto">
        <motion.div
        
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
      <h2 className="dark:text-purple-400  text-3xl font-bold mb-2">Client Reviews</h2>
      <p className="text-gray-600 dark:text-white mb-8">Feedback from amazing people I've worked with</p>
     </motion.div>

     
      <div className=" dark:bg-black dark:text-white flex flex-col justify-center items-center bg-white shadow-purple-500 shadow-md rounded-lg md:p-[5rem] md:w-3xl md:mx-auto relative">
         <motion.div
            key={index} 
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
          >
        <p className="dark:text-white m-auto sm:text-center text-gray-800 italic mt-5 w-[40vw]">"{feedback}"</p>
         <Image
                      src={quoteIcon}
                      alt={name}
                      width={100}
                      height={100}
                      className="w-[20%] top-[0rem] left-0 md:w-[20%] absolute md:top-[-5rem]"
                    />

        <div className="mt-4 flex justify-evenly items-center">
          <div>
       <Image
                      src={image}
                      alt={role}
                      width={100}
                      height={100}
                      className="rounded-[100%] mb-4"
                    />
                    <h2 className='text-gray-500'>rating:{reating}</h2>
                    </div>
                  
          <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <span className="text-sm text-gray-500">{role}</span>
          </div>
          
        </div>
    
 </motion.div>
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-600 absolute top-[12rem] left-[-2rem]"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 absolute top-[12rem] right-[-2rem]"
        >
          Next
        </button>
      </div>
        </div>
       
    </section>
  );
}
