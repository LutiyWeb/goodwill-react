"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { VIEWPORT, fadeUp, stagger } from "@/lib/animations";

const INDUSTRIES = [
  "Consumer goods",
  "Healthcare",
  "Technologies",
  "Education",
  "Real Estate",
  "Renewable energy",
  "Cybersecurity",
];

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <section className="slider">
      <div className="container">
        <motion.span
          className="slider_title general_title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          Preferred Industries for SPAC Investment
        </motion.span>
        <motion.div
          className="slider_list"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {INDUSTRIES.map((name, index) => (
            <motion.div
              key={name}
              className={`slider_item${activeIndex === index ? " active" : ""}`}
              id={`slide${index + 1}`}
              variants={fadeUp}
              onMouseEnter={() => toggle(index)}
            >
              <div className="name_column d-flex">
                <div className="hidden_arrow">
                  <img src="/img/what-we-do/arrow.svg" alt="" />
                </div>
                <p className="slider_item_text general_text">{name}</p>
              </div>
              <div className="image_column" id={`img_slide${index + 1}`}>
                <img src={`/img/what-we-do/slider${index + 1}.jpg`} alt="" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
