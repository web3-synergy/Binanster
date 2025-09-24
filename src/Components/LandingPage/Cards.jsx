'use client'
import React, { useEffect, useRef, useState } from 'react';
import { IcBaselineImage } from '../icons/IcBaselineImage';
import styles from './Cards.module.css';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const classes = ['middle', 'left', 'right'];

// Card data
const cardData = [
    {
        step: 1,
        title: "Token Launch",
        description: "Finalize website, develop and audit smart contracts, run a marketing campaign, and launch the token.",
        image: <IcBaselineImage />
    },
    {
        step: 2,
        title: "Hackathon",
        description: "Participate in hackathon to drive platform innovation, secure sponsors, developers, and win rewards.",
        image: <IcBaselineImage />
    },
    {
        step: 3,
        title: "Platform Launch",
        description: "Complete platform development, test for functionality and security, release a beta version, and launch officially with a go-to-market strategy.",
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
        }, { threshold: 0.1 });

        cardRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const handleClick = (direction) => {
        const newActive = active + direction;
        if (newActive < 1 || newActive > cardData.length) return;

        const oldActive = active;
        const oldCard = cardRefs.current[oldActive - 1];
        const newCard = cardRefs.current[newActive - 1];

        if (oldCard) oldCard.classList.add(styles.exitActive);

        setTimeout(() => {
            setActive(newActive);

            cardRefs.current.forEach((card, index) => {
                if (!card) return;

                if (index === oldActive - 1) {
                    card.style.transition = "1s";
                    card.style.transform = `translateX(-${(oldActive - 1) * 100}%) scale(0.3)`;
                    card.style.opacity = 0;
                } else if (index === newActive - 1) {
                    card.style.transition = "1s";
                    card.style.transform = `translateX(-${(newActive - 1) * 100}%) scale(1)`;
                    card.style.opacity = 1;
                } else {
                    card.style.transition = "1s";
                    card.style.transform = `translateX(-${(newActive - 1) * 100}%)`;
                    card.style.opacity = 0.5;
                    card.classList.remove(styles.exitActive);
                }
            });

            if (newCard) newCard.classList.add(styles.inView);
        }, 500);
    };

    return (
        <div className='container-lg'>
            <div className={`mb-4 ${styles.intro}`}>
                <h1>PROJECT ROADMAP</h1>
                <p>Burn the past, build the future with us.</p>
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

            <div className='d-flex d-sm-none justify-content-end align-items-center' style={{ columnGap: '10px' }}>
                <div
                    className={`${styles.stepper} ${active === 1 ? styles.disabled : ''}`}
                    onClick={() => handleClick(-1)}
                >
                    <GoArrowLeft className={styles.iconStep} />
                </div>
                <div
                    className={`${styles.stepper} ${active === cardData.length ? styles.disabled : ''}`}
                    onClick={() => handleClick(+1)}
                >
                    <GoArrowRight className={styles.iconStep} />
                </div>
            </div>
        </div>
    );
}

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