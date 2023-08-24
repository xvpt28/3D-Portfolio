import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { gsap, Linear } from "gsap";
import { TYPED_STRINGS, SOCIAL_LINKS } from "../constants";
import { Icon } from "@iconify/react";

const Hero = () => {
  const typedSpanElement = useRef(null);
  // const targetSection = useRef(null);

  //添加typed实例
  const initTypeAnimation = (typedSpanElement) => {
    return new Typed(typedSpanElement.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 4000,
      loop: true,
    });
  };

  const renderSocialLinks = () =>
    SOCIAL_LINKS.map((el) => (
      <a
        key={el.name}
        href={el.url}
        target="_blank"
        className={`rounded-full flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:m-2 m-1 cursor-pointer text-secondary hover:bg-main  hover:text-white mt-6 duration-500`}
      >
        <Icon icon={el.icon} className={`h-6 w-6 rounded-full `} />
      </a>
    ));

  // const initRevealAnimation = (targetSection) => {};

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    return () => {
      typed.destroy();
    };
  }, [typedSpanElement]);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden pt-36 xl:pt-24">
      <div
        className={`inset-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-main" />
          <div className="w-1 sm:h-96 h-64 orange-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} ml-1 md:ml-4`}>
            Hello 👋🏻{" "}
            <div>
              I am{" "}
              <span className="bg-gradient-to-r from-[#0682a6] to-blue-400 bg-clip-text text-transparent">
                Pu Tong
              </span>
            </div>
          </h1>
          <p className={`${styles.heroSubText} mt-3 ml-1 md:ml-4 `}>
            <span ref={typedSpanElement}></span>
          </p>
          <div className="flex mb-5 flex-wrap ">{renderSocialLinks()}</div>

          <button className="font-medium rounded text-base md:text-xl  duration-300 flex items-center h-15 w-50 border-2 border-secondary hover:bg-primary hover:border-primary hover:text-white ml-1 md:ml-4">
            <a
              href="/PT Resume.pdf"
              target="_blanket"
              className="w-full h-full py-2 px-7"
            >
              Resume
            </a>
          </button>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[24px] h-[48px] rounded-3xl border-2 border-secondary flex justify-center items-start">
            <motion.div
              className="w-1 h-3 rounded-full bg-secondary mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{
                // ease: "linear",
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
