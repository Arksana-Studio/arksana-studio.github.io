"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import BackgroundBlurMesh from "../BackgroundBlurMesh";
import { Button } from "../ui/button";
import MovingLogo from "./MovingLogo";
import { appConfig } from "../../configs/AppConfig";

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
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  const style = {
    height: "48rem",
  };
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
              url="tsparticles.json"
            />
          )}
        </div>
        {/* Content */}
        <div
          id={"hero"}
          style={style}
          className="z-15 container mx-auto flex max-w-3xl flex-col items-center justify-center text-center"
        >
          <div className="card-glass flex items-center justify-center rounded-lg px-4 py-1 text-center">
            <img
              src="/logo/arksana_studio_logo.png"
              className="m-1 mr-2 h-6 w-6"
            />
            <span className="text-xs text-white">
              Arksana - Your Tech Solution Partner
            </span>
          </div>
          <br></br>
          <h1 className="text-5xl font-bold text-white">
            Empowering Businesses with Smart Digital Solutions
          </h1>
          <br></br>
          <p className="max-w-sm text-xl opacity-80">
            We create modern, fast, and user-friendly digital experiences
          </p>
          <div className="my-8 flex gap-4">
            <Button
              onClick={() => window.open(appConfig.linkContact, "_blank")}
            >
              Let's Talk
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See What We Do
            </Button>
          </div>
          <MovingLogo />
        </div>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center"></div>
    </div>
  );
};

export default HeroSection;