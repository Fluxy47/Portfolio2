import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Landing from "./Components/Landing";
import {
  AnimatePresence,
  useScroll,
  motion,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import Overlay from "./Components/Overlay";
import SideBar from "./Components/SideBar";
import About from "./Containers/About";

import Testing from "./Components/testing";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Containers/Home";
import Work from "./Containers/Work";
import Duck from "./Components/duck";
import Footer from "./Components/Footer";
import Contact from "./Containers/Contact";
import NavBar from "./Components/NavBar";

function App() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDirect, setIsDirect] = useState(false);
  console.log("direct", isDirect);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.07,
      smooth: 2,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
      autoResize: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setIsDirect(true);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }, [location.pathname]);

  return (
    <>
      {/* <AnimatePresence mode="wait">{isLoading && <Overlay />}</AnimatePresence> */}
      {isVisible && <Overlay animateIn={isDirect ? true : false} />}
      <SideBar setIsVisible={setIsVisible} setIsDirect={setIsDirect} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home setIsVisible={setIsVisible} />} />
          <Route
            path="/Work/*"
            element={<Work setIsVisible={setIsVisible} />}
          />
          <Route
            path="/About"
            element={<About setIsVisible={setIsVisible} />}
          />
          <Route
            path="/Contact"
            element={<Contact setIsVisible={setIsVisible} />}
          />
        </Routes>
      </AnimatePresence>
      {/* <Footer /> */}

      {/* <Duck /> */}
      {/* <Testing /> */}
    </>
  );
}

export default App;
