"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Animation variants can be exported if needed by other components
export const itemVariants = {
    hidden: { 
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
      },
    },
  };

// Separate Clock into client component
export default function Clock() {
  // Start with empty string to avoid hydration mismatch
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
    // Set initial time
    setTime(
      new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour12: false,
      })
    );

    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't show anything until client-side
  if (!mounted) return null;

  return (
    <motion.div variants={itemVariants} className="font-mono">
      <span className="text-[12px] text-[#76777F]">seattle</span>{" "}
      <span className="text-[12px] text-[#76777F]">washington</span>{" "}
      <span className="text-[12px] text-[#76777F]">{time}</span>
    </motion.div>
  );
};
