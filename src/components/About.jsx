import { delay, motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react-refresh/only-export-components
const ServiceCard = ({ index, title, icon, bg }) => {
  return (
    <Tilt className="w-[250px]">
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, speed: 450, scale: 55 }}
          className="bg-white rounded-[20px] py-5 px-12 min-h-[250px] flex items-center flex-col justify-evenly"
          style={{
            background: `url('/${bg}.png') center no-repeat`,
            backgroundSize: "cover",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[#333333] text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[25px] text-justify"
      >
        As an accomplished software developer, my expertise lies in JavaScript,
        with a profound understanding of frameworks such as React, Vue, Node.js,
        and Three.js. My adaptability allows me to quickly grasp new concepts,
        and my dedication to client collaboration ensures the creation of
        efficient, scalable, and user-friendly solutions that effectively
        address real-world challenges.
      </motion.p>
      <div className="flex flex-wrap justify-evenly gap-10 flex-row mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
