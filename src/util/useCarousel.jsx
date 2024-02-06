import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

const useCarousel = (wrapperRef, boxRef, gap = 60, height = 450, id) => {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const boxwrapper = boxRef.current;
    const boxes = boxwrapper.children;
    const boxWidth = boxwrapper.firstChild.clientWidth;

    const wrapWidth = boxes.length * (boxWidth + gap);

    gsap.set(wrapper, { height });

    for (let i = 0; i < boxes.length; i++) {
      let box = boxes[i];
      gsap.set(box, { x: i * (boxWidth + gap), left: -boxWidth });
    }

    let wrapProgress = gsap.utils.wrap(0, 1);
    let snapBox = gsap.utils.snap(boxWidth);

    const proxy = document.createElement("div");
    wrapper.appendChild(proxy);
    wrapper.appendChild(proxy);
    let props = gsap.getProperty(proxy);

    let animation = gsap
      .to(".carousel-item", {
        duration: 1,
        x: `+=${wrapWidth}`,
        ease: "power2.inOut",
        paused: true,
        repeat: -1,
        modifiers: {
          x: function (x, target) {
            x = parseFloat(x) % wrapWidth;
            return x + "px";
          },
        },
      })
      .progress(1 / boxes.length);

    Draggable.create(proxy, {
      trigger: wrapper,
      throwProps: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapBox,
      },
      throwResistance: 0,
      force3D: true, // Enable GPU acceleration
      ease: "Power2.easeInOut", // Use an easing function for smoother animations
    });
    ``;
    function updateProgress() {
      const proxyX = gsap.getProperty(proxy, "x"); // use the current proxy element
      animation.progress(wrapProgress(proxyX / wrapWidth));
    }

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.1,
      onUpdate: (self) => {
        const progress = self.progress;
        const targetX = progress * wrapWidth;
        gsap.set(proxy, { x: targetX }); // use the current proxy element
        updateProgress();
      },
    });

    return () => {
      animation.kill();
      Draggable.get(proxy).kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
      wrapper.removeChild(proxy); // remove the current proxy element when unmounting
    };
  }, [wrapperRef, boxRef, gap, height]);
};

export default useCarousel;
