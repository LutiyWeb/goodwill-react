import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, imageSettle, revealFromRight, stagger } from "@/lib/animations";

const PARTNERS = [
  {
    heading: "General Partners (GP)",
    text: "Investment professionals who are responsible for decision making on financing projects and any company transactions. They manage the business and take over all operational activities",
  },
  {
    heading: "Limited Partners (LP)",
    text: "Provide financing for the company and participate in its management",
  },
];

export default function Organization() {
  return (
    <section className="organizaition">
      <div className="container">
        <motion.span className="general_title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          ORGANIZATION CHART
        </motion.span>
        <motion.div className="organizaition_content d-flex" initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.div className="org_text_col" variants={stagger(0.15)}>
            <motion.h2 className="org_main_text general_text" variants={fadeUp}>
              <span className="gold_word">Goodwill Capital</span> is registered in Canada as a Limited Partnership (LP).
            </motion.h2>
            <motion.p className="org_info_list_title" variants={fadeUp}>
              The structure of the fund includes general partners (GP) and limited partners (LP).
            </motion.p>
            <div className="org_info_list">
              {PARTNERS.map((item) => (
                <motion.div key={item.heading} className="org_info_list_item" variants={fadeUp}>
                  <p className="org_info_list_item_heading">{item.heading}</p>
                  <p className="org_info_list_item_text">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="org_img_col" variants={revealFromRight}>
            <motion.img src="/img/who-we-are/organization_image.jpg" alt="ORGANIZATION CHART" variants={imageSettle} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
