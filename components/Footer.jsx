 'use client';
import { icons } from "@/asserts/assert";
import Image from "next/image";

export default function Footer() {
  return (
    // Main section for the footer, with responsive padding
    <section className=" w-full dark:bg-black dark:text-white overflow-hidden mt-0 md:m-0 sm:mt-24 text-black bg-blue-200">
    

      {/* Footer content - now flows below the wave image */}
      <footer className="text-black  dark:text-white  p-6 md:p-10 lg:p-12"> {/* Changed text-red-200 to text-white, responsive padding */}
        <div
          id="main-footer-content"
          className="max-w-7xl  mx-auto flex flex-col  md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left" // Responsive flex direction and alignment
        >
          {/* Left Links Section - uses grid for columns */}
          <div id="left-links" className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            {/* Column 1 */}
            <div className=" flex flex-col gap-2">
              <h1 className="dark:text-blue-400 text-xl font-semibold mb-2 text-gray-800">WebXAction</h1> {/* Added text-gray-800 for contrast */}
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Home</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#service" className="hover:underline">Services</a>
            </div>

            {/* Column 2 */}
            <div className="  flex flex-col gap-2">
              <h1 className="dark:text-blue-400 text-xl font-semibold mb-2 text-gray-800">Web Dev.</h1> {/* Added text-gray-800 for contrast */}
              <a href="#" className="hover:underline">Product A</a>
              <a href="#project" className="hover:underline">Projects</a>
              <a href="#" className="hover:underline">Features</a>
              <a href="#" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">Testimonials</a>
            </div>

            {/* Column 3 */}
            <div className=" flex flex-col gap-2">
              <h1 className="dark:text-blue-400 text-xl font-semibold mb-2 text-gray-800">ReactJs</h1> {/* Added text-gray-800 for contrast */}
              <a href="#contact" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">Support</a>
              <a href="#" className="hover:underline">FAQ</a>
              <a href="#" className="hover:underline">Blog</a>
              <a href="#" className="hover:underline">Careers</a>
            </div>
          </div>

          {/* Right Section - Let's Talk & Social Icons */}
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0"> {/* Responsive alignment */}
            <h1 className="dark:text-blue-400 text-4xl sm:text-5xl font-medium text-gray-800 mb-4">Let's Talk</h1> {/* Responsive font size, text-gray-800 for contrast */}
            <div id="social-icons" className="flex flex-wrap justify-center md:justify-start gap-4"> {/* flex-wrap for mobile */}
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <Image src={icons.insta} alt="Instagram icon" width={40} height={40} className="rounded-full hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575622426861" aria-label="Facebook">
                <Image src={icons.facebook} alt="Facebook icon" width={40} height={40} className="rounded-full hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://x.com/sheik_faiy75224" aria-label="Twitter">
                <Image src={icons.twitter} alt="Twitter icon" width={40} height={40} className="rounded-full hover:opacity-80 transition-opacity bg-white" />
              </a>
              <a href="https://www.youtube.com/channel/UCVA5d6scaIQftnVQ9wKwW7Q" aria-label="youtube">
                <Image src={icons.youtube} alt="youtube icon" width={40} height={40} className="rounded-full hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/sheik-faiyaz-3b82b52b8/" aria-label="linkedin">
                <Image src={icons.linkedin} alt="linked icon" width={40} height={40} className="rounded-full hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.upwork.com/freelancers/~016245cb361bf528ed" aria-label="upwork">
                <Image src={icons.upwork} alt="upwork icon" width={40} height={40} className="rounded-full hover:opacity-80 bg-white transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-300"> {/* Added top border */}
            <p className="dark:text-purple-400 font-semibold text-center text-gray-800 text-sm md:text-base">© {new Date().getFullYear()} Faiyaz.dev</p> {/* text-gray-800 for contrast */}
        </div>
      </footer>
    </section>
  );
}