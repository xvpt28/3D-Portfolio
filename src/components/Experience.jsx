import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#FAFAFA",
        borderTop: `2px solid ${experience.lineBg}`,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #eee" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {experience.tech.map((tag, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#0682a6] opacity-70 p-1 pl-3 pr-3 mb-2 text-white text-[14px]"
          >
            {tag}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-primary text-[22px] font-bold ">
          {experience.title}
        </h3>
        <span className="text-secondary text-[16px] font-semibold block mt-1">
          {experience.company_name}
        </span>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#333333] text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      {/* {experience.date} */}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  // const setSlidesAnimation = (timeline) => {
  //   svgCheckpointItems.forEach((_, index) => {
  //     // all except the first slide
  //     if (index !== 0) {
  //       timeline.fromTo(
  //         screenContainer.current.querySelector(`.slide-${index + 1}`),
  //         { opacity: 0 },
  //         { opacity: 1 }
  //       );
  //     }

  //     // all except the last slide
  //     if (index !== svgCheckpointItems.length - 1) {
  //       timeline.to(
  //         screenContainer.current.querySelector(`.slide-${index + 1}`),
  //         {
  //           opacity: 0,
  //           delay: 2.35,
  //         }
  //       );
  //     }
  //   });
  // };

  // const initScrollTrigger = () => {
  //   const timeline = gsap
  //     .timeline({ defaults: { ease: Linear.easeNone, duration: 0.44 } })
  //     .addLabel("start");

  //   let duration;
  //   let trigger;
  //   let start;
  //   let end;
  //   let additionalConfig = {};

  //   // Animation for right side slides
  //   setSlidesAnimation(timeline);

  //   const platformHeight =
  //     screenContainer.current.getBoundingClientRect().height;

  //   trigger = screenContainer.current;
  //   start = `top ${(window.innerHeight - platformHeight) / 2}`;
  //   end = `+=${svgLength - platformHeight}`;
  //   additionalConfig = {
  //     pin: true,
  //     pinSpacing: true,
  //   };
  //   duration = timeline.totalDuration() / 15;

  //   ScrollTrigger.create({
  //     ...additionalConfig,
  //     trigger,
  //     start,
  //     end,
  //     scrub: 0,
  //     animation: timeline,
  //   });
  //   return { timeline, duration };
  // };

  // useEffect(() => {
  //   const { timeline, duration } = initScrollTrigger();
  // }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#737180">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
