"use client";

import React from "react";
import FeatureCard from "../cards/FeatureCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function FeatureSection() {
  const data = [
    {
      iconUrl: "/images/f_1.png",
      text: "Real Estate",
      description:
        "Invest in Real Estate anytime, anywhere with our safe, secure, and easy to use online platform",
      linkText: "Get Started",
    },
    {
      iconUrl: "/images/f_2.png",
      text: "Startups",
      description:
        "We have thousands of Businesses Looking for Investors. where you can safely invest your capital",
      linkText: "Invest in shares",
    },
    {
      iconUrl: "/images/f_3.png",
      text: "Farms",
      description:
        "Invest in agricultural businesses where you can obtain a decent return at the end of each harvest cycle",
      linkText: "Own a share of the farm",
    },
  ];
  return (
    <section className="relative">
      <motion.div
        variants={customVariants.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-3 gap-[20px] pb-[32px]"
      >
        {data.map((feature, index) => (
          <motion.div variants={customVariants.cardItem} key={index}>
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>

      <div className="hidden md:block absolute bottom-20 -left-20">
        <img src="/images/star_1.png" />
      </div>
      <div className="hidden md:block  -ml-16">
        <img src="/images/star_2.png" />
      </div>
    </section>
  );
}

export default FeatureSection;
