'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Feature from "@/Components/LandingPage/Feature";
import Footer from "@/Components/LandingPage/Footer";
import HeroSection from "@/Components/LandingPage/HeroSection";

import Sun from "@/Components/LandingPage/Sun";
import Navbar from "@/Components/LandingPage/Navabr";
import Cards from "@/Components/LandingPage/Cards";


export default function Home() {
  const [bgPosition, setBgPosition] = useState(30);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const newPosition = 30 + scrollTop * 0.2; // Adjust the multiplier to control the speed
  //     setBgPosition(newPosition >= 0 ? newPosition : 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const [bgSize, setBgSize] = useState(100);

  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        const newSize = 100 + scrollTop / 12;
      

        setBgSize(newSize >= 100 ? newSize : 100); // Ensure minimum size
      
      } else {
        // Scrolling up - Reset to original size and opacity
        setBgSize(100);
       
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  return (
    <section className="">
      <div
        className="position-relative bg"
        style={{
          backgroundSize: `${bgSize}% `,
        }}
      >
        <Sun />

        <Navbar />

        <motion.div
          initial={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <HeroSection />
        </motion.div>
      </div>
      <main className="bg-color position-relative" style={{ zIndex: "2" }}>
        {/* <FallingStar /> */}
        <div style={{ paddingTop: "200px" }}>
          <Feature />
        </div>

         <div className="space-bw-sections">
          <Cards />
        </div> 

        

        <div className="space-bw-sections">
          <Footer />
        </div>
      </main>
    </section>
  );
}
