 'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React, Next.js, Tailwind CSS', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'REST APIs, Axios, Postman', level: 80 },
  { name: 'Node.js, Express.js, EJS', level: 80 },
  { name: 'Design: Figma, Canva', level: 90 },
  { name: 'Databases: MongoDB, Firebase, MySQL', level: 80 },
  { name: 'Auth & Hosting: JWT, Firebase, Vercel, GitHub', level: 90 },
  { name: 'CMS & Platforms: WordPress, Shopify, Figma', level: 90 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-16 px-4 md:px-10 bg-white dark:bg-black text-black dark:text-white"
    >
      <motion.div
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My <span className="text-purple-400">Skills</span>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
              <div
                className="bg-purple-400 h-4 rounded-full text-center text-white text-sm font-semibold"
                style={{ width: `${skill.level}%` }}
              >
                {skill.level}%
              </div>
            </div>
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
