"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import BackgroundBlurMesh from "../BackgroundBlurMesh";
import { Button } from "../ui/button";

const HeroSection = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 1,
          random: true,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
    }),
    [],
  );

  return (
    <div
      className="hero-section relative flex h-screen w-full flex-col"
      id="hero-section"
    >
      {/*Background mesh, particles, content stacking here
       */}
      <div id={"particle"} className="grid">
        <div className={"absolute -z-30 w-full"}>
          <BackgroundBlurMesh></BackgroundBlurMesh>
        </div>
        <div className={"absolute -z-20 w-full"}>
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
          )}
        </div>
        {/* Content */}
        <div
          id={"hero"}
          className="z-15 container mx-auto flex flex-col items-center justify-center text-center"
        >
          <div className="card-glass px-4 py-1 rounded-lg">
            <span className="text-xs text-white">Welcome to Arksana Studio</span>
          </div>
          <br></br>
          <h1 className="text-4xl font-bold text-white">
            Welcome to Arksana Studio
          </h1>
          <p className="text-lg text-white">
            We are a creative studio that focuses on design and development
          </p>
          <div className={"mt-4 flex gap-4"}>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center"></div>
    </div>
  );
};

export default HeroSection;