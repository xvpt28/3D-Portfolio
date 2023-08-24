// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import styles from "./ProjectTile.module.scss";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const ProjectTile = ({ project, animationEnabled }) => {
  const projectCard = useRef(null);
  const {
    name,
    tech,
    image,
    blurImage,
    description,
    gradient: [stop1, stop2],
  } = project;

  useEffect(() => {
    VanillaTilt.init(projectCard.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, [projectCard]);

  const renderTechIcons = (techStack) => (
    <div
      className={`
      ${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
    `}
    >
      <div className="flex flex-col pb-8">
        {techStack.map((tech, i) => (
          <div className={`${i % 2 === 0 && "ml-24"} mb-6`} key={tech}>
            <img
              rel="preload"
              src={`/project/icon/${tech}.svg`}
              alt={tech}
              height={45}
              // objectFit="contain"
              width={45}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderDescription = (description) => (
    <h2
      className="text-xs z-10 tracking-wide font-medium  text-white"
      style={{ transform: "translateZ(0.8rem)" }}
    >
      {description}
    </h2>
  );

  const renderProjectName = (name) => (
    <h1
      className="text-[18px] sm:text-[26px] z-10 p-1 text-white"
      style={{ transform: "translateZ(3rem)" }}
    >
      {name}
    </h1>
  );

  const renderTopBottomGradient = (gradient) => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{
          background: `linear-gradient(180deg, ${gradient} 0%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: `linear-gradient(0deg, ${gradient} 10%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
    </>
  );

  const renderProjectImage = (image, blurImage, name) => (
    <img
      rel="preload"
      placeholder="blur"
      // blurDataURL={blurImage}
      src={image}
      alt={name}
      layout="fill"
      className={`${styles.ProjectImg} z-0`}
    />
  );

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="link overflow-hidden rounded-3xl snap-start"
      style={{
        maxWidth: animationEnabled
          ? "calc(100vw - 2rem)"
          : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`
          ${styles.ProjectTile}
           rounded-3xl relative p-6 flex-col flex justify-between max-w-full overflow-hidden
        `}
        style={{
          background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
        }}
      >
        <img
          rel="preload"
          src="/src/assets/project-bg.svg"
          alt="Project"
          layout="fill"
          className="absolute w-full h-full top-0 left-0 opacity-20"
        />
        {renderProjectImage(image, blurImage, name)}
        {renderTopBottomGradient(stop1)}
        {renderProjectName(name)}
        {renderTechIcons(tech)}
        {renderDescription(description)}
      </div>
    </a>
  );
};

export default ProjectTile;
