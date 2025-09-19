'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { Pixelify_Sans, Red_Hat_Display, Rubik_Pixels } from "next/font/google";
import styles from "./HeroSection.module.css";
import Link from 'next/link';
import { AkarIconsXFill } from "../icons/AkarIconsXFill";
import { BxBxlTelegram } from "../icons/BxBxlTelegram";
import { Dexscreener } from "../icons/dexscreener";
import { Paper} from "../icons/paper";

// Fonts
const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixelify",
});
const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-redhat",
});
const rubikPixels = Rubik_Pixels({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubikpixels",
});

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);

  // Countdown timer
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-09-30"); 
    const difference = targetDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const scaleValue = 1 - scrollPosition * 0.0005;

          controls.start({
            scale: Math.max(scaleValue, 0.8),
            transition: { duration: 0.6, ease: "easeOut" },
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } });
          } else {
            controls.start({ opacity: 0.6, transition: { duration: 1, ease: "easeInOut" } });
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [controls]);

  return (
    <div 
      ref={ref} 
      className={`container-fluid d-flex justify-content-center align-items-center 
        ${styles.heroSection} ${pixelify.variable} ${redHat.variable} ${rubikPixels.variable}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
        className={styles.line}
      >
        <div className={styles.topbar}>
            <img src="icon.png" alt="cemetery of coins" className={styles.heroicon} />
            <button className={styles.minbutton}>Join Whitelist</button>
        </div>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
        >
          <source src="Cemetery.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Title */}
        <h1 className={styles.title}>CEMETERY OF COINS</h1>

        {/* Countdown */}
        <div className={styles.countdown}>
          {/* Days */}
          <div className={styles.timeBox}>
            <div className={styles.timeIconWrapper}>
              <img src="Box.png" alt="Days" className={styles.timeIcon} />
              <span className={styles.timeValue}>{timeLeft.days || "00"}</span>
            </div>
            <p>Days</p>
          </div>

          {/* Hours */}
          <div className={styles.timeBox}>
            <div className={styles.timeIconWrapper}>
              <img src="Box.png" alt="Hours" className={styles.timeIcon} />
              <span className={styles.timeValue}>{timeLeft.hours || "00"}</span>
            </div>
            <p>Hours</p>
          </div>

          {/* Minutes */}
          <div className={styles.timeBox}>
            <div className={styles.timeIconWrapper}>
              <img src="Box.png" alt="Minutes" className={styles.timeIcon} />
              <span className={styles.timeValue}>{timeLeft.minutes || "00"}</span>
            </div>
            <p>Minutes</p>
          </div>

          {/* Seconds */}
          <div className={styles.timeBox}>
            <div className={styles.timeIconWrapper}>
              <img src="Box.png" alt="Seconds" className={styles.timeIcon} />
              <span className={styles.timeValue}>{timeLeft.seconds || "00"}</span>
            </div>
            <p>Seconds</p>
          </div>
        </div>

        {/* Subtitle */}
        <h1 className={styles.subtitle}>
          We don’t speak to the dead – We just bury them.
        </h1>

        {/* Button */}
        <a href="/" className={styles.heroLink}>
          <button className={`btn ${styles.heroButton}`}>
            <span>Soon Token Address</span>
          </button>
        </a>

        {/* Socials */}
        <div className={styles.socials}>
          <p className={styles.name}>Cemetery of Coins</p>
          <div className={styles.icons}>
           <Link href='https://x.com/nothingofsolana?s=21' target="_blank" ><Dexscreener className={styles.icon} /></Link>
           <Link href='https://x.com/nothingofsolana?s=21' target="_blank" ><AkarIconsXFill className={styles.icon} /></Link>
           <Link href="https://t.me/+bvDiSc1DWPo5MjFh" target="_blank"><BxBxlTelegram className={`${styles.icon}`} /></Link>
           <Link href="https://t.me/+bvDiSc1DWPo5MjFh" target="_blank"><Paper className={`${styles.icon}`} /></Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}