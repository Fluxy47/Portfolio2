import React, { useRef, useEffect } from "react";
import Projects from "../Components/Projects";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testing from "../Components/testing";

function Work({ setIsVisible, setIsDirect }) {
  const elementRef = useRef();
  useEffect(() => {
    // Select the carousel container using the ref
    const element = elementRef.current;

    // Create a timeline for the animations
    const tl = gsap.timeline();

    // Set initial position
    gsap.set(element, { y: "-20%" });

    // Add animation to the timeline
    tl.to(element, {
      y: "-=70%",
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
    <div className="min-h-screen">
      <NavBar
        color="black"
        setIsVisible={setIsVisible}
        setIsDirect={setIsDirect}
      />
      <section className="flex flex-col items-center justify-center gap-[5em] mt-[5.5em] mb-[5em]">
        <div className="flex items-start  w-full max-w-[55em] ">
          <h1
            className=" leading-[1.065]"
            style={{
              fontSize: "calc(clamp(3.25em, 6vw, 8em) * .875)",
            }}>
            Creating next level digital products
          </h1>
        </div>
        <section className="flex w-[70vw] justify-between ">
          <section className="flex gap-[0.5em] items-center justify-center">
            <div className="w-32 h-[70px] flex justify-center items-center rounded-full border border-black">
              <p>All</p>
            </div>

            <div className="w-32 h-[70px] flex justify-center items-center rounded-full border border-black">
              <p>Design</p>
            </div>

            <div className="w-36 h-[70px] flex justify-center items-center rounded-full border border-black">
              <p>Development</p>
            </div>
          </section>

          <section className="flex gap-[0.5em]">
            {" "}
            <div className="bg-[#1C1D20] w-20 h-20 rounded-full  cursor-pointer flex items-center justify-center overflow-hidden">
              {/* <div className="absolute w-full h-full bg-[blue] rounded-full top-full" /> */}
              <div className="rounded-full w-full h-full flex items-center justify-center ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="1"
                    y1="7"
                    x2="29"
                    y2="7"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="15"
                    x2="29"
                    y2="15"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="23"
                    x2="29"
                    y2="23"
                    stroke="gray"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            {/* second circle */}
            <div className="bg-[#1C1D20] w-20 h-20 rounded-full  cursor-pointer flex items-center justify-center overflow-hidden">
              {/* <div className="absolute w-full h-full bg-[blue] rounded-full top-full" /> */}
              <div className="rounded-full w-full h-full flex items-center justify-center ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    x1="1"
                    y1="7"
                    x2="29"
                    y2="7"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="15"
                    x2="29"
                    y2="15"
                    stroke="gray"
                    strokeWidth="2"
                  />
                  <line
                    x1="1"
                    y1="23"
                    x2="29"
                    y2="23"
                    stroke="gray"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Testing />
      {/* <Projects /> */}
      {/* <Work2 /> */}
      <div
        ref={elementRef}
        className="bg-white w-full h-[500px] rounded-br-[25%] rounded-bl-[25%] absolute z-[39] "></div>
      <Footer />
    </div>
  );
}

export default Work;
