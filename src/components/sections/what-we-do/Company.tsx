import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, imageSettle, revealFromLeft, revealFromRight, stagger } from "@/lib/animations";

const NBSP = " ";

export default function Company() {
  return (
    <section className="company">
      <div className="container">
        <div className="up_content">
          <motion.p
            className="company_up_title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            After forming the founding team, defining the SPAC goals and resolving legal nuances, the organizers move on
            to the final stage of{NBSP}launching the company.
          </motion.p>
          <motion.div className="company_up_content d-flex" initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <motion.div className="up_image_column" variants={revealFromLeft}>
              <motion.img src="/img/what-we-do/company_up_image.jpg" alt="" variants={imageSettle} />
            </motion.div>
            <motion.div className="up_text_column" variants={stagger(0.2, 0.3)}>
              <motion.p className="up_text_heading" variants={fadeUp}>
                At this stage, SPAC is raising the necessary funds for the subsequent takeover / merger with a company
                wishing to go public.
              </motion.p>
              <motion.p className="up_text_body" variants={fadeUp}>
                Financing is carried out with the{NBSP}participation of an investment bank (underwriter), which
                allocates the necessary funds after the team has made a proactive payment. This payment is calculated
                based on the total amount of attracted investments and amounts to 3.5-7% of{NBSP}the{NBSP}total
                investment.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="company_center_content d-flex"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className="center_text_column" variants={stagger(0.2)}>
              <motion.p className="center_text_heading" variants={fadeUp}>
                If the founding team does not have enough funds for a proactive payment, Goodwill Capital joins the
                process as a Sponsor. The{NBSP}fund makes a proactive payment in{NBSP}exchange for 11% of the total
                SPAC shares.
              </motion.p>
              <motion.p className="center_text_body" variants={fadeUp}>
                The shares are offered at{NBSP}a{NBSP}significant discount due to the fact that this process occurs
                before the SPAC is listed.
              </motion.p>
            </motion.div>
            <motion.div className="center_image_column" variants={revealFromRight}>
              <motion.img src="/img/what-we-do/company_center_img.jpg" alt="" variants={imageSettle} />
            </motion.div>
          </motion.div>
          <motion.div
            className="company_down_content d-flex"
            variants={stagger(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className="big_column" variants={fadeUp}>
              <p className="big_column_heading">
                Upon completion of all registration procedures and the transfer of the required amount by the
                investment bank, SPAC shares are listed on the stock exchange, getting into free sale. At this point,
                the cost of{NBSP}each automatically increases to $10.
              </p>
              <p className="big_column_body">
                The cost is determined by the rules of the SEC (US Securities and Exchange Commission) and is backed
                by{NBSP}the funds actually reserved in the company&apos;s trust account.
              </p>
            </motion.div>
            <motion.div className="small_column" variants={fadeUp}>
              <p className="small_column_body">
                During the life of the SPAC, the value of the stock will likely increase. This may be due to positive
                news, such as: the announcement of the company takeover / merger, the acquisition / merger procedure
                itself, the subsequent formation of a public company.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="company_news"
          variants={stagger(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.p className="up_news" variants={fadeUp}>
            Goodwill Capital does not set the goal of long-term investing in shares of a public company and fully
            playing on the course of their value.
          </motion.p>
          <motion.p className="down_news" variants={fadeUp}>
            The task of the fund is to sell shares at the optimal moment after the lifting of the moratorium (1 year
            from the date of SPAC creation).
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
