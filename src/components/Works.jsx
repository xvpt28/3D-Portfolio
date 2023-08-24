import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { PROJECTS } from "../constants";
import ProjectTile from "./project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const PROJECT_STYLES = {
  SECTION:
    "w-full relative select-none section-container flex-col flex justify-center max-w-7xl mx-auto  z-10",
  PROJECTS_WRAPPER:
    "tall:mt-12 mt-6 grid grid-flow-col gap-3 auto-cols-max md:gap-10 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};

const Project = ({ isMobile }) => {
  const targetSectionRef = useRef(null);
  const sectionTitleElementRef = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (targetSectionRef) => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSectionRef.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const initProjectsAnimation = (targetSectionRef, sectionTitleElementRef) => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sidePadding =
      document.body.clientWidth -
      targetSectionRef.current.querySelector(".inner-container").clientWidth;

    const elementWidth =
      sidePadding +
      targetSectionRef.current.querySelector(".project-wrapper").clientWidth;
    targetSectionRef.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;

    const duration = `${(elementWidth / window.innerHeight) * 100}%`;

    timeline
      .to(targetSectionRef.current, { x: width })
      .to(sectionTitleElementRef.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
      onToggle: (self) => {
        setwillChange(self.isActive);
      },
    });

    return [timeline, scrollTrigger];
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) {
        const projectWrapper =
          targetSectionRef.current.querySelector(".project-wrapper");
        const parentPadding = window
          .getComputedStyle(targetSectionRef.current)
          .getPropertyValue("padding-left");

        targetSectionRef.current.style.setProperty("width", "100%");
        projectWrapper.classList.add("overflow-x-auto");
        projectWrapper.style.setProperty("width", `calc(100vw)`);
        projectWrapper.style.setProperty("padding", `0 ${parentPadding}`);
        projectWrapper.style.setProperty(
          "transform",
          `translateX(-${parentPadding})`
        );
      } else {
        const [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(
          targetSectionRef,
          sectionTitleElementRef
        );
      }
      const [revealTimeline, revealScrollTrigger] =
        initRevealAnimation(targetSectionRef);
    });
    return () => ctx.revert();
  }, []);

  const renderSectionTitle = () => (
    <div
      className={`flex flex-col inner-container ${
        willChange ? "will-change-transform" : ""
      }`}
      ref={sectionTitleElementRef}
    >
      <p className={`${styles.sectionSubText} `}>What I have contributed</p>
      <h2 className={`${styles.sectionHeadText} mb-3`}>My Project</h2>
    </div>
  );

  const renderProjectTiles = () =>
    PROJECTS.map((project) => (
      <ProjectTile
        project={project}
        key={project.name}
        animationEnabled={true}
      ></ProjectTile>
    ));

  return (
    <section
      id="project"
      ref={targetSectionRef}
      className={`min-h-screen ${PROJECT_STYLES.SECTION}`}
    >
      {renderSectionTitle()}
      <div className={PROJECT_STYLES.PROJECTS_WRAPPER}>
        {renderProjectTiles()}
      </div>
    </section>
  );
};

export default Project;
