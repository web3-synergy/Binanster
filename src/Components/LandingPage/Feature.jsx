'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { RiDashboardFill } from "react-icons/ri";

import { EmojioneMonotoneChains } from '../icons/EmojioneMonotoneChains';
import { SolarSledgehammerBold } from '../icons/SolarSledgehammerBold';
import { MdiAlarmLight } from '../icons/MdiAlarmLight';
import { HeroiconsMagnifyingGlass16Solid } from '../icons/HeroiconsMagnifyingGlass16Solid';
import { MdiCog } from '../icons/MdiCog';
import { MdiRecycle } from '../icons/MdiRecycle';
import  {Overtrading} from '../icons/overtrading';
import {Post} from '../icons/Post';
import {Git} from '../icons/git';
import styles from './Feature.module.css';
const featureTabs = [
    {
        id: 1,
        title: "The Nothing Paper",
        label: "Feature One",
        desc: "A whitepaper about absolutely Nothing — and everything that matters. No hype, no promises, no roadmap to the moon. Just a simple vision: hold, chill, and learn. This is our manifesto — not a pitch deck.",

        icon: <Git className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 2,
        title: "Why Nothing?",
        label: "Feature Two",
        desc: "Because sometimes doing less does more. Nothing means peace in a market full of noise. We’re not here to chase — we’re here to hold and laugh while doing it.",
        icon: <EmojioneMonotoneChains className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 3,
        title: "The power of holding",
        label: "Feature Three",
        desc: "Time in the market beats timing the market. Patience pays. Holding teaches what no chart can: discipline, mindset, and long-term vision — all wrapped in memes.",

        icon: <SolarSledgehammerBold className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 4,
        title: "Addition: The Gamble Loop",
        label: "Feature Four",
        desc: "When memes turn into slot machines. Endless trading isn’t strategy — it’s gambling. Let’s break the loop and bring back fun without the burnout.",


        icon: <MdiAlarmLight className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 5,
        title: "Overtrading is overrated",
        label: "Feature Four",
        desc: "Chill. Click less. Win more. Most losses come from doing too much. With Nothing, you hold and breathe. Less stress. More clarity.",

        icon: <Overtrading className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 6,
        title: "Do Nothing, Learn Everything",
        label: "Feature Four",
        desc: "Let your portfolio teach you. Real growth comes from experience. Holding through the chaos is the lesson — and the reward.",

        icon: <MdiRecycle className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 7,
        title: "Post Like a Bull ",
        label: "Feature Four",
        desc: "Memes are marketing. Hype is a skill. Community is the engine. Every meme, tweet, and post spreads the message. Bull posting isn’t just noise — it’s how we build culture, attract attention, and make Nothing something worth watching.",
        icon: <Post className={styles.icon} />,
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
            className={`container-lg ${styles.main} px-2 `}
        >
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

