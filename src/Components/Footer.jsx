import React, { useRef } from "react";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";

function Footer() {
  const circle = useRef(null);
  const Text = useRef(null);

  const circleAnimate = useMouseMovementAnimation(circle);
  const TextAnimate = useMouseMovementAnimation(Text);

  const arr = ["twitter", "insta", "LinkedIn"];
  return (
    <section className="h-screen relative bg-[#1c1d20] w-full ">
      <div className="w-[80vw] mx-auto flex flex-col gap-[5em] pt-[6em]">
        <div className=" w-full max-w-[40em]">
          <h1
            style={{ fontSize: "calc(clamp(3.25em, 6vw, 7em) * .875)" }}
            className=" leading-[1.2] text-white"
          >
            Lets Work Together
          </h1>
        </div>
        <div className="w-full flex flex-col relative">
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div
            ref={circleAnimate}
            className="w-40 h-40 rounded-full bg-[blue] absolute top-[-5em] right-10 flex items-center justify-center"
          >
            <h1
              ref={TextAnimate}
              className="text-white text-lg font-semibold w-full h-full  flex items-center justify-center"
            >
              Get In Touch
            </h1>
          </div>
        </div>
        <div className="flex gap-[1em]">
          <button className="w-80 h-20  rounded-full border-[1px] bg-transparent"></button>
          <button className="w-56 h-20 rounded-full border-[1px] bg-transparent"></button>
        </div>
      </div>
      <section className="absolute bottom-5 flex w-full">
        <div className="ml-[3em]">
          <h2 className="text-[#999D9E]">Local Time</h2>
          <p></p>
        </div>
        <div className="flex flex-col ml-auto mr-[3em]">
          <h2 className="text-[#999D9E]">Socials</h2>
          <div className="flex gap-[2em] text-[white]">
            {arr.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer;
