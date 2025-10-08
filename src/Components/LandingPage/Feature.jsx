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
        title: "The Meme That Started It All",
        desc: "Every empire begins with a meme. Binanster celebrates the spark that made the internet laugh — and never stopped echoing through crypto history.",
        icon: <Whitepaper />, // 📜 Origin / Story
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 2,
        title: "From Joke to Movement",
        desc: "What began as pure internet chaos became a culture. The joke caught fire — and now, it’s a worldwide meme revolution powered by believers.",
        icon: <Flag />, // 🚩 Movement / Rebellion
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 3,
        title: "Powered by the People",
        desc: "No founders. No rulers. Just the crowd. Every holder is part of the meme machine — where virality decides value and the internet runs the show.",
        icon: <Aster />, // ⭐ People Power / Energy
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 4,
        title: "Meme the System",
        desc: "Forget fighting the system — we’ll just meme it until it breaks. Humor is our weapon, and the blockchain is our stage.",
        icon: <Card />, // 🧱 Rebellion / Disruption
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 5,
        title: "Laugh to Earn",
        desc: "No charts, no stress — just laughs, vibes, and viral wins. In the Binanster world, comedy is currency and memes are market movers.",
        icon: <Slot />, // 🎰 Chaos / Luck / Fun
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 6,
        title: "For the Meme Lords and Dreamers",
        desc: "For the OGs who made memes an art form — and the dreamers who turned them into movements. The throne is open to all who laugh the loudest.",
        icon: <Solar />, // 🌞 Creativity / Dreamers
        img: "/assets/img/landingPage/paper.PNG",
      },
      {
        id: 7,
        title: "The People’s Meme Coin",
        desc: "No gates. No kings. No corporate suits. Just the internet’s coin — owned by the people, powered by memes, and ruled by fun.",
        icon: <Wallet />, // 👛 Accessibility / Community
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


