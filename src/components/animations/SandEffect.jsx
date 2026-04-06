import React, { useCallback, useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const SandEffect = ({ trigger, duration = 2000 }) => {
  const [init, setInit] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (trigger && init) {
      setActive(true);
      const timer = setTimeout(() => {
        setActive(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [trigger, init, duration]);

  if (!init || !active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden rounded-3xl">
      <Particles
        id="tsparticles-sand"
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#FFB347", "#FF6B6B", "#ffffff"],
            },
            move: {
              enable: true,
              speed: { min: 2, max: 6 },
              direction: "bottom",
              straight: false,
              outModes: {
                default: "out",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120, // Increase number of particles
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default SandEffect;
