'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Clock, { itemVariants } from "@system/Clock";
import Hero from "@system/Hero";
const headerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 150ms delay between each element
      delayChildren: 0.2,    // Initial delay before starting
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.header 
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 sm:px-8 max-w-[1000px] mx-auto w-full backdrop-blur-sm z-50 h-[64px]"
      >
        <motion.div 
          variants={itemVariants}
          className="text-xl font-bold"
        >
          ahkmed.
        </motion.div>
        <Clock />
      </motion.header>
      
      <main className="flex-1 flex flex-col gap-8 items-center sm:items-start mt-[64px] px-6 sm:px-8 py-8 max-w-[1000px] mx-auto w-full">
        <div className="w-full"> 
          <Hero />
        </div>
      </main>
    </div>
  );
}