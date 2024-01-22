import { useEffect } from "react";
import gsap from "gsap";

const useHoverAnimation = (circle, overlayRef) => {
  useEffect(() => {
    const container = circle.current;
    const overlay = overlayRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(overlay, { top: "0%", opacity: 1, duration: 0.3 });

    const handleHoverEnter = () => {
      tl.restart();
    };

    const handleHoverLeave = () => {
      gsap.to(overlay, { top: "-100%", opacity: 1, duration: 0.3 });
    };

    container.addEventListener("mouseenter", handleHoverEnter);
    container.addEventListener("mouseleave", handleHoverLeave);

    return () => {
      container.removeEventListener("mouseenter", handleHoverEnter);
      container.removeEventListener("mouseleave", handleHoverLeave);
    };
  }, [circle, overlayRef]); // Include dependencies if needed
};

export default useHoverAnimation;
