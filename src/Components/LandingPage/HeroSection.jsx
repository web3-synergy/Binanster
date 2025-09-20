'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { Pixelify_Sans, Red_Hat_Display, Rubik_Pixels } from "next/font/google";
import styles from "./HeroSection.module.css";
import Link from 'next/link';
import { AkarIconsXFill } from "../icons/AkarIconsXFill";
import { BxBxlTelegram } from "../icons/BxBxlTelegram";
import { Dexscreener } from "../icons/dexscreener";
import { Paper } from "../icons/paper";

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

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            });
          } else {
            controls.start({
              opacity: 0,
              x: -100,
              transition: { duration: 0.8, ease: "easeInOut" },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  // ✅ Contract Address Copy Logic
  const [copied, setCopied] = useState(false);
  const contractAddress = "Coming soon"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <div 
      ref={ref} 
      className={`container-fluid d-flex justify-content-center align-items-center 
        ${styles.heroSection} ${pixelify.variable} ${redHat.variable} ${rubikPixels.variable}`}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}   // start left
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
        className={styles.line}
      >
        <div className={styles.topbar}>
          <img src="icon.png" alt="cemetery of coins" className={styles.heroicon} />
          <button className={styles.minbutton}>Join Whitelist</button>
        </div>

        {/* Background Video */}
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src="Cemetery.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Title */}
        <h1 className={styles.title}>CEMETERY OF COINS</h1>

        {/* Countdown */}
        <div className={styles.countdown}>
  {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
    const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];

    // Decide what to show as extra label
    let extraLabel = "—";
    if (label === "Days") extraLabel = "Countdown";
    if (label === "Seconds") extraLabel = "Solana";

    return (
      <div key={label} className={styles.timeBox}>
        {/* Extra label above the box */}
        <p className={`${styles.extraLabel} ${extraLabel === "—" ? styles.hiddenLabel : ""}`}>
          {extraLabel}
        </p>

        <div className={styles.timeIconWrapper}>
          <img src="Box.png" alt={label} className={styles.timeIcon} />
          <span className={styles.timeValue}>{values[i] || "00"}</span>
        </div>

        {/* Bottom label (always Days, Hours, Minutes, Seconds) */}
        <p>{label}</p>
      </div>
    );
  })}
</div>


        {/* Subtitle */}
        <h1 className={styles.subtitle}>
          We don’t speak to the dead – We just bury them.
        </h1>

        {/* ✅ Contract Copy Button */}
        <div className={styles.contractWrapper}>
          <button onClick={handleCopy} className={styles.contractButton}>
            Soon Token Address
          </button>
          {copied && <span className={styles.copiedText}>¡Contract Copied!</span>}
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          <p className={styles.name}>Cemetery of Coins</p>
          <div className={styles.icons}>
            <Link href='https://x.com/nothingofsolana?s=21' target="_blank"><Dexscreener className={styles.icon} /></Link>
            <Link href='https://x.com/nothingofsolana?s=21' target="_blank"><AkarIconsXFill className={styles.icon} /></Link>
            <Link href="https://t.me/+bvDiSc1DWPo5MjFh" target="_blank"><BxBxlTelegram className={styles.icon} /></Link>
            <Link href="https://t.me/+bvDiSc1DWPo5MjFh" target="_blank"><Paper className={styles.icon} /></Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}