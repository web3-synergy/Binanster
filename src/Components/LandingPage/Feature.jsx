'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';


import { Slot } from '../icons/Slot';

import { Card } from '../icons/Card';


import { Solar } from '../icons/Solar';
import  {Aster} from '../icons/Aster';
import {Wallet} from '../icons/Wallet';
import {Whitepaper} from '../icons/Whitepaper';
import { Flag} from '../icons/Flag';
import styles from './Feature.module.css';
const featureTabs = [
    {
        id: 1,
        title: "The Meme That Started the Influence",
        desc: "Every viral empire starts with one spark. Binanster celebrates the first creators who turned memes into movements — where every post, every laugh, and every share builds power.",
        icon: <Whitepaper />, // 📜 Represents the origin or manifesto of the influencer era
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 2,
        title: "From Joke to Brand",
        desc: "Influence begins with humor — and evolves into legacy. What started as memes has become an unstoppable creator economy driven by community clout.",
        icon: <Flag />, // 🚩 Symbol of evolution — from humor to brand identity
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 3,
        title: "Powered by Creators",
        desc: "This is not just a coin — it’s a creator movement. Every holder becomes an influencer, every meme a message, and every post a piece of the brand.",
        icon: <Aster />, // ⭐ Creator energy — shining stars of the ecosystem
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 4,
        title: "Influence the System",
        desc: "We don’t fight the algorithm — we own it. Binanster flips the digital economy by rewarding engagement and virality directly to the people who create it.",
        icon: <Card />, // 💳 Power / system — flipping traditional influence structures
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 5,
        title: "Engage to Earn",
        desc: "Likes, retweets, and reposts now mean more. In the Binanster world, social activity fuels growth — where engagement turns into influence, and influence into value.",
        icon: <Slot />, // 🎰 Interaction / engagement mechanic
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 6,
        title: "For the Meme Lords and Influencers",
        desc: "Binanster belongs to the ones who move culture — the creators, meme lords, and dreamers who make the internet laugh, think, and trend.",
        icon: <Solar />, // 🌞 Represents shining personalities and influence
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 7,
        title: "The People’s Influence Coin",
        desc: "No managers, no middlemen — just pure influence power in the hands of the crowd. Binanster is the people’s brand, built by the internet, for the internet.",
        icon: <Wallet />, // 👛 Community ownership
        img: "/assets/img/landingPage/paper.PNG",
      }
];

export default function Feature() {
    const [activeTab, setActiveTab] = useState(featureTabs[0]);
    const controls = useAnimation();
    const imgControls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        controls.start({ opacity: 1, y: 0, scale: 1 });
                    } else {
                        controls.start({ opacity: 1, y: 0, scale: 1 });
                    }
                });
            },
            {
                threshold: 0.1
            }
        );
        const element = ref.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [controls]);

    const handleTabClick = (tab) => {
        imgControls.start({ opacity: 0, y: 20, scale: 0.95 }).then(() => {
            setActiveTab(tab);
            imgControls.start({ opacity: 1, y: 0, scale: 1 });
        });
    };

    return (
        
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 2 }}
            className={`container-lg  px-2 `}
        >
            {/* ✅ Section Title */}
          <div className={styles.sectionHeader}>
            <h2>OUR VISION</h2>
            <p></p>
          </div>
            <div className={styles.main}>
            <div className='px-2 px-sm-3 pt-4 pb-2 pb-sm-4'>
                <div className='pb-4'>
                    <div className={`d-flex  flex-column justify-content-start align-items-start ${styles.details}`}>
                        <motion.div
                            className={` w-100`}
                            initial={{ opacity: 1, y: 0, scale: 1 }}
                            animate={imgControls}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                {activeTab.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                {activeTab.desc}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
                </div>

                <div className={`d-flex flex-wrap flex-md-nowrap justify-content-center ${styles.sidebar}`}>
                    <motion.div
                        className={`${styles.img} w-100`}
                        initial={{ opacity: 1, y: 0, scale: 1 }}
                        animate={imgControls}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            key={activeTab.id}  // Add the key here
                            src={activeTab.img}
                            width={'100'}
                            loading='eager'
                            
                            height={'100'}
                            layout='responsive'
                            alt={activeTab.title}
                        />
                    </motion.div>
                    <div>
                        <div className={`pt-4 pt-md-0 d-flex flex-row justify-content-start align-items-start flex-md-column ${styles.btns}`}>
                            {featureTabs.map((tab) => (
                                <button
                                    onClick={() => handleTabClick(tab)}
                                    key={tab.id}
                                    className={activeTab.id === tab.id ? `${styles.active}` : ''}
                                >
                                    {tab.icon}
                                    <span>{tab.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


