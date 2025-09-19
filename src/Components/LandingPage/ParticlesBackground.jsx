"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // load slim bundle
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div
      style={{
        position: "fixed", // fixed keeps it behind no matter where you scroll
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // always behind content
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: "#B780FF" },
            links: {
              color: "#B780FF",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 70, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}