import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Menu from "./menu";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [title, setTitle] = useState(true);
  const [menuVisible, setmenuVisible] = useState(false);
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (window.scrollY > +headerRef.current.getBoundingClientRect().height) {
        setTitle(false);
      } else {
        setTitle(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  useEffect(() => {
    if (!title) {
      gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
    } else {
      gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
    }
  }, [title]);

  return (
    <header
      ref={headerRef}
      className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt={logo}
            className="w-9 h-9 object-contain transition-all duration-500 hover:rotate-180"
          />
          <div ref={textRef} className="flex align-center">
            <p className="text-primary text-[16px] font-bold cursor-pointer flex">
              Pu Tong &nbsp;{" "}
              <span className="sm:block hidden"> | &nbsp; A Web Developer</span>
            </p>
          </div>
        </Link>

        {/* <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul> */}
        <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
          <button
            className="hamburger w-6 h-6 flex items-center justify-center link relative"
            onClick={setmenuVisible.bind(null, !menuVisible)}
          >
            <div className="relative flex-none w-full bg-black duration-300 flex items-center justify-center"></div>
          </button>
          <Menu setmenuVisible={setmenuVisible} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
