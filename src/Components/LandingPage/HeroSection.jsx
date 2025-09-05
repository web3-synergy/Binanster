'use client';
import React, { useEffect, useRef } from "react";
import { color, motion, useAnimation } from 'framer-motion';
import styles from "./HeroSection.module.css";


export default function HeroSection() {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY;
                    const scaleValue = 1 - scrollPosition * 0.0005; // Reduced scale factor for smoother effect

                    controls.start({
                        scale: Math.max(scaleValue, 0.7), // Prevent scaling below 0.7 for a more subtle effect
                        
                        transition: { duration: 0.6, ease: "easeOut" }, // Smoother transition
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
                        controls.start({ opacity: 5, scale: 1, transition: { duration: 1, ease: "easeOut" } });
                    } else {
                        controls.start({ opacity: 5, transition: { duration: 1, ease: "easeInOut" } });
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
        <div ref={ref} className={`container-fluid d-flex justify-content-center align-items-center ${styles.heroSection}`}>
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={controls}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center"
            >
                <img src="meme.PNG" alt="meme" />
                
                <h1 className="display-4">Welcome to Nothing Coin</h1> <br />
                <p >The ultimate meme coin strategy for long-term holding. Hodl, do not trade & Bullpost</p>
                <a href="/" className={styles.heroLink}>
                  <button className={`btn ${styles.heroButton}`}>
                    <span>Buy Nothing</span>
                  </button>
                </a>
            </motion.div>
        </div>
    );
}
