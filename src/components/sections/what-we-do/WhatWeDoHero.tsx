import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, imageSettle, revealFromLeft, stagger } from "@/lib/animations";

export default function WhatWeDoHero() {
  return (
    <main className="main">
      <div className="container">
        <motion.div variants={stagger(0.2)} initial="hidden" animate="visible">
          <motion.h1 className="main_title" variants={fadeUp}>
            WHAT WE DO?
          </motion.h1>
          <motion.h2 className="main_offer general_text" variants={fadeUp}>
            Our investment priority - <span className="gold_word">SPAC</span>
          </motion.h2>
          <motion.div className="main_img" variants={revealFromLeft}>
            <motion.img src="/img/what-we-do/main_img.png" alt="WHAT WE DO?" variants={imageSettle} />
          </motion.div>
        </motion.div>
        <motion.h2
          className="main_description general_text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <span className="gold_word">SPAC</span> is a special purpose acquisition company that replaces traditional
          IPOs and{" "}accelerates the listing process, reducing risks and increasing profits.
        </motion.h2>
      </div>
    </main>
  );
}
