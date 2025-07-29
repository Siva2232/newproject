// src/components/StickyBookButton.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Sticky() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const viewportMiddle = scrollY + windowHeight / 2;

      const whyChoose = document.getElementById("why-choose-section")?.offsetTop ?? Infinity;
      const news = document.getElementById("news-section")?.offsetTop ?? Infinity;
      const footer = document.getElementById("footer-section")?.offsetTop ?? Infinity;

      // Show button only if viewport middle is between whyChoose and before news & footer
      if (viewportMiddle >= whyChoose && viewportMiddle < news && viewportMiddle < footer) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
   <a href="/appointments">
  <motion.button 
    className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 
          bg-white text-[#800000] font-semibold rounded-full 
          border-2 border-[#800000] shadow-lg z-50 
          flex items-center gap-2 cursor-pointer
          transition-all duration-500 ease-in-out
          hover:bg-[#800000] hover:text-white hover:shadow-[0_0_15px_rgba(128,0,0,0.5)]"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    aria-label="Book Appointment"
  >
    <Calendar size={20} />
    Book Appointment
  </motion.button>
</a>

  );
}
