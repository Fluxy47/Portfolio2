import React, { useRef } from "react";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";

function Intro() {
  const circle = useRef(null);
  

  const circleAnimate = useMouseMovementAnimation(circle);
  return (
    <div className="  flex flex-col md:flex-row md:justify-center md:items-center mx-[10px] md:mx-[40px] lg:mx-auto gap-[1em] md:gap-[4em] mt-[2em] md:mt-[8em] relative">
      <div className=" md:max-w-[30rem] lg:max-w-[38rem]">
        <h2 className="text-2xl md:text-3xl ">
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
        <div ref={circleAnimate} className="w-48 h-48 rounded-full bg-[#1C1D20] md:mt-[15em] lg:mt-[12em]  md:absolute flex items-center justify-center">
          <h2 className="text-white absolute text-lg">About me</h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;