import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const useTextEffect = (ref, bgColor, fgColor) => {
  useEffect(() => {
    if (!ref.current) return;

    const text = new SplitType(ref.current, { types: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true,
        toggleActions: "play play reverse reverse",
      },
    });

    tl.fromTo(
      text.chars,
      {
        color: bgColor,
      },
      {
        color: fgColor,
        duration: 0.3,
        stagger: 0.02,
      }
    );
  }, [ref, bgColor, fgColor]);
};

export default useTextEffect;
