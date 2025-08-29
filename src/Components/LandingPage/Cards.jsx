'use client'
import React, { useEffect, useRef, useState } from 'react';
import { IcBaselineImage } from '../icons/IcBaselineImage';
import styles from './Cards.module.css';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const classes = ['middle', 'left', 'right'];

// 🔹 Step 1: Different card data
const cardData = [
    {
        step: 1,
        title: "Buy with conviction",
        description: "Only buy if you're prepared to hold long-term. No panic. No chasing. Just patience.",
        image: <IcBaselineImage />
    },
    {
        step: 2,
        title: "Bull Post  & Share Vision",
        description: "Create content, share memes, and spread the word. Hype with purpose — help shape the future of the coin.",
        image: <IcBaselineImage />
    },
    {
        step: 3,
        title: "Let Time Teach You",
        description: "Track your own journey. Learn about long-term investing through your results — wins, losses, and everything in between.",
        image: <IcBaselineImage />
    }
];

export default function Cards() {
    const cardRefs = useRef([]);
    const [active, setActive] = useState(1);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.inView);
                } else {
                    entry.target.classList.remove(styles.inView);
                }
            });
        }, {
            threshold: 0.1
        });

        const currentRefs = cardRefs.current;
        currentRefs.forEach(ref => observer.observe(ref));

        return () => {
            currentRefs.forEach(ref => observer.unobserve(ref));
        };
    }, []);

    const handleClick = (direction) => {
        const newActive = active + direction;
        const oldActive = active;
        if (newActive >= 1 && newActive <= 3) {
            cardRefs.current[active - 1].classList.add(styles.exitActive);

            setTimeout(() => {
                setActive(newActive);

                cardRefs.current.forEach((card, index) => {
                    if (index === oldActive - 1 && direction === +1) {
                        card.style.transitionDuration = "1s";
                        card.style.transform = `translateX(-${(oldActive - 1) * 100}%) scale3d(0.3, 0.3, 0.3)`;
                        card.style.opacity = 0;
                    } else if (index === newActive - 1 && direction === -1) {
                        card.style.transitionDuration = "1s";
                        card.style.transform = `translateX(-${(newActive - 1) * 100}%) scaleX(1)`;
                        card.style.opacity = 1;
                    } else {
                        if (index > newActive - 1 && direction === -1) {
                            card.classList.remove(styles.exitActive);
                            card.style.transform = `translateX(-${(newActive - 1) * 100}%)`;
                            card.style.transitionDuration = "1s";
                        }
                        if (index > oldActive - 1 && direction === +1) {
                            card.classList.remove(styles.exitActive);
                            card.style.transform = `translateX(-${(newActive - 1) * 100}%)`;
                            card.style.transitionDuration = "1s";
                        }
                    }
                });

                cardRefs.current[newActive - 1].classList.add(styles.inView);
            }, 500);
        }
    };

    return (
        <div className='container-lg'>
            <div className={`mb-4 ${styles.intro}`}>
                <h1>The Nothing Strategy</h1>
                <p>Sometimes doing nothing is the smartest move.</p>
            </div>

            <div className='position-relative'>
                <div className={styles.wrapper}>
                    {cardData.map((item, i) => (
                        <div
                            key={item.step}
                            className={`${styles.card} ${styles[classes[i]]}`}
                            ref={el => cardRefs.current[i] = el}
                        >
                            <Card {...item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='d-flex d-sm-none justify-content-start align-items-center' style={{ columnGap: '10px' }}>
                <div
                    className={`${styles.stepper} ${active === 1 ? styles.disabled : ''}`}
                    onClick={() => handleClick(-1)}
                    disabled={active === 1}
                >
                    <GoArrowLeft className={styles.iconStep} />
                </div>
                <div
                    className={`${styles.stepper} ${active === 3 ? styles.disabled : ''}`}
                    onClick={() => handleClick(+1)}
                    disabled={active === 3}
                >
                    <GoArrowRight className={styles.iconStep} />
                </div>
            </div>
        </div>
    );
}

// 🔹 Step 2: Updated Card component
function Card({ step, title, description, image }) {
    return (
        <div className={styles.cardC}>
            <div className={styles.triangle}></div>
            <h2 className={styles.stepNumber}>{step}</h2>
            <div className={styles.imageHolder}>
                <h1 className={styles.stepTitle}>{title}</h1>
                <div className={styles.image}>{image}</div>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
}