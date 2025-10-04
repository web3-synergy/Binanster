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
        title: "Binanster Whitepaper",
        label: "Feature One",
        desc: "Binanster is a revolutionary DeFi utility project built on Binance Smart Chain (BSC), inspired by Solana's Sol Incinerator but tailored for BSC's vibrant ecosystem. We empower users to reclaim value from worthless dust meme coins",
        icon: <Whitepaper  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 2,
        title: "Dust Incinerator",
        label: "Feature Two",
        desc: "Scan and burn micro-balance meme coins from your BSC wallet, permanently removing spam tokens and reducing on-chain clutter for a sleeker portfolio.",
        icon: <Flag  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 3,
        title: "Slot Machine Casino",
        label: "Feature Three",
        desc: "Wager your dust holdings on provably fair, RNG-powered slots themed around meme coin chaos; winners claim $BINANSTER rewards or BNB prizes.",
        icon: <Slot  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 4,
        title: "Pair Discovery Scanner",
        label: "Feature Four",
        desc: "Use $BINANSTER to unlock an AI-driven tool that scans BSC DEXes (like PancakeSwap) for emerging liquidity pairs, spotting high-potential meme coin launches before they moon.",

        icon: <Card  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 5,
        title: "Aster Perp Integration",
        label: "Feature Four",
        desc: "Stake $BINANSTER for boosted yields on Aster's perpetual DEX, enabling leveraged trading of meme assets with reduced fees and enhanced oracle accuracy.",

        icon: <Aster  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 6,
        title: "Referral Burn Rewards",
        label: "Feature Four",
        desc: "Invite friends to incinerate dust and earn $BINANSTER airdrops; a portion auto-burns to community-driven supply reduction.",

        icon: <Solar  />,
        img: "/assets/img/landingPage/paper.PNG",
    },
    {
        id: 7,
        title: "Wallet Recovery Mode ",
        label: "Feature Four",
        desc: "Reclaim locked BNB from closed token accounts post-incineration, mimicking rent refunds but optimized for BSC's gas-efficient burns.",
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


