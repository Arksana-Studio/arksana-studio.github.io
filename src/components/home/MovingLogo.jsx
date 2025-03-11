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
    <div className="mt-4 flex w-full flex-col items-center overflow-hidden">
      <LabelText text={"Tech We Use"} className={"place-self-center"} />
      <div className="relative h-20 w-full overflow-hidden">
        <div className="absolute flex h-20 w-full items-center justify-center">
          {items.map((item, index) => (
            <motion.div
              className={"absolute -translate-x-1/2"}
              key={index}
              initial={{
                opacity: 0,
                x: "-150%",
                scale: 0.75,
                animationDelay: `${item.delay}s`,
              }}
              animate={{
                opacity: [0, 1, 1, 1, 0],
                x: "150%",
                scale: [0.75, 1, 1, 0.75],
              }}
              transition={{
                delay: item.delay,
                repeat: Infinity,
                duration: 9,
                easings: "easeInOut",
                repeatType: "loop",
              }}
            >
              <img src={items[index].src} alt="Logo" className="h-24 w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}