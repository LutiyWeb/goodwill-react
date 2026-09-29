import * as motion from "motion/react-client";
import { fadeUp, imageSettle, revealFromLeft, stagger } from "@/lib/animations";

export default function InvestorsHero() {
  return (
    <main className="main">
      <motion.div className="container" variants={stagger(0.2)} initial="hidden" animate="visible">
        <motion.h1 className="main_title" variants={fadeUp}>
          FOR INVESTORS
        </motion.h1>
        <motion.h2 className="main_offer general_text" variants={fadeUp}>
          <span className="gold_word">We offer opportunities for private investors</span> to take part in the formation
          of sponsorship capital in promising <br />
          SPAC projects.
        </motion.h2>
        <motion.div className="main_img" variants={revealFromLeft}>
          <motion.img src="/img/for-investors/main_img.png" alt="FOR INVESTORS" variants={imageSettle} />
        </motion.div>
      </motion.div>
    </main>
  );
}
