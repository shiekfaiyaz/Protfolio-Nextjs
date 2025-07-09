 'use client';
import { icons } from "@/asserts/assert";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: icons.custom_web_icon,
    title: "Custom Web App",
    desc: "I build scalable, full-stack web applications using React, Next.js, Node.js, and MongoDB. and I deliver secure, responsive, and user-friendly apps",
    style: "border-purple-400 bg-white shadow-[1px_3px_5px_#800080]",
    position: "md:absolute md:bottom-0 md:left-[2.5%]",
  },
  {
    icon: icons.website_icon,
    title: "Website Design",
    desc: "Responsive code using Tailwind CSS and React. I ensure pixel-perfect accuracy, modern UI/UX, and mobile-first responsiveness.",
    style: "bg-orange-100",
    position: "md:absolute md:bottom-[4rem] md:left-[21.5%]",
  },
  {
    icon: icons.ecom_icon,
    title: "E-commerce Store",
    desc: "I design and set up Shopify and WooCommerce stores with product pages, cart, payment integration, and responsive layouts.",
    style: "bg-purple-200",
    position: "md:absolute md:bottom-[8rem] md:left-[40.5%]",
  },
  {
    icon: icons.admin_icon,
    title: "Admin Dashboard",
    desc: "I develop dynamic admin panels and CMS systems for businesses that need to manage users, data, content, or sales.",
    style: "bg-orange-100 dark:border-purple-400",
    position: "md:absolute md:bottom-[12rem] md:left-[59.5%]",
  },
  {
    icon: icons.code_icon,
    title: "Landing Page",
    desc: "I design fast-loading, visually engaging landing pages and portfolio websites optimized for SEO, conversions, and mobile devices.",
    style: "border-purple-400 bg-white shadow-[1px_3px_5px_#800080]",
    position: "md:absolute md:bottom-[16rem] md:left-[78.5%]",
  },
];

export default function ServiceCard() {
  return (
    <section id="service" className="py-2 w-full h-auto dark:bg-gray-800 md:h-auto md:w-full bg-gradient-to-t from-[#C68EFD] to-[#C0F0FC]">
      <h2 className="text-4xl font-semibold text-center md:text-center md:ml-[10rem] my-5">Services</h2>

      <div className="bg-white text-black dark:bg-gray-800 dark:text-white flex flex-col justify-center items-center gap-[1rem] h-auto rounded-[2%] shadow-[2px_3px_5px_rgba(0,0,0,0.4)] md:relative md:h-screen md:w-[80%] md:mx-auto">
        <div className="flex flex-col justify-center items-center w-[80%] text-center md:text-start md:absolute top-0 md:w-[50%] md:left-0 right-[30%]">
          <h1 className="text-2xl font-extrabold">What I can Offer:</h1>
          <p className="md:mx-10">I help individuals, startups, and businesses build beautiful, functional, and scalable digital experiences.</p>
        </div>

        {services.map((service, index) => (
          <motion.div
             key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
             
            className={`text-black dark:bg-black dark:text-blue-200 dark:shadow-blue-400 hover:shadow-2xl border-2 static w-[80%] h-auto p-5 hover:z-10 md:w-[19%] text-start rounded-2xl ${service.style} ${service.position}`}
          >
            <Image src={service.icon} width={50} height={50} alt="service" className="bg-white m-auto" />
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
