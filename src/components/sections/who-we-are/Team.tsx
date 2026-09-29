import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, fadeUpDelayed, stagger } from "@/lib/animations";

const TEAM = [
  { name: "Datuk Paul Chong", position: "Managing partner", email: "datopoulchong@goodwillcapital.io" },
  { name: "Sandra Chan", position: "Managing partner", email: "sandrachan@goodwillcapital.io" },
  { name: "Mikhail Alexandrov", position: "Managing partner", email: "ma@goodwillcapital.io" },
  { name: "Dominic Liu", position: "Managing partner", email: "domliu@goodwillcapital.io" },
  { name: "Joseph Lee", position: "Advisor", email: "joseph@goodwillcapital.io" },
  { name: "See Toh Kean Yaw", position: "Advisor", email: "kyseetoh@goodwillcapital.io" },
];

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <motion.div variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <motion.span className="general_title" variants={fadeUp}>
            team
          </motion.span>
          <motion.h2 className="general_text team_main_text" variants={fadeUp}>
            The basis of our investment success is{" "}a{" "}team of specialists in the field of finance, law,
            insurance and IT, with extensive experience in the field of private equity, <br /> mergers and acquisitions.
          </motion.h2>
        </motion.div>
        <div className="team_wrapper d-flex">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.email}
              className="team_item"
              variants={fadeUpDelayed((index % 3) * 0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <div className="worker_image">
                <img src={`/img/who-we-are/team_img${index + 1}.png`} alt={member.name} />
              </div>
              <p className="worker_name">{member.name}</p>
              <p className="worker_position">{member.position}</p>
              <a href={`mailto:${member.email}`} className="worker_mail">
                {member.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
