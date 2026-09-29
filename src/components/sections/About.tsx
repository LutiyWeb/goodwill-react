import * as motion from "motion/react-client";
import Button from "@/components/ui/Button";
import { VIEWPORT, fadeUp, imageSettle, revealFromLeft, stagger } from "@/lib/animations";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <motion.div variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.span className="about_title general_title" variants={fadeUp}>
            about us
          </motion.span>
          <motion.div className="title_text_wrapper" variants={fadeUp}>
            <h2 className="title_text about_title_text">
              <span className="gold_text">Goodwill Capital</span> is a private equity fund that finance promising
              private businesses with special purpose acquisition companies (SPACs) on the NASDAQ and NSYE markets .
            </h2>
          </motion.div>
        </motion.div>
        <motion.div className="about_info d-flex" initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.div className="about_info_img" variants={revealFromLeft}>
            <motion.img src="/img/about_image.jpg" alt="" variants={imageSettle} />
          </motion.div>
          <motion.div className="about_info_text_wrapper" variants={stagger(0.2, 0.3)}>
            <motion.p className="about_info_text_up about_info_text" variants={fadeUp}>
              The basis of our success is a team of international specialists and partners <br /> in the field of
              investment, finance and law.
            </motion.p>
            <motion.p className="about_info_text_down about_info_text" variants={fadeUp}>
              Our international presence, global vision and expertise enable us to maintain high rates of return
              with controlled risk.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/who-we-are" className="about_info_text_btn">
                Learn more
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
