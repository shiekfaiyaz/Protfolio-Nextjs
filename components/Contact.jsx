 'use client'; // This directive makes the component a client component
import { motion } from "framer-motion";
import { useState } from 'react';
import Image from "next/image"; // Assuming you have Next.js Image component setup

export default function Contact() {
  // State to manage form input values
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // State to manage the status of the form submission (e.g., "Sending...", "Message sent successfully!")
  const [status, setStatus] = useState('');

  // Handler for input changes, updates the form state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    setStatus('Sending...'); // Set status to indicate submission is in progress

    try {
      // Send a POST request to your API endpoint
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form), // Send form data as JSON
      });

      // Check if the response was successful
      if (res.ok) {
        setForm({ name: '', email: '', message: '' }); // Clear the form fields
        setStatus('Message sent successfully!'); // Set success message
      } else {
        // If response is not OK, try to parse error message from response body
        const errorData = await res.json();
        setStatus(`Failed to send message: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please try again.'); // Set a generic error message for network issues
    }
  };

  return (

    <section id="contact" className="dark:bg-gray-800  w-full  py-[5rem]">
       <motion.div
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
      <h2 className="text-5xl font-semibold text-purple-400 text-center  md:mb-10">Contact Me</h2>
      </motion.div>

    
      <div className="main w-[80%] m-auto flex flex-col md:flex-row justify-around items-center"> {/* Added flex-col for mobile responsiveness */}
          <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}  >   


        <form onSubmit={handleSubmit} className="mt-4 space-y-4 w-full md:w-[80%]"> {/* Added w-full for mobile responsiveness */}
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full p-2 border rounded-[10rem] pl-[2rem] bg-blue-200 font-medium"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-2 border rounded-[10rem] pl-[2rem] bg-blue-200 font-medium"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border rounded-2xl pl-[2rem] bg-blue-200 font-medium"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-purple-400 text-white w-[50%] h-[3.5rem] rounded-2xl hover:bg-purple-500 transition-colors duration-200"
          >
            Send
          </button>
          {/* Display status message */}
          {status && (
            <p className={`text-center mt-2 ${status.includes('Failed') || status.includes('error') ? 'text-red-500' : 'text-green-600'}`}>
              {status}
            </p>
          )}
        </form>
        </motion.div>

        

        <div className="image mt-8 md:mt-0 md:ml-8 md:w-[50%]">  
           <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.7 }} 
               > 
          <Image src="/contact.svg" alt="Contact Illustration" width={200} height={200} className="w-[25rem] scale-x-[-1] max-w-full h-auto" />
             </motion.div>
        </div>
      
      </div>
    </section>
  );
}
