"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { EASE_OUT } from "@/lib/animations";

const SLOGAN_WORDS = "Your growth is our passion".split(" ");

const offerVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.3, staggerChildren: 0.4 } },
};

const logoVariants: Variants = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 1.2, ease: EASE_OUT } },
};

const sloganVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE_OUT } },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: EASE_OUT } },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const offerY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const offerOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main ref={heroRef} className="main">
      <motion.div
        className="main_bg"
        style={{ y: bgY }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: EASE_OUT }}
      />
      <div className="ovarlay"></div>
      <div className="container">
        <motion.div
          className="offer"
          style={{ y: offerY, opacity: offerOpacity }}
          variants={offerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="offer_logo_mask">
            <motion.img src="/img/offer_text.svg" alt="" className="offer_logo" variants={logoVariants} />
          </div>
          <motion.h2 className="description_text" variants={sloganVariants}>
            {SLOGAN_WORDS.map((word, index) => (
              <motion.span key={index} className="offer_word" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.span className="offer_line" variants={lineVariants} />
        </motion.div>
      </div>
    </main>
  );
}
