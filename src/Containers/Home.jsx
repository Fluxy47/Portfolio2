import React, { useEffect, useRef } from "react";
import Landing from "../Components/Landing";
import Projects from "../Components/Projects";
import Intro from "../Components/Intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const elementRef = useRef();

  // useEffect(() => {
  //   // Target the element you want to animate
  //   const element = elementRef.current;

  //   // Set up the GSAP animation
  //   gsap.to(element, {
  //     y: 0, // Set the final y position (0 in this case)
  //     ease: "power3.inOut", // Choose an easing function
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top center", // Trigger animation when the top of the element hits the center of the viewport
  //       end: "bottom center", // Trigger animation when the bottom of the element hits the center of the viewport
  //       scrub: true, // Smoothly animate the element based on scroll position
  //     },
  //   });
  // }, []); // Run this effect only once on component mount

  // useEffect(() => {
  //   const element = elementRef.current;

  //   gsap.to(element, {
  //     y: "200px",
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top top", // Animation starts when the bottom of the element is at the center of the viewport
  //       end: "bottom top",
  //       scrub: 0.2, // Adjust this value for smoother or less smooth movement
  //       onUpdate: (self) => {
  //         // Check the direction of scroll
  //         const direction = self.direction;

  //         // Use interpolate to smoothly transition between values
  //         const topPosition = gsap.utils.interpolate(
  //           direction === 1 ? 200 : 0, // Initial top position based on scroll direction
  //           direction === 1 ? 0 : 200, // Target top position based on scroll direction
  //           Math.abs(self.progress) // Use the absolute progress value for smooth transition
  //         );

  //         // Set the top position based on interpolation
  //         gsap.to(element, {
  //           y: topPosition,
  //         });
  //       },
  //     },
  //   });
  // }, []);

  return (
    <div className="  ">
      <Landing />
      <Intro />
      <Projects />
      {/* <div
        ref={elementRef}
        className="relative top-[200px] bg-white rounded-[50%] w-[120%] h-[700px] z-10"
      ></div> */}
    </div>
  );
};

export default Home;
