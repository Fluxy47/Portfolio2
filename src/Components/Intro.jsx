import React, { useEffect, useRef } from "react";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import gsap from "gsap";
import useHoverAnimation from "../util/useHoverAnimation";
import useTextEffect from "../util/useTextEffect";

function Intro() {
  const circle = useRef(null);
  const Text = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef();

  const circleAnimate = useMouseMovementAnimation(circle);
  const TextAnimate = useMouseMovementAnimation(Text);
  useHoverAnimation(circle, overlayRef);
  useTextEffect(textRef, "gray", "black");

  return (
    <div className=" overflow-hidden md:overflow-visible flex flex-col md:flex-row md:justify-center md:items-center mx-[10px] md:mx-[40px] lg:mx-auto gap-[1em] md:gap-[4em] mt-[2em] md:mt-[8em]  md:mb-[20em] relative">
      <div className=" md:max-w-[30rem] lg:max-w-[38rem]">
        <h2
          ref={textRef}
          className="text-2xl md:text-3xl font-[450] text-[#1C1D20]">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </h2>
      </div>
      <div className=" flex justify-between">
        <div className="max-w-[11rem]  sm:max-w-[15rem]">
          <p className="text-[#464444]">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </div>
        <div
          ref={circleAnimate}
          className="w-48 h-48 rounded-full bg-[#1C1D20] md:mt-[15em] lg:mt-[12em]  md:absolute flex items-center justify-center overflow-hidden cursor-pointer">
          <div
            ref={overlayRef}
            className="w-48 h-48 absolute  bg-[blue] rounded-full top-full"
          />
          <h2
            ref={TextAnimate}
            className="text-white absolute text-lg flex justify-center items-center w-full h-full ">
            About me
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
