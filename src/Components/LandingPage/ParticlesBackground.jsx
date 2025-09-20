"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div
      style={{
        position: "fixed", // stays fixed behind everything
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3, // keep background behind content
        pointerEvents: "none",
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: {
              value: 600,
              density: { enable: true, area: 473 },
            },
            color: { value: "#B780FF" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.3,
              random: false,
              animation: { enable: true, speed: 1, minimumValue: 0, sync: false },
            },
            size: {
              value: 2,
              random: { enable: true, minimumValue: 0.3 },
              animation: { enable: false },
            },
            links: { enable: false }, // no connecting lines
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              random: true,
              straight: false,
              outModes: { default: "out" },
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              onClick: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}