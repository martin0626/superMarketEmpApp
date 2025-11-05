import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView} from "framer-motion";

interface AnimatedOnScrollProps {
  children: React.ReactNode;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "scale-up"
    | "rotate-in";
  delay?: number; // in ms
  duration?: number; // in seconds
  className?: string;
}

export default function AnimatedOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
}: AnimatedOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // 👇 Observe every time (no `once: true`)
  const inView = useInView(ref, { margin: "-50px" });

  const controls = useAnimation();

  // 👇 Play animation each time element enters or leaves viewport
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "fade-up" ? 40 : animation === "fade-down" ? -40 : 0,
      x: animation === "fade-left" ? -140 : animation === "fade-right" ? 140 : 0,
      scale: animation === "scale-up" ? 0.85 : 1,
      rotate: animation === "rotate-in" ? -6 : 0,
      transition: {
        duration: duration / 2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants as any}
    >
      {children}
    </motion.div>
  );
}
