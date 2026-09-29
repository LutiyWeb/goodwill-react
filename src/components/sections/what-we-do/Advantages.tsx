import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, fadeUpDelayed, popIn, stagger } from "@/lib/animations";

const ADVANTAGES = [
  {
    title: "Convenience",
    text: "The ability to invest not only in fiat currencies, but also in Bitcoin",
  },
  {
    title: "Minimal risks",
    text: "According to statistics, over 90% of SPACs are successful",
  },
  {
    title: "High rate of return",
    text: "The yield varies from 30 to 100% per annum, depending on the value of the shares sold",
  },
];

export default function Advantages() {
  return (
    <section className="animate">
      <div className="container">
        <motion.div variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.span className="animate_title general_title" variants={fadeUp}>
            Advantages
          </motion.span>
          <motion.h2 className="animate_text general_text" variants={fadeUp}>
            Advantages of investing in SPAC <span className="gold_word">with{" "}Goodwill Capital</span>
          </motion.h2>
        </motion.div>
        <div className="anim_wrapper">
          {ADVANTAGES.map((item, index) => (
            <motion.div
              key={item.title}
              className="anim_item d-flex"
              variants={fadeUpDelayed(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className="anim_item_img" id={`animate${index + 1}`} variants={popIn}>
                <img src={`/img/what-we-do/animate${index + 1}.gif`} alt="" />
              </motion.div>
              <p className="anim_item_title">{item.title}</p>
              <p className="anim_item_text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
