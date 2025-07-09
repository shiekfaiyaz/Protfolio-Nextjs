 'use client';

import { icons } from "@/asserts/assert";
import Image from "next/image";
import { useState, useEffect } from 'react';
import DarkMode from "./DarkMode"; 
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
    }
  };

  return (
    <>
      <nav
        className={` text-black dark:bg-gray-800 dark:text-white w-full fixed top-0 flex justify-between items-center py-3 z-50 px-4 md:px-8 lg:px-16
          transition-all duration-300
          ${isScrolled
            ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-sm'
            : 'bg-transparent' // Transparent when at the top
          }`}
      >
        {/* Logo Section */}
        <a href="/" className="flex items-center" onClick={handleLinkClick}>
          <h1 className="text-purple-500 text-2xl font-bold">SHAIK</h1>
          <h1 className="text-xl md:text-2xl font-bold ml-1">PORTFOLIO</h1> {/* Added ml-1 for spacing */}
          <Image
            src={icons.robot}
            alt="logo"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer ml-2" // Adjust size and spacing
          />
        </a>

        {/* Desktop Menu - Hidden on small screens */}
        <ul className="hidden md:flex justify-around items-center gap-8 font-medium">
          <li><a href="/" className="hover:text-blue-500" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className="hover:text-blue-500" onClick={handleLinkClick}>About</a></li>
          <li><a href="#service" className="hover:text-blue-500" onClick={handleLinkClick}>Service</a></li>
          <li><a href="#project" className="hover:text-blue-500" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500" onClick={handleLinkClick}>Contact</a></li>
        </ul>
<DarkMode />
        {/* Get In Touch Button - Hidden on small screens */}
        <div className="hidden md:block md:my-auto">
          <a href="/contactMe" className="hover:text-blue-500" onClick={handleLinkClick}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-blue-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center"
            >
              Get In Touch
              <Image
                src={icons.contact_icon}
                alt="contact"
                className="w-5 h-5 ml-2" // Adjust size and spacing
              />
            </button>
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) - Shown on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-7 h-7 bg-white text-black dark:bg-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay/Dropdown */}
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed top-16 left-0 w-full bg-white bg-opacity-95 shadow-lg z-40 transition-all duration-300
          ${isScrolled ? 'backdrop-blur-sm' : ''} py-4`}>
          <ul className="flex flex-col items-center gap-4 font-medium text-lg">
            <li><a href="/" className="block w-full text-center py-2 hover:bg-gray-100" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" className="block w-full text-center py-2 hover:bg-gray-100" onClick={handleLinkClick}>About</a></li>
            <li><a href="#service" className="block w-full text-center py-2 hover:bg-gray-100" onClick={handleLinkClick}>Service</a></li>
            <li><a href="#project" className="block w-full text-center py-2 hover:bg-gray-100" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#contact" className="block w-full text-center py-2 hover:bg-gray-100" onClick={handleLinkClick}>Contact</a></li>
            <li>
              <a href="/contactMe" className="block w-full text-center mt-2" onClick={handleLinkClick}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-blue-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-6 py-3 flex items-center justify-center mx-auto"
                >
                  Get In Touch
                  <Image
                    src={icons.contact_icon}
                    alt="contact"
                    className="w-6 h-6 ml-2"
                  />
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}