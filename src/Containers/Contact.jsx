import React, { useRef } from "react";
import NavBar from "../Components/NavBar";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import useHoverAnimation from "../util/useHoverAnimation";
const arr = ["twitter", "insta", "LinkedIn"];

function Contact() {
  const circle = useRef(null);
  const Text = useRef(null);
  const overlayRef = useRef();

  const circleAnimate = useMouseMovementAnimation(circle);
  const TextAnimate = useMouseMovementAnimation(Text);
  useHoverAnimation(circle, overlayRef);
  return (
    <div className="h-full bg-[#1c1d20] relative pb-[200px]">
      <NavBar color="white" />
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-[7em]">
        <section className="flex flex-col w-full max-w-[50vw] gap-[3em]">
          <h1
            className="text-white leading-[1] mb-[1.2em]"
            style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}
          >
            Let's Start a Project Together
          </h1>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">01</p>
              <span className="text-white text-2xl">Whats your name?</span>
            </div>
            <textarea
              name="Name"
              placeholder="John Doe*"
              rows="1"
              className="resize-none text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">02</p>
              <span className="text-white text-2xl">What's your email?</span>
            </div>
            <textarea
              name="Name"
              rows="1"
              placeholder="john@doe.com"
              className="resize-none text-2xl  border-none focus:outline-none ml-[2.5em] bg-transparent text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6]" />
          <div className="flex flex-col gap-[1em] ">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">03</p>
              <span className="text-white text-2xl">
                What's the name of your organization?
              </span>
            </div>
            <textarea
              name="Name"
              rows="1"
              placeholder="John & Doe"
              className=" resize-none text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">04</p>
              <span className="text-white text-2xl">
                What services are you looking for?
              </span>
            </div>
            <textarea
              name="Name"
              rows="1"
              placeholder="Game Development"
              className="resize-none text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white"
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">05</p>
              <span className="text-white text-2xl">Your messages</span>
            </div>
            <textarea
              name="Name"
              rows="5"
              placeholder="Hello Asad can you help me with"
              className=" text-2xl  border-none focus:outline-none bg-transparent ml-[2.5em] text-white resize-none"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <div
              ref={circleAnimate}
              className="w-40 h-40 rounded-full bg-[lightblue] absolute top-[-5em] right-10 flex items-center justify-center overflow-hidden cursor-pointer"
            >
              <div
                ref={overlayRef}
                className="absolute w-full h-full bg-[blue] rounded-full top-full"
              />
              <h2
                ref={TextAnimate}
                className="text-white absolute font-semibold flex justify-center items-center w-full h-full"
              >
                Send it!
              </h2>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-[3em] mb-auto mt-[5em]">
          <div className="w-20 h-20 bg-white rounded-full" />
          <div className="flex flex-col gap-[0.5em] text-base text-white">
            <h2 className="text-[#999D9E] text-[0.8em]">Contact Detail</h2>
            <p>email@.com</p>
            <p>03337649060</p>
          </div>
          <div className="flex flex-col gap-[0.5em] text-base text-white">
            <h2 className="text-[#999D9E] text-[0.8em]">BUSINESS DETAILS</h2>
            <p>Dennis Snellenberg B.V.</p>
            <p>CoC: 92411711</p>
            <p>VAT: NL866034080B01</p>
            <p>Location: United Kingdom</p>
          </div>
          <div className="flex flex-col gap-[0.5em] text-base text-white">
            <h2 className="text-[#999D9E] text-[0.8em]">Socials</h2>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </section>
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
    </div>
  );
}

export default Contact;
