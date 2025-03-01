"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import BackgroundBlurMesh from "../../components/BackgroundBlurMesh";
import { Button } from "../../components/ui/button";
import MovingLogo from "../../components/home/MovingLogo";
import { appConfig } from "../../configs/AppConfig";
import LabelText from "../../components/LabelText";
import { Button as GlassButton } from "../../components/home/GlassButton";

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
  const onLetsChat = () => {
    window.open(appConfig.linkContact, "_blank");
  };

  const onSeeWhatWeDo = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };
  const style = {
    height: "40rem",
  };
  return (
    <div
      aria-label={"Home"}
      className="hero-section relative flex w-full flex-col sections"
      id="hero-section"
    >
      <div id={"particle"} className="grid">
        <div className={"absolute -z-30 w-full"}>
          <BackgroundBlurMesh></BackgroundBlurMesh>
        </div>
        <div className={"absolute -z-20 w-full"}>
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              url="tsparticles.json"
            />
          )}
        </div>
        <div
          id={"hero"}
          style={style}
          className="z-15 container mx-auto flex max-w-3xl flex-col items-center pt-40"
        >
          <LabelText
            text="Arksana - Your Tech Solution Partner"
            image={appConfig.logo}
          />
          <br></br>
          <h1 className="mx-2 text-5xl font-bold text-white">
            Empowering Businesses with Smart Digital Solutions
          </h1>
          <p className="mx-2 mt-4 max-w-sm text-xl opacity-80">
            Experience seamless, scalable technology tailored to drive your
            success
          </p>
          <div className="my-8 flex gap-4">
            <Button onClick={onLetsChat}>Let's Talk</Button>
            <GlassButton variant="outline" onClick={onSeeWhatWeDo}>
              See What We Do
            </GlassButton>
          </div>
          <MovingLogo />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;