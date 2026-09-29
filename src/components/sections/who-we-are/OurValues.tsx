import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, stagger } from "@/lib/animations";

const COLUMNS = [
  [
    {
      heading: "The interests of the client come first",
      text: "We always build relationships in the best interests of our clients",
    },
    {
      heading: "Legality and accountability",
      text: "It is important for us to maintain transparency in the entire structure",
    },
    {
      heading: "Risk control",
      text: "We only make informed decisions based on rigorous research",
    },
  ],
  [
    {
      heading: "An in-depth study of innovation",
      text: "We find the best ideas and newest solutions using knowledge from different fields",
    },
    {
      heading: "Global presence",
      text: "Our international presence and global reference points allow us to look broadly, not being limited to local markets",
    },
    {
      heading: "The pursuit of excellence",
      text: "Every day we see an opportunity to achieve more for our clients",
    },
  ],
];

export default function OurValues() {
  return (
    <section className="values">
      <div className="container">
        <motion.div
          className="values_wrapper"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.span className="general_title values_title" variants={fadeUp}>
            OUR VALUES
          </motion.span>
          <motion.h2 className="values_main_text" variants={fadeUp}>
            Our values guide our daily work
          </motion.h2>
          <motion.div className="values_list d-flex" variants={stagger(0.1)}>
            {COLUMNS.map((column, columnIndex) => (
              <motion.div key={columnIndex} className="values_col" variants={stagger(0.12)}>
                {column.map((item) => (
                  <motion.div key={item.heading} className="values_col_item" variants={fadeUp}>
                    <p className="values_col_item_headding">{item.heading}</p>
                    <p className="values_col_item_description">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
