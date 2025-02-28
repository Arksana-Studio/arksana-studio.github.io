"use client";
import { motion } from "framer-motion";

export default function MovingLogo() {
  const items = [
    { src: "/kotlin-logo/Kotlin Monochrome Logo White RGB.svg", delay: 0 },
    {
      src: "/nextjs-logo/dark-background/nextjs-logotype-dark-background.svg",
      delay: 1.5,
    },
    { src: "/flutter/lockup_flutter_horizontal_solid.svg", delay: 3 },
  ];

  return (
    <div className="mt-4">
      <div className="card-glass flex items-center justify-center rounded-lg px-4 py-1 text-center">
        <span className="text-xs text-white">Tech we use</span>
      </div>

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
              duration: 5.6,
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