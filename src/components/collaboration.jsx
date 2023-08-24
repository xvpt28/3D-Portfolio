// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { gsap, Linear } from "gsap";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const COLLABORATION_STYLE = {
  SLIDING_TEXT: "opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap",
  SECTION:
    "w-full relative select-none tall:py-36 py-48 section-container flex flex-col",
  TITLE: "mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center",
};

const CollaborationSection = ({ isMobile }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  const [willChange, setwillChange] = useState(false);

  const initTextGradientAnimation = (targetSection) => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 2.5,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  const initSlidingTextAnimation = (targetSection) => {
    const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    slidingTl
      .to(targetSection.current.querySelector(".ui-left"), {
        xPercent: isMobile ? -500 : -150,
      })
      .from(
        targetSection.current.querySelector(".ui-right"),
        { xPercent: isMobile ? -500 : -150 },
        "<"
      );

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: slidingTl,
    });
  };

  // useEffect(() => {
  //   const textBgAnimation = initTextGradientAnimation(targetSection);
  //   let slidingAnimation;

  //   slidingAnimation = initSlidingTextAnimation(targetSection);

  //   return () => {
  //     textBgAnimation.kill();
  //     slidingAnimation?.kill();
  //   };
  // }, [quoteRef, targetSection]);

  useEffect(() => {
    // Generate and set the timeline svg

    const ctx = gsap.context(() => {
      const textBgAnimation = initTextGradientAnimation(targetSection);
      let slidingAnimation;
      slidingAnimation = initSlidingTextAnimation(targetSection);
    });

    // Animation for Timeline SVG

    return () => ctx.revert();
  }, []);

  const renderSlidingText = (text, layoutClasses) => (
    <p className={`${layoutClasses} ${COLLABORATION_STYLE.SLIDING_TEXT}`}>
      {Array(5)
        .fill(text)
        .reduce((str, el) => str.concat(el), "")}
    </p>
  );

  const renderTitle = () => (
    <h1
      ref={quoteRef}
      className={`${COLLABORATION_STYLE.TITLE} ${
        willChange ? "will-change-opacity" : ""
      } mb-5 `}
    >
      Interested in <span className="text-strong font-bold">Collaboration</span>
      ?
    </h1>
  );

  return (
    <section className={COLLABORATION_STYLE.SECTION} ref={targetSection}>
      {renderSlidingText(
        " Frontend Development 3D Visulization Development",
        "ui-left mb-5"
      )}

      {renderTitle()}

      {renderSlidingText(
        " Backend Development  Motion Graphics ",
        "mt-6 md:mt-8 ui-right"
      )}
    </section>
  );
};

export default CollaborationSection;
