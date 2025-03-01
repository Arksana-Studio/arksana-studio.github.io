"use client";
import { motion } from "framer-motion";
import LabelText from "../LabelText";

export default function MovingLogo() {
  const items = [
    { src: "/kotlin-logo/Kotlin Monochrome Logo White RGB.svg", delay: 0 },
    {
      src: "/nextjs-logo/dark-background/nextjs-logotype-dark-background.svg",
      delay: 3,
    },
    { src: "/flutter/lockup_flutter_horizontal_solid.svg", delay: 6 },
  ];

  return (
    <div className="mt-4">

      <LabelText text={"Tech We Use"}/>

      <div className="flex h-24 w-full select-none flex-row items-center justify-center overflow-hidden">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="absolute flex flex-row items-center"
            initial={{ x: "-200%", opacity: 0 }}
            animate={{
              x: "200%",
              opacity: [0, 1, 1, 0],
              scale: [0.75, 1, 1, 0.75],
            }}
            transition={{
              duration: 9,
              ease: "easeInOut",
              easings: [1, 0.3, 0.3, 1],
              repeat: Infinity,
              repeatType: "loop",
              delay: item.delay,
            }}
          >
            <img src={item.src} alt="Logo" className="h-24 w-24" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}