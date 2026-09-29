import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, fadeUpDelayed, popIn } from "@/lib/animations";

const OFFERS = [
  {
    id: "rotate_circle",
    title: "Advanced and creative solutions",
    text: "Our clients receive the best investment solutions and products, taking into account current trends and based on the fund's professional team’s many years of experience.",
  },
  {
    id: "rotate_triangle",
    title: "World-class service provider partnerships.",
    text: "We work with the best auditors, lawyers, underwriters and brokers to help our clients take less risk, earn more, grow and achieve their goals.",
  },
  {
    id: "move_circle",
    title: "World class team.",
    text: "Together we are a strong, global team of like-minded people, inspired to deliver great results.",
  },
];

export default function ClientOffer() {
  return (
    <section className="animate">
      <div className="container">
        <motion.h2 className="animate_text" variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          We are proud to offer our clients:
        </motion.h2>
        <div className="anim_wrapper">
          {OFFERS.map((item, index) => (
            <motion.div
              key={item.id}
              className="anim_item d-flex"
              variants={fadeUpDelayed(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className="anim_item_img" id={item.id} variants={popIn}>
                <img src={`/img/who-we-are/${item.id}.gif`} alt="" />
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
