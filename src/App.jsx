import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Landing from "./Components/Landing";
import {
  AnimatePresence,
  useScroll,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Overlay from "./Components/Overlay";
import SideBar from "./Components/SideBar";
import About from "./Components/About";
import Work from "./Components/Work";

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

  const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  return (
    <>
      {/* <AnimatePresence mode="wait">{isLoading && <Overlay />}</AnimatePresence> */}
      <SideBar />
      <Landing />
      <About />
      <Work />
      <div className="min-h-screen " />
    </>
  );
}

export default App;
