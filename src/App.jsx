import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Landing from "./Components/Landing";
import {
  AnimatePresence,
  useScroll,
  motion,
  useMotionValueEvent,
  useMotionValue
} from "framer-motion";
import Overlay from "./Components/Overlay";
import SideBar from "./Components/SideBar";
import About from "./Containers/About";

import Testing from "./Components/testing";
import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home";
import Work from "./Containers/Work";
import Duck from "./Components/duck";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  console.log("window",window.innerHeight,window.innerWidth)

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let loadingTimeout;

    if (isLoading) {
      loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 2500); // Adjust the duration as needed
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [isLoading]);



  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  const [isVisible, setIsVisible] = useState(false);
  console.log("visibility",isVisible)
  

  const { scrollY } = useScroll();
  
   

  
  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Overlay />}</AnimatePresence> 
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work/*" element={<Work />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* <Duck /> */}
      <div className="min-h-screen " />
      {/* <Testing /> */}
    </>
  );
}

export default App;
