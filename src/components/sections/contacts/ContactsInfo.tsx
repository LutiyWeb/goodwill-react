import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { EASE_OUT, VIEWPORT, fadeUp, revealFromRight, stagger } from "@/lib/animations";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8183.60328720736!2d55.25507416445701!3d25.1878717026579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20no.%202907%2C%20Prism%20Tower%2C%20Business%20Bay%2C%20Dubai%2C%20U.A.E.!5e0!3m2!1sru!2sfr!4v1622121448211!5m2!1sru!2sfr";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT, delayChildren: 0.3, staggerChildren: 0.1 },
  },
};

export default function ContactsInfo() {
  return (
    <main className="contacts">
      <div className="container">
        <motion.h1
          className="contacts_title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          CONTACT US
        </motion.h1>
        <motion.div className="contacts_wrapper d-flex" initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.div className="contacts_column column" variants={cardVariants}>
            <motion.h2 className="contacts_column_heading" variants={fadeUp}>
              Goodwill Capital LP
            </motion.h2>
            <motion.div className="contacts_column_body" variants={stagger(0.1)}>
              <motion.p className="location" variants={fadeUp}>
                Office no. 2907, Prism Tower, Business Bay, Dubai, U.A.E.
              </motion.p>
              <motion.a href="tel:+15713484601" className="phone_number" variants={fadeUp}>
                +1-571-348-4601
              </motion.a>
              <motion.a href="mailto:info@goodwillcapital.io" className="mail" variants={fadeUp}>
                info@goodwillcapital.io
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="map_column column" variants={revealFromRight}>
            <iframe
              src={MAP_SRC}
              title="Goodwill Capital office on the map"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
