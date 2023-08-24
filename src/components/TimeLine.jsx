// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { useEffect, useRef, useState } from "react";
import { Branch, ItemSize, NodeTypes, TIMELINE } from "../constants";
// import Image from "next/image";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { Timeline } from "gsap/gsap-core";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { IDesktop, isSmallScreen } from "pages";

gsap.registerPlugin(ScrollTrigger);
const svgColor = "grey";
const animColor = "#0682a6";
const separation = 400;
const strokeWidth = 4;
const leftBranchX = 13;
const curveLength = 150;
const dotSize = 26;

const TimelineSection = ({ isDesktop }) => {
  const [svgWidth, setSvgWidth] = useState(400);
  const [rightBranchX, setRightBranchX] = useState(109);

  //寻找到数据中所有的checkpoint并且需要画线
  const svgCheckpointItems = TIMELINE.filter(
    (item) => item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine
  );

  //算出svg的总长度
  const svgLength = svgCheckpointItems?.length * separation;

  const timelineSvg = useRef(null);
  const svgContainer = useRef(null); //整个时间轴的ref
  const screenContainer = useRef(null);

  const addNodeRefsToItems = (timeline) => {
    return timeline.map((node, idx) => ({
      ...node,
      next: timeline[idx + 1],
      prev: timeline[idx - 1],
    }));
  };

  //创建时间轴的html
  const generateTimelineSvg = (timeline) => {
    //传入参数为时间轴的数据
    let index = 1;
    let y = dotSize / 2;
    const timelineStyle = `<style>.str, .dot{stroke-width: ${strokeWidth}px}.anim-branch{stroke-dasharray: 186}</style>`;
    let isDiverged = false;

    const timelineSvg = addNodeRefsToItems(timeline).reduce((svg, node) => {
      const { type, next } = node;
      let lineY = y;
      let dotY = y + separation / 2;

      switch (type) {
        case NodeTypes.CHECKPOINT:
          {
            const { shouldDrawLine } = node;

            // special handling for last checkpoint
            if (!next) {
              lineY = y - separation / 2;
            }

            // special handling for dot without line
            if (!shouldDrawLine) {
              dotY = y;
            }

            if (shouldDrawLine) {
              // TO DO fix syntax
              svg = shouldDrawLine
                ? `${drawLine(node, lineY, index, isDiverged)}${svg}`
                : svg;
              y = y + separation;
              index++;
            }

            svg = svg.concat(drawDot(node, dotY, isDiverged));
          }
          break;
        case NodeTypes.DIVERGE:
          {
            isDiverged = true;

            svg = `${drawBranch(node, y, index)}${svg}`;
          }
          break;
        case NodeTypes.CONVERGE:
          {
            isDiverged = false;

            // Drawing CONVERGE branch with previous line and index
            svg = `${drawBranch(node, y - separation, index - 1)}${svg}`;
          }
          break;
      }

      return svg;
    }, timelineStyle);

    return timelineSvg;
  };

  //画交点
  const getDotString = (x, y) => {
    return `<rect class='dot' width=${dotSize} height=${dotSize} fill='white' x=${
      x - dotSize / 2
    } y=${
      y - dotSize / 2
    } ></rect><circle cx=${x} cy=${y} r='7' stroke=${svgColor} class='dot' ></circle>`;
  };

  const drawDot = (timelineNode, y, isDiverged) => {
    const { next, alignment } = timelineNode;

    // Diverging
    if (next && next.type === NodeTypes.DIVERGE) {
      y = y - curveLength + 6 * dotSize;
    }

    // Converging
    if (next && next.type === NodeTypes.CONVERGE) {
      y = y + curveLength - 6 * dotSize;
    }

    const dotString = getDotString(
      alignment === Branch.LEFT ? leftBranchX : rightBranchX,
      y
    );

    const textString = addText(timelineNode, y, isDiverged);

    return `${textString}${dotString}`;
  };

  const addText = (timelineNode, y, isDiverged) => {
    const { title, subtitle, size, image, company } = timelineNode;

    const offset = isDiverged ? rightBranchX : 10;
    const foreignObjectX = dotSize / 2 + 10 + offset;
    const foreignObjectY = y - dotSize / 2;
    const foreignObjectWidth = svgWidth - (dotSize / 2 + 10 + offset);

    const titleSizeClass = size === ItemSize.LARGE ? "text-3xl" : "text-1xl";
    const logoString = image
      ? `<img src='${image}' rel="preload" class='h-8 mb-2' loading='lazy' width='100' height='32' alt='${image}' />`
      : company
      ? `<h2 class='font-semibold'>${company}</h2>`
      : "";
    const subtitleString = subtitle
      ? `<p class=' mt-2 text-secondary text-[14px] tracking-wide'>${subtitle}</p>`
      : "";

    return `<foreignObject x=${foreignObjectX} y=${foreignObjectY} width=${foreignObjectWidth} 
        height=${separation}>${logoString}<p class='${titleSizeClass}'>${title}</p>${subtitleString}</foreignObject>`;
  };

  const drawLine = (timelineNode, y, i, isDiverged) => {
    const { alignment, prev, next } = timelineNode;

    const isPrevDiverge = prev && prev.type === NodeTypes.DIVERGE;
    const isNextConverge = next && next.type === NodeTypes.CONVERGE;

    const lineY = Math.abs(y + separation);

    // Smaller line for Diverging
    if (isPrevDiverge) {
      return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} />`;
    }

    // Smaller line for Converging
    if (isNextConverge) {
      return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} />`;
    }

    const lineX = alignment === Branch.LEFT ? leftBranchX : rightBranchX;

    let str = `<line class='str' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${animColor} />`;

    // If already diverged, draw parallel line to the existing line
    if (isDiverged) {
      const divergedLineX =
        alignment === Branch.LEFT ? rightBranchX : leftBranchX;
      str = str.concat(
        `<line class='str' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${i}' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${animColor} />`
      );
    }
    return str;
  };

  const drawBranch = (timelineNode, y, i) => {
    const { type } = timelineNode;

    switch (type) {
      case NodeTypes.DIVERGE:
        return `<path class='str' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
          y + curveLength / 2
        } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
          y + curveLength
        }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${
          y + curveLength
        } x2=${rightBranchX} y2=${
          y + separation
        } stroke=${svgColor} /><path class='str anim-branch branch-${i}' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
          y + curveLength / 2
        } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
          y + curveLength
        }' stroke=${animColor} /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${
          y + curveLength
        } x2=${rightBranchX} y2=${y + separation} stroke=${animColor} />`;
      case NodeTypes.CONVERGE:
        return `<path class='str' d='M ${rightBranchX} ${
          y + separation - curveLength
        } C ${rightBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation
        }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
          y + separation - curveLength
        )} stroke=${svgColor} /><path class='str anim-branch branch-${i}' d='M ${rightBranchX} ${
          y + separation - curveLength
        } C ${rightBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation
        }' stroke=${animColor} /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
          y + separation - curveLength
        )} stroke=${animColor} />`;
      default:
        return "";
    }
  };

  const addLineSvgAnimation = (timeline, duration, index) => {
    const startTime = `start+=${duration * index}`;

    timeline.from(
      svgContainer.current.querySelectorAll(`.line-${index + 1}`),
      { scaleY: 0, duration },
      startTime
    );

    return timeline;
  };

  const addDivergingBranchLineAnimation = (timeline, duration, index) => {
    timeline
      .from(
        svgContainer.current.querySelector(`.line-${index + 1}`),
        { scaleY: 0, duration },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-${index + 1}`),
        { strokeDashoffset: 186, duration: duration - 2 },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-line-${index + 1}`),
        { scaleY: 0, duration: duration - 1 },
        `start+=${duration * (index + 1) - 2}`
      );

    return timeline;
  };

  const addConvergingBranchLineAnimation = (timeline, duration, index) => {
    timeline
      .from(
        svgContainer.current.querySelector(`.line-${index + 1}`),
        { scaleY: 0, duration },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-line-${index + 1}`),
        { scaleY: 0, duration: duration - 1 },
        `start+=${duration * index}`
      )
      .from(
        svgContainer.current.querySelector(`.branch-${index + 1}`),
        { strokeDashoffset: 186, duration: duration - 2 },
        `start+=${duration * (index + 1) - 1}`
      );

    return timeline;
  };

  const animateTimeline = (timeline, duration) => {
    let index = 0;
    addNodeRefsToItems(TIMELINE).forEach((item) => {
      const { type } = item;

      if (type === NodeTypes.CHECKPOINT && item.shouldDrawLine) {
        const { next, prev } = item;
        if (prev?.type === NodeTypes.DIVERGE) {
          addDivergingBranchLineAnimation(timeline, duration, index);
        } else if (next?.type === NodeTypes.CONVERGE) {
          addConvergingBranchLineAnimation(timeline, duration, index);
        } else {
          addLineSvgAnimation(timeline, duration, index);
        }

        index++;
      }
    });
  };

  //创建时间轴
  const setTimelineSvg = (svgContainer, timelineSvg) => {
    //时间轴的宽度
    const containerWidth = svgContainer.current.clientWidth;
    setSvgWidth(containerWidth);
    //生成时间轴的html
    const resultSvgString = generateTimelineSvg(TIMELINE);
    timelineSvg.current.innerHTML = resultSvgString;

    // if (isSmallScreen()) {
    //   setRightBranchX(70);
    // }
  };

  const setSlidesAnimation = (timeline) => {
    svgCheckpointItems.forEach((_, index) => {
      // all except the first slide
      if (index !== 0) {
        timeline.fromTo(
          screenContainer.current.querySelector(`.slide-${index + 1}`),
          { opacity: 0 },
          { opacity: 1 }
        );
      }

      // all except the last slide
      if (index !== svgCheckpointItems.length - 1) {
        timeline.to(
          screenContainer.current.querySelector(`.slide-${index + 1}`),
          {
            opacity: 0,
            delay: 2.35,
          }
        );
      }
    });
  };

  const initScrollTrigger = () => {
    const timeline = gsap
      .timeline({ defaults: { ease: Linear.easeNone, duration: 0.36 } })
      .addLabel("start");

    let duration;
    let trigger;
    let start;
    let end;
    let additionalConfig = {};

    // Slide as a trigger for Desktop
    // if (isDesktop && !isSmallScreen()) {
    // Animation for right side slides
    setSlidesAnimation(timeline);

    const platformHeight =
      screenContainer.current.getBoundingClientRect().height;

    trigger = screenContainer.current;
    start = `top ${(window.innerHeight - platformHeight) / 2}`;
    end = `+=${svgLength - platformHeight}`;

    additionalConfig = {
      pin: true,
      pinSpacing: "bottom",
    };
    duration = timeline.totalDuration() / 12;

    ScrollTrigger.create({
      ...additionalConfig,
      trigger,
      start,
      end,
      scrub: true,
      animation: timeline,
    });

    return { timeline, duration };
  };

  useEffect(() => {
    // Generate and set the timeline svg

    const ctx = gsap.context(() => {
      setTimelineSvg(svgContainer, timelineSvg);
      const { timeline, duration } = initScrollTrigger();
      animateTimeline(timeline, duration);
    });

    // Animation for Timeline SVG

    return () => ctx.revert();
  }, []);

  const renderSlides = () => (
    <div
      className="max-w-full h-96 shadow-xl rounded-2xl overflow-hidden "
      ref={screenContainer}
    >
      <img
        className="w-full h-8"
        src="/timeline/title-bar.svg"
        alt="Title bar"
        width={644}
        height={34}
      />
      <div className="relative h-full w-full ">
        <div className="absolute top-0 left-0 h-full w-full ">
          {svgCheckpointItems.map((item, index) => {
            return (
              <img
                className={`w-full h-[90%] absolute top-0 object-contain slide-${
                  index + 1
                }`}
                src={item.slideImage || ""}
                key={`${item.title}-${index}`}
                alt="Timeline"
                layout="fill"
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSVG = () => (
    <svg
      width={svgWidth}
      height={svgLength}
      viewBox={`0 0 ${svgWidth} ${svgLength}`}
      fill="none"
      ref={timelineSvg}
    ></svg>
  );

  const renderSectionTitle = () => (
    <div>
      <p className={styles.sectionSubText}>A recap of my proud moments</p>
      <h2 className={styles.sectionHeadText}>Milestones</h2>
    </div>
  );

  return (
    <section
      className="w-full relative select-none min-h-screen section-container py-8 flex flex-col justify-center"
      id={2}
    >
      {renderSectionTitle()}
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-12 md:col-span-6 line-svg" ref={svgContainer}>
          {renderSVG()}
        </div>
        <div className="col-span-12 md:col-span-6 md:flex hidden">
          {renderSlides()}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(TimelineSection, "timeline");
