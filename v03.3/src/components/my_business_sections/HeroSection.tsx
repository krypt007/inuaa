"use client";

import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="z-10 relative overflow-hidden bg-stars flex justify-center flex-col items-center bg-cover bg-no-repeat w-full h-screen">
      <div>My Businesses List</div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, x: 0 }}
        className="absolute -right-[21rem] bottom-0 -z-10"
      >
        <img src="/images/hero_shape_2.png" alt="hero ball shape" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
