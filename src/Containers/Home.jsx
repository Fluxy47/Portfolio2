import React, { useEffect, useRef } from "react";
import Landing from "../Components/Landing";
import Projects from "../Components/Projects";
import Intro from "../Components/Intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const elementRef = useRef();

  // useEffect(() => {
  //   // Select the carousel container using the ref
  //   const element = elementRef.current;

  //   // Create a timeline for the animations
  //   const tl = gsap.timeline();

  //   // Set initial position
  //   gsap.set(element, { borderRadius: "50%" });

  //   // Add animation to the timeline
  //   tl.to(element, {
  //     borderRadius: "-=10%",
  //     scrollTrigger: {
  //       trigger: element,
  //       scrub: 0.5,
  //     },
  //   });

  //   // ScrollTrigger update on component unmount
  //   return () => {
  //     tl.kill();

  //     ScrollTrigger.getAll().forEach((instance) => instance.kill());
  //   };
  // }, []);

  useEffect(() => {
    // Select the carousel container using the ref
    const element = elementRef.current;

    // Create a timeline for the animations
    const tl = gsap.timeline();

    // Set initial position
    gsap.set(element, { y: "-0%" });

    // Add animation to the timeline
    tl.to(element, {
      y: "-=40%",
      scrollTrigger: {
        trigger: element,
        scrub: 0.5,
      },
    });

    // ScrollTrigger update on component unmount
    return () => {
      tl.kill();

      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="">
      <Landing />
      <Intro />
      <Projects />
      {/* <div
        ref={elementRef}
        className="bg-[red] w-full h-[500px] rounded-[50%] relative top- z-40"
      ></div> */}
      <Footer />
    </div>
  );
};

export default Home;
