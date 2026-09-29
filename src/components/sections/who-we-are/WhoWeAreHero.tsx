import * as motion from "motion/react-client";
import { fadeUp, imageSettle, revealFromLeft, stagger } from "@/lib/animations";

const NBSP = " ";

export default function WhoWeAreHero() {
  return (
    <main className="main">
      <motion.div className="container" variants={stagger(0.2)} initial="hidden" animate="visible">
        <motion.h1 className="main_title" variants={fadeUp}>
          Who we are?
        </motion.h1>
        <motion.h2 className="main_description general_text" variants={fadeUp}>
          <span className="gold_word">Goodwill Capital</span> is a{NBSP}fund created by{NBSP}a{NBSP}team of{NBSP}investment
          professionals with{NBSP}over 25 years of experience in{NBSP}venture capital and{NBSP}private equity.
        </motion.h2>
        <motion.div className="main_img" variants={revealFromLeft}>
          <motion.img src="/img/who-we-are/main_img.png" alt="Who we are?" variants={imageSettle} />
        </motion.div>
      </motion.div>
    </main>
  );
}
