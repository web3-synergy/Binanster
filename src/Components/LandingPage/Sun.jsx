'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Sun = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            controls.start({
                x: scrollPosition * 0.8, // Move to the right
                y: -scrollPosition * 0.8, // Move down
                boxShadow: `${scrollPosition * 0.1}px ${scrollPosition * 0.1}px 50px 15px rgba(255, 177, 120, 0.5)`,
                transition: { type: 'spring', stiffness: 50, damping: 20 },
            });
        };

        controls.start({
            x: 0,
            y: 0,
            boxShadow: '0px 4px 50px 15px rgba(255, 177, 120, 0.5)',
            transition: { duration: 3, ease: 'easeInOut' }
        });

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <motion.div
            className="sun"
            style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(170.74deg, #80D1FC 19.43%, #ECCC30 87.37%)',
                borderRadius: '50%',
                position: 'fixed',
                top: '20%',
                right: '7%',
                transform: 'translateY(-50%)',
                zIndex: 2, // Ensure it's on top
                boxShadow: '0px 4px 50px 15px rgba(255, 177, 120, 0.5)', // Initial boxShadow
            }}
            animate={controls}
        />
    );
};

export default Sun;
