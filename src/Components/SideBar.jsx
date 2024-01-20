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

const arr = [
  { name: "Home", route: "/" },
  { name: "Work", route: "/Work" },
  { name: "About", route: "/About" },
  { name: "Contact", route: "/Contact" },
];

function SideBar() {
  const scrollY = useRef();
  const controls = useAnimation();
  const circle = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const Menu = useRef(null);
  const MenuAnimate = useMouseMovementAnimation(Menu);
  const circleAnimate = useMouseMovementAnimation(circle);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollYmotionValue = useMotionValue(
    window.pageYOffset || window.scrollY
  );

  useEffect(() => {
    const trackScroll = () => {
      scrollYmotionValue.set(window.pageYOffset || window.scrollY);
      scrollY.current = scrollYmotionValue.current;
      const scrollTriggerPercentage = 0.05;
      const scrollTriggerPoint =
        (window.innerHeight || document.documentElement.clientHeight) *
        scrollTriggerPercentage;

      if (scrollY.current > scrollTriggerPoint) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener("scroll", trackScroll);

    return () => window.removeEventListener("scroll", trackScroll);
  }, [scrollYmotionValue]);

  const handleNavigation = (route) => {
    navigate(route);
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

  return (
    <>
      <section className="fixed top-6 right-3 bg-[blue]  z-[201]">
        <motion.div
          ref={circleAnimate}
          initial={{ opacity: 0 }}
          animate={controls}
          //   animate={{ transform: `translate(${position.x}px, ${position.y}px)`}}
          transition={{ duration: 0.3, ease: "easeIn" }}
          //    ref={elementRef2}
          data-value="-7"
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="bg-[#1C1D20] w-20 h-20 rounded-full fixed top-6 right-3 z-[200] cursor-pointer flex items-center justify-center"
        >
          <div
            ref={MenuAnimate}
            className="rounded-full w-full h-full flex items-center justify-center "
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
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
        className="fixed right-0 h-screen w-full lg:w-2/6 z-[99] bg-[#3D3B39]"
      >
        <div className="absolute flex justify-center items-center w-full h-full">
          <div className="border-2 max-h-[60vh] relative z-[98]  min-w-[60%] h-full flex flex-col  items-start gap-[0.5em]">
            {arr.map((item, idx) => (
              <section key={idx} className="flex items-center gap-[1em]">
                <div className="w-4 h-4 bg-white rounded-full mt-[10px]" />
                <button onClick={() => handleNavigation(item.route)}>
                  <motion.h1 className="text-[4em]">{item.name}</motion.h1>
                  {/* {item} */}
                </button>
              </section>
            ))}
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
          className="bg-[#3D3B39] h-screen w-1/2 relative left-[35px] z-[96]"
        />
      </motion.section>
    </>
  );
}

export default SideBar;
