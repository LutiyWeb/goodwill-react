"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import { VIEWPORT, fadeUp, imageSettle, revealFromLeft, stagger } from "@/lib/animations";

const FIELDS = [
  { label: "Name", className: "name_place" },
  { label: "Phone", className: "phone_place" },
  { label: "E-mail", className: "e_mail_place" },
  { label: "Topic", className: "topic_place" },
  { label: "Message", className: "message_place" },
];

export default function Questions() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section className="questions">
        <div className="container">
          <motion.span
            className="questions_title general_title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            HAVE A QUESTION?
          </motion.span>
          <div className="questions_content d-flex">
            <motion.div
              className="questions_info"
              variants={stagger(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.h2 className="questions_title_text title_text" variants={fadeUp}>
                We are always in touch and ready to provide you with advice, assistance <br /> and&nbsp;support
              </motion.h2>
              <motion.div className="questions_img" variants={revealFromLeft}>
                <motion.img src="/img/questios_image.jpg" alt="" variants={imageSettle} />
              </motion.div>
            </motion.div>
            <motion.form
              action="#"
              className="form"
              onSubmit={(event) => event.preventDefault()}
              variants={stagger(0.1, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {FIELDS.map((field) => (
                <motion.div key={field.label} className="input_group" variants={fadeUp}>
                  <input type="text" required className={`common ${field.className}`} />
                  <label className="input_valeu">{field.label}</label>
                </motion.div>
              ))}
              <motion.div variants={fadeUp}>
                <Button
                  href="#"
                  className="questions_info_text_btn"
                  onClick={(event) => {
                    event.preventDefault();
                    setPopupOpen(true);
                  }}
                >
                  Send
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>

      <Popup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
