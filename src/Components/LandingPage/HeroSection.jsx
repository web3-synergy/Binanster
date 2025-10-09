

'use client';
import React, { useEffect, useRef, useState } from "react";
import { Pixelify_Sans, Red_Hat_Display, Rubik_Pixels, Barlow, Lato as LatoFont } from "next/font/google";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import { AkarIconsXFill } from "../icons/AkarIconsXFill";
import { BxBxlTelegram } from "../icons/BxBxlTelegram";
import { Dexscreener } from "../icons/dexscreener";
import { Paper } from "../icons/paper";
import { Tokenomics} from "../icons/Tokenomics";
import { Believers } from "../icons/Believers";


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
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})
const lato = LatoFont({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-lato",
});

export default function HeroSection() {
  const videoRef = useRef(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Contract Address Copy Logic
  const [copied, setCopied] = useState(false);
  const contractAddress = "Coming soon";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Enable sound
  const enableSound = () => {
    if (videoRef.current && !soundEnabled) {
      videoRef.current.muted = false;
      videoRef.current.removeAttribute("muted");
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) =>
          console.log("Error playing video with sound:", error)
        );
      }
      setSoundEnabled(true);
    }
  };

  // Attach listeners for first user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      enableSound();
    };
    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("scroll", handleUserInteraction, { once: true });
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, [soundEnabled]);

  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center 
        ${styles.heroSection} ${pixelify.variable} ${redHat.variable} ${rubikPixels.variable}`}
    >
      <div className={styles.line}>
        {/* Topbar */}
        <div className={styles.topbar}>
         
        <div className={styles.heroContainer}>
  <img
    src="Frame.png"
    alt="cemetery of coins"
    className={styles.heroicon}
  />
  
</div>
          

 

</div>
        {/* Background Video */}
        <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className={styles.heroVideo}
  onClick={() => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }}
>
  <source src="Binanster.MP4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        



        



        

        {/* Countdown */}
        <div className={styles.countdown}>
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const values = [
              timeLeft.days,
              timeLeft.hours,
              timeLeft.minutes,
              timeLeft.seconds,
            ];
            const formatTime = (num) => String(num ?? 0).padStart(2, "0");
            let extraLabel = "—";
            if (label === "Days") extraLabel = "MVP Launch";
            if (label === "Seconds") extraLabel = "BSC Chain";

            return (
              <div key={label} className={styles.timeBox}>
                <p
                  className={`${styles.extraLabel} ${
                    extraLabel === "—" ? styles.hiddenLabel : ""
                  }`}
                >
                  {extraLabel}
                </p>
                <div className={styles.timeIconWrapper}>
                  <img src="Box.png" alt={label} className={styles.timeIcon} />
                  <span className={styles.timeValue}>
                    {formatTime(values[i])}
                  </span>
                </div>
                <p>{label}</p>
              </div>
            );
          })}
        </div>

        {/* Subtitle */}
        <h1 className={styles.subtitle}>
         Where Influence Meets The Blockchain
        </h1>
        <p className={styles.ticker}>The meme coin powered by the people who move culture</p>

        {/* Contract Copy Button */}
        <div className={styles.contractWrapper}>
          <button onClick={handleCopy} className={styles.contractButton}>
            Soon Token Address
          </button>
          {copied && <span className={styles.copiedText}>¡Contract Copied!</span>}
        </div>

        {/* Socials */}
        <div className={styles.socials}>
          <p className={styles.name}>Binanster</p>
          <div className={styles.icons}>
            <Link href="#" target="_blank">
              <Dexscreener className={styles.icon} />
            </Link>
            <Link href="https://x.com/binanster?s=21" target="_blank">
              <AkarIconsXFill className={styles.icon} />
            </Link>
            <Link href="#" target="_blank">
              <BxBxlTelegram className={styles.icon} />
            </Link>
            <Link href="#" target="_blank">
              <Paper className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

}

