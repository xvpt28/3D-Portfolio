import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  TimelineSection,
  CollaborationSection,
} from "./components";
import { useState, useEffect } from "react";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // useEffect(() => {
  //   let startX = 0;

  //   document.addEventListener(
  //     "touchstart",
  //     function (e) {
  //       startX = e.touches[0].clientX;
  //     },
  //     false
  //   );

  //   document.addEventListener(
  //     "touchmove",
  //     function (e) {
  //       let offsetX = e.touches[0].clientX - startX;

  //       if (Math.abs(offsetX) > 1) {
  //         console.log("sa");
  //         // 可以调整这个值以检测你认为的“滑动”
  //         e.preventDefault();
  //         return;
  //       }
  //     },
  //     { passive: false }
  //   );

  //   return () => {
  //     document.removeEventListener("touchstart", () => {});
  //     document.removeEventListener("touchmove", () => {});
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-section-pattern">
          <About />
          <TimelineSection />
          <Experience />
          <Tech />
          <Works isMobile={isMobile} />
          <CollaborationSection isMobile={isMobile} />
        </div>
        <div className="relative z-0 bg-black">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
