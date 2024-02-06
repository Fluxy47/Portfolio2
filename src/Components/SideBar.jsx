import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import useHoverAnimation from "../util/useHoverAnimation";

const arr = [
  { name: "Home", route: "/" },
  { name: "Work", route: "/Work" },
  { name: "About", route: "/About" },
  { name: "Contact", route: "/Contact" },
];

function SideBar({ setIsVisible, setIsDirect }) {
  const scrollY = useRef();
  const controls = useAnimation();
  const circle = useRef(null);
  const overlayRef = useRef();
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const Menu = useRef(null);
  const MenuAnimate = useMouseMovementAnimation(Menu);
  const circleAnimate = useMouseMovementAnimation(circle);
  useHoverAnimation(circle, overlayRef);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // const scrollYmotionValue = useMotionValue(
  //   window.pageYOffset || window.scrollY
  // );

  // useEffect(() => {
  //   const trackScroll = () => {
  //     scrollYmotionValue.set(window.pageYOffset || window.scrollY);
  //     scrollY.current = scrollYmotionValue.current;
  //     const scrollTriggerPercentage = 0.05;
  //     const scrollTriggerPoint =
  //       (window.innerHeight || document.documentElement.clientHeight) *
  //       scrollTriggerPercentage;

  //     if (scrollY.current > scrollTriggerPoint) {
  //       controls.start({ opacity: 1 });
  //     } else {
  //       controls.start({ opacity: 0 });
  //     }
  //   };

  //   window.addEventListener("scroll", trackScroll);

  //   return () => window.removeEventListener("scroll", trackScroll);
  // }, [scrollYmotionValue]);

  const handleNavigation = (route) => {
    setIsDirect(false);
    setIsVisible(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
      navigate(route);
    }, 1000);
  };

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    if (isOpen) {
      tl.to(line1Ref.current, { rotation: -40, y: 15, ease: "power2.out" }, 0)
        .to(line2Ref.current, { opacity: 0, ease: "power2.out" }, 0)
        .to(line3Ref.current, { rotation: 40, y: -15, ease: "power2.out" }, 0);
    } else {
      tl.to(line1Ref.current, { rotation: 0, y: 0, ease: "power2.out" }, 0)
        .to(line2Ref.current, { opacity: 1, ease: "power2.out" }, 0)
        .to(line3Ref.current, { rotation: 0, y: 0, ease: "power2.out" }, 0);
    }

    tl.play();
  }, [isOpen]);
  const animationRef = useRef(null);
  useEffect(() => {
    const container = circleAnimate.current;

    // Create a GSAP timeline
    const tl = gsap.timeline({ paused: true });

    // Define your animation
    tl.to(container, { opacity: 0, y: -50, duration: 0.5 });

    // Save the timeline to the ref
    animationRef.current = tl;

    // Scroll event listener
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Define the point where you want the animation to start
      const triggerPoint = 300;

      // Check if we've scrolled past the trigger point
      if (scrollPosition > triggerPoint) {
        // If animation is not already playing, play it forward
        if (!tl.isActive()) {
          tl.play();
        }
      } else {
        // If animation is not already reversed, reverse it
        if (tl.isActive()) {
          tl.reverse();
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (idx) => {
    setHoveredIndex(idx);
    gsap.to(`.rounded-div-${idx}`, { opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = (idx) => {
    setHoveredIndex(null);
    gsap.to(`.rounded-div-${idx}`, { opacity: 0, duration: 0.3 });
  };

  return (
    <>
      <section className="fixed top-6 right-3 bg-[blue]  z-[201]">
        <motion.div
          ref={circleAnimate}
          transition={{ duration: 0.3, ease: "easeIn" }}
          data-value="-7"
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="bg-[#1C1D20] w-20 h-20 rounded-full fixed top-6 right-3 z-[200] cursor-pointer flex items-center justify-center overflow-hidden">
          <div
            ref={overlayRef}
            className="absolute w-full h-full bg-[blue] rounded-full top-full"
          />
          <div
            ref={MenuAnimate}
            className="rounded-full w-full h-full flex items-center justify-center ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg">
              <line
                ref={line1Ref}
                x1="1"
                y1="7"
                x2="29"
                y2="7"
                stroke="gray"
                strokeWidth="2"
              />
              <line
                ref={line2Ref}
                x1="1"
                y1="15"
                x2="29"
                y2="15"
                stroke="gray"
                strokeWidth="2"
              />
              <line
                ref={line3Ref}
                x1="1"
                y1="23"
                x2="29"
                y2="23"
                stroke="gray"
                strokeWidth="2"
              />
            </svg>
          </div>
        </motion.div>
      </section>
      <motion.section
        animate={{
          transform: isOpen
            ? "translate(calc(0% - 0vw), 0) rotate(0.001deg)"
            : "translate(calc(100% + 6vw),0) rotate(0.001deg)",
        }}
        transition={{ transform: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } }}
        className="fixed right-0 h-screen w-full lg:w-2/6 z-[99] bg-[#141517]">
        <div className="absolute flex flex-col justify-evenly items-center w-full h-full">
          <div className=" max-h-[60vh] relative z-[98]  min-w-[60%] h-full flex flex-col  items-start gap-[0.5em]">
            <p className="text-[#adb4b6] mb-[1em]">Navigation</p>
            <div className="h-[1px] w-full bg-[#adb4b6] mb-[2em]" />
            {arr.map((item, idx) => (
              <section
                key={idx}
                className="flex items-center gap-[1em]"
                onMouseEnter={() => handleHover(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}>
                {hoveredIndex === idx && (
                  <div
                    className={`w-4 h-4 bg-white rounded-full mt-[10px] rounded-div-${idx}`}
                  />
                )}
                <button onClick={() => handleNavigation(item.route)}>
                  <h1 className="text-[4em] text-white">{item.name}</h1>
                </button>
              </section>
            ))}
          </div>

          <div className="flex gap-[2em] items-center justify-center z-[97]">
            <div className="flex flex-col mt-[-24px]">
              <h1 className="text-[gray] text-[0.9em] tracking-wide">
                Socials
              </h1>
              <p className=" text-white">Twitter</p>
            </div>
            <p className=" text-white">insta</p>
            <p className=" text-white">LinkedIn</p>
          </div>
        </div>
        <motion.div
          animate={{
            borderRadius: isOpen ? 0 : "60% 0 0 60%",
            transform: isOpen ? "translateX(-5%)" : "translateX(-40%)",
          }}
          transition={{
            duration: 0.85,
            ease: [0.7, 0, 0.2, 1],
          }}
          className="bg-[#141517] h-screen w-1/2 relative left-[35px] z-[96]"
        />
      </motion.section>
    </>
  );
}

export default SideBar;
