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
        title: "The First Influencer Economy",
        label: "Feature One",
        desc: "We believe memes are the purest form of digital influence. Binanster transforms meme energy into real financial power — creating the world’s first ecosystem where culture becomes capital, and every holder is both a creator and an influencer.",
        icon: <Whitepaper  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 2,
        title: "From Memes to Movement",
        label: "Feature Two",
        desc: "The First Influencer Meme is not just a joke — it’s a revolution. We’re building a DeFi-powered movement that rewards creativity, virality, and community leadership. Because influence should pay back the people, not the platforms.",
        icon: <Flag  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 3,
        title: "Reviving the Value of Dust",
        label: "Feature Three",
        desc: "Just as the first influencers turned simple trends into empires, Binanster reclaims forgotten dust and worthless tokens, transforming them into yield-generating assets. Nothing in this space should be wasted — not even a meme.",
        icon: <Slot  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 4,
        title: "Decentralized Influence",
        label: "Feature Four",
        desc: "In the old world, influence was centralized — owned by brands, media, and algorithms. Binanster flips that. Our meme-powered DeFi protocol makes influence a shared economy, where your wallet is your voice and your culture has value.",

        icon: <Card  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 5,
        title: "Meme-Fi: Where Culture Meets Capital",
        label: "Feature Four",
        desc: "The next generation of DeFi is not just about numbers — it’s about narratives. Binanster merges the power of memes and financial systems to build Meme-Fi: an economy that runs on community conviction and digital storytelling.",

        icon: <Aster  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 6,
        title: "From Chaos to Creation",
        label: "Feature Four",
        desc: "The meme market may look chaotic, but from chaos comes innovation. Binanster harnesses the volatility of meme coins and channels it into structured, rewarding DeFi utilities that empower every user to create and grow wealth.",

        icon: <Solar  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 7,
        title: "The Origin of Digital Influence ",
        label: "Feature Four",
        desc: "The First Influencer Meme marks a new era — one where influence, humor, and finance fuse into one unstoppable digital force. Binanster is the birthplace of this hybrid culture, leading the charge toward a more playful, profitable web3 world.",
        icon: <Wallet />,
        img: "/assets/img/landingPage/paper.PNG",
    },
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


