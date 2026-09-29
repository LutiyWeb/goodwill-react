import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, popIn } from "@/lib/animations";

type Step = {
  title: string;
  image: string;
  paragraphs: string[];
  markers?: string[];
};

const STEPS: Step[] = [
  {
    title: "Conclusion of a contract",
    image: "/img/for-investors/animation1.gif",
    paragraphs: [
      "To consolidate the partnership, it is necessary to\u00A0conclude an investment agreement between the\u00A0investor and Goodwill Capital.",
      "Under the agreement, the investor receives the status of\u00A0a limited partner (LP) and the opportunity to receive income from the fund's activities proportional to their contribution.",
    ],
  },
  {
    title: "Investment",
    image: "/img/for-investors/animation2.gif",
    paragraphs: ["An investment can be made in two ways:"],
    markers: [
      "Bank transfer (in USD)",
      "Bitcoin transfer (at the exchange rate against US dollars at the time the funds are received by the fund)",
    ],
  },
  {
    title: "SPAC funding and listing",
    image: "/img/for-investors/animation3.gif",
    paragraphs: [
      "After the formation of an investment pool for SPAC sponsorship, Goodwill Capital contributes sponsored capital and receives its shares equal to 11% of the total (at\u00A0this stage, the fund triples the capital).",
      "On average, this process takes up to 3 months.",
    ],
  },
  {
    title: "Buying a target company",
    image: "/img/for-investors/animation4.gif",
    paragraphs: [
      "In accordance with the SPAC roadmap, a target company is searched for and bought. As this is a positive informational occasion, the value of shares automatically increases.",
      "On average, this process takes 3-5 months.",
    ],
  },
  {
    title: "Fixing the fund's profit",
    image: "/img/for-investors/animation5.gif",
    paragraphs: [
      "Depending on various factors, such as the quality of\u00A0the\u00A0target company, the qualifications of the founding team, etc., the fund makes the best decision on profit fixing. As\u00A0part of this decision, the shares owned by\u00A0the\u00A0fund will be sold.",
      "On average, this happens 9 to 12 months after SPAC's IPO.",
    ],
  },
  {
    title: "Profit distribution",
    image: "/img/for-investors/animation6.gif",
    paragraphs: [
      "In accordance with the investment agreement, the\u00A0profit is distributed between the fund and the investor.",
      "The resulting profit (together with the initial investment) can be withdrawn to a bank account, bitcoin wallet, or\u00A0reinvested in the SPAC at the investor's decision.",
    ],
  },
];

export default function CooperationScheme() {
  return (
    <section className="animate">
      <div className="container">
        <motion.span
          className="animate_title general_title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          COOPERATION SCHEME
        </motion.span>
        <div className="anim_wrapper">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              className="anim_item d-flex"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className="anim_item_img" id={`animate${index + 1}`} variants={popIn}>
                <img src={step.image} alt="" />
              </motion.div>
              <div className="anim_item_title_wrapper">
                <span className="animate_step">step {index + 1}</span>
                <p className="anim_item_title">{step.title}</p>
              </div>
              <div className="anim_item_text">
                {step.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {step.markers?.map((text) => (
                  <p key={text} className="marker_text">
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
