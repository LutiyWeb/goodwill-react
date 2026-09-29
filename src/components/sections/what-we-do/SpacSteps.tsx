import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, fadeUpDelayed } from "@/lib/animations";

const STEPS = [
  { name: "Prepare", text: "Prepare legal and organizational structures" },
  { name: "Pay", text: "Make a proactive payment" },
  { name: "Recieve", text: "Recieve funds from an investment bank" },
];

export default function SpacSteps() {
  return (
    <section className="steps">
      <div className="container">
        <motion.h2
          className="general_text steps_title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          To run SPAC, the founding team needs to:
        </motion.h2>
        <div className="steps_row d-flex">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.name}
              className="steps_item"
              variants={fadeUpDelayed(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <span className={`steps_index${index > 0 ? " steps_index_arrow" : ""}`}>0{index + 1}</span>
              <div className="steps_name">{step.name}</div>
              <p className="steps_text">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
