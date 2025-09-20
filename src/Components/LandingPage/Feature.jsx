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
        title: "Whitepaper",
        label: "Feature One",
        desc: "Cemetery of Coins is a memecoin and platform that acknowledges the brutal reality of the crypto market—most coins fail. Instead of ignoring this, the project embraces it, offering a symbolic and practical cemetery where users can burn their worthless tokens, gain insights, and access tools to succeed in future trades or launches. The token powers a platform that provides utilities for traders, project creators, and community members, fostering resilience and opportunity in a volatile market.",
        icon: <Git className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 2,
        title: "Dust to Rewards",
        label: "Feature Two",
        desc: "Allow users to burn their dust (worthless or low-value tokens) in the Cemetery of Coins platform to receive benefits, such as tokens, platform fees, solanas or other rewards.",
        icon: <EmojioneMonotoneChains className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 3,
        title: "Dust and Dreams",
        label: "Feature Three",
        desc: "Turn the act of burning dust tokens into a fun, rewarding experience with a slot machine or lottery system, where users can win spin tickets earned from burning.",
        icon: <SolarSledgehammerBold className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 4,
        title: "Volume Bot",
        label: "Feature Four",
        desc: "Provide a premium tool for memecoin project creators to boost their token launches, accessible only to token platform olders who meet a minimum token threshold and time holding.",

        icon: <MdiAlarmLight className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 5,
        title: "Boost Token",
        label: "Feature Four",
        desc: "A platform feature where users can access real-time market insights or promote their favorite tokens, powered by cemetery of coins platform.",

        icon: <Overtrading className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 6,
        title: "Bag Workers Team",
        label: "Feature Four",
        desc: "A decentralized marketplace where users can hire crypto experts (e.g., developers, marketers, community managers) to support their projects, paid in platform tokens.",

        icon: <MdiRecycle className={styles.icon} />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 7,
        title: "Tombstone NFTs ",
        label: "Feature Four",
        desc: "Unique NFTs minted when users burn tokens, serving as collectibles or proof of participation. These could have utility, such as unlocking premium features or staking rewards.",
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


