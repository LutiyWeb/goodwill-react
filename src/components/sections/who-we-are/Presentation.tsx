import * as motion from "motion/react-client";
import Button from "@/components/ui/Button";
import { VIEWPORT, fadeUp, imageSettle, revealFromRight, stagger } from "@/lib/animations";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="container">
        <motion.div className="presentation_content d-flex" initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.div className="presentation_content_text" variants={stagger(0.15)}>
            <motion.h2 className="presentation_title general_text" variants={fadeUp}>
              Download the Goodwill Capital presentation
            </motion.h2>
            <motion.p className="download_text" variants={fadeUp}>
              Download Goodwill Capital&apos;s presentation
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="#">Download</Button>
            </motion.div>
          </motion.div>
          <motion.div className="presentation_content_img" variants={revealFromRight}>
            <motion.img
              src="/img/who-we-are/presentation_img.jpg"
              alt="Download Goodwill Capital's presentation"
              variants={imageSettle}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
