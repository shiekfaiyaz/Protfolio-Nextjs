'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: '', email: '', message: '' });
      setStatus('Message sent successfully!');
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <>
<Navbar />
 <section className='bg-purple-200 dark:bg-gray-800 dark:text-blue-400 relative mt-20'>
   <Image src="/blob-bg.svg" alt="Contact Illustration" width={50} height={50} className="w-[100%] absolute" />
      
    <div className="  w-[100%] m-auto relative flex flex-col justify-center items-center">
        <Image src="/contactbg.jpg" alt="Contact Illustration" width={200} height={200} className=" w-[80%] md:w-[50%]  m-auto pt-[3rem] rounded-2xl" />
      <div className="contact-box w-[80%] md:absolute md:top-[1rem] md:right-[10rem] md:w-[30%] ">
      <h2 className='font-extrabold text-center mt-5 sm:text-black text-2xl md:text-purple-50 md:mt-0  md:ml-1 md:mb-3'>Available for Freelance Projects</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded-2xl p-6 py-[3rem]">
        <h1 className="text-2xl font-bold text-center ">Contact Me</h1>
        <input name="name" type="text" required placeholder="Your Name" className="w-full p-2 rounded-1xl border rounded" value={form.name} onChange={handleChange} />
        <input name="email" type="email" required placeholder="Your Email" className="w-full p-2 border rounded" value={form.email} onChange={handleChange} />
        <textarea name="message" type="message" required placeholder="Your Message" rows="5" className="w-full p-2 border rounded" value={form.message} onChange={handleChange}></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700">Send</button>
        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </form>
      </div>

      <div className="loc-box w-[60%] mt-5 md:absolute md:top-[5rem] md:left-[15rem] md:w-auto h-auto bg-white rounded-2xl flex flex-col items-center justify-center ">
         <div className="location flex items-center font-bold p-5 text-2xl">
         <Image src="/location.svg" alt="Contact Illustration" width={50} height={50} className=" max-w-full p-2" />
         <h1>location</h1>
         </div>
         <p>Hyderabad,India</p>
          <div className="phone flex items-center font-bold p-5 text-2xl"> 
         <Image src="/phone.svg" alt="Contact Illustration" width={50} height={50} className=" max-w-full p-2" />
         <h1>Phone:</h1>
         </div>
         <p>+91 xxxxxxxxxx</p>
         <p>+91 xxxxxxxxxx</p>
         <div className="hours flex items-center font-bold p-5 text-2xl">
         <Image src="/clock.svg" alt="Contact Illustration" width={50} height={50} className=" max-w-full p-2" />
         <h1>Hours</h1>
         </div>
         <p>9 am to 6 pm</p>
        
      </div>

    </div>
    </section>
    </>
  );
}
