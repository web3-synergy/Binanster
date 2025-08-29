'use client'
import React, { useEffect, useState } from 'react';
import './Meteor.css';

const Meteor = () => {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const styles = ["style1", "style2", "style3", "style4", "style5", "style6"];
        const colors = ["#fff", "#fff", "#fff", "#ff7225"]; // More white meteors

        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        const generateMeteor = () => {
            const newMeteors = [];
            const meteorCount = getRandomArbitrary(2, 4); // Randomly choose 2 or 3 meteors

            for (let i = 0; i < meteorCount; i++) {
                newMeteors.push({
                    style: styles[getRandomArbitrary(0, styles.length)],
                    color: colors[getRandomArbitrary(0, colors.length)]
                });
            }

            setMeteors(newMeteors);
            setTimeout(() => setMeteors([]), 7000); // Match the animation duration
        };

        const meteorInterval = setInterval(generateMeteor, getRandomArbitrary(5000, 10000));

        return () => clearInterval(meteorInterval);
    }, []);

    return (
        <div className="chuvaMeteoro">
            {meteors.map((meteor, index) => (
                <div
                    key={index}
                    className={`meteoro ${meteor.style}`}
                    style={{ backgroundColor: meteor.color }}
                ></div>
            ))}
            {meteors.map((meteor, index) => (
                <div
                    key={index}
                    className={`meteoro2 ${meteor.style}`}
                    style={{ backgroundColor: meteor.color }}
                ></div>
            ))}
        </div>
    );
};

export default Meteor;
