"use client";
import { LoginButton } from "../consts/LoginButton";

import React from "react";
import { motion } from "framer-motion";

export const GatedContent = () => {
  return (
    

    <section className="z-10 relative overflow-hidden bg-stars flex justify-center flex-col items-center bg-cover bg-no-repeat w-full h-screen">
    <div>My Businesses List</div>
    <div className="flex flex-col">
      <div className="mx-auto">
        <LoginButton />
      </div>
      <div className="text-center mt-12">
        Welcome, stranger. Only a selected few can see this message. You are
        rare!
      </div>
    </div>

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
};
