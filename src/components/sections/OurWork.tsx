import * as motion from "motion/react-client";
import Button from "@/components/ui/Button";
import { VIEWPORT, fadeUp, imageSettle, revealFromRight, stagger } from "@/lib/animations";

export default function OurWork() {
  return (
    <section className="our_work">
      <div className="container">
        <motion.div variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.span className="our_work_title general_title" variants={fadeUp}>
            OUR ACTIVITIES
          </motion.span>
          <motion.div className="title_text_wrapper title_text_wrapper_work" variants={fadeUp}>
            <h2 className="title_text activities_title_text">
              <span className="gold_text">Goodwill Capital</span> provides an opportunity for non-qualified investors
              to participate in the creation of SPAC with part of the required capital.
            </h2>
          </motion.div>
        </motion.div>
        <motion.div className="our_work_info d-flex" initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.div className="our_work_info_text_wrapper info_text_wrapper" variants={stagger(0.2)}>
            <motion.p className="our_work_info_text_up our_work_info_text" variants={fadeUp}>
              Accumulating funds for subsequent investment, the fund acts as a sponsor, organizing a SPAC, for
              which it receives a share in the new company.
            </motion.p>
            <motion.p className="our_work_info_text_down our_work_info_text" variants={fadeUp}>
              Goodwill Capital&apos;s objective is to then exit the equity at the most opportune time.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/what-we-do" className="our_work_info_text_btn">
                Learn more
              </Button>
            </motion.div>
          </motion.div>
          <motion.div className="our_work_info_img" variants={revealFromRight}>
            <motion.img src="/img/what_we_do_image.jpg" alt="" variants={imageSettle} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
