import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TemArr = [
  {
    src: "https://ik.imagekit.io/fluxy/DesignProject/arr1min.jpg?tr=w-1200",
    srcset: `
      https://ik.imagekit.io/fluxy/DesignProject/arr1min.jpg?tr=w-400 400w,
      https://ik.imagekit.io/fluxy/DesignProject/arr1min.jpg?tr=w-800 800w,
      https://ik.imagekit.io/fluxy/DesignProject/arr1min.jpg?tr=w-1200 1200w
    `,
    id: 1,
    hash: "L88N2p~T=_r^0i9vEMRkrFM#S2ox",
    text: "Introduction",
  },
  {
    src: "https://ik.imagekit.io/fluxy/DesignProject/arr2min.jpg?tr=w-1200",
    srcset: `
      https://ik.imagekit.io/fluxy/DesignProject/arr2min.jpg?tr=w-400 400w,
      https://ik.imagekit.io/fluxy/DesignProject/arr2min.jpg?tr=w-800 800w,
      https://ik.imagekit.io/fluxy/DesignProject/arr2min.jpg?tr=w-1200 1200w
    `,
    id: 2,
    hash: "L39Q$z02G,}A3+^Qm-Eg9bt*-VE%",
    text: "Key lessons",
  },
  {
    src: "https://ik.imagekit.io/fluxy/DesignProject/arr3min.jpg?tr=w-1200",
    srcset: `
      https://ik.imagekit.io/fluxy/DesignProject/arr3min.jpg?tr=w-400 400w,
      https://ik.imagekit.io/fluxy/DesignProject/arr3min.jpg?tr=w-800 800w,
      https://ik.imagekit.io/fluxy/DesignProject/arr3min.jpg?tr=w-1200 1200w
    `,
    id: 3,
    hash: "L3Dl=}0J00~qQ*-;00oz00-p?AM~",
    text: " Habit Loop",
  },
  {
    src: "https://ik.imagekit.io/fluxy/DesignProject/arr4.jpg?tr=w-1200",
    srcset: `
      https://ik.imagekit.io/fluxy/DesignProject/arr4.jpg?tr=w-400 400w,
      https://ik.imagekit.io/fluxy/DesignProject/arr4.jpg?tr=w-800 800w,
      https://ik.imagekit.io/fluxy/DesignProject/arr4.jpg?tr=w-1200 1200w
    `,
    id: 4,
    hash: "LBB|HS_30000D*9F%M~q9FIUxax[",
    text: "Creating Habits",
  },
  {
    src: "https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-1200",
    srcset: `
      https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-400 400w,
      https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-800 800w,
      https://ik.imagekit.io/fluxy/DesignProject/arr5.jpg?tr=w-1200 1200w
    `,
    id: 5,
    hash: "L6BejkTJ0M030gIq}?%K0N#lX,^%",
    text: "Breaking habits",
  },
];

function Project2() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    let dragRatio = 1;
    let scrollTo;

    // gsap.set(containerRef.current, { xPercent: 20 });
    gsap.set(sections, { xPercent: 150 });

    const scrollTween = gsap.to(sections, {
      xPercent: -80 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        pin: true,
        scrub: 0.1,
        markers: true,
        onRefresh: (self) => {
          const sectionsWidth = sections[0].offsetWidth;
          dragRatio =
            (self.end - self.start) / ((sections.length - 1) * sectionsWidth);
        },
        end: "+=3000",
      },
    });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top bottom",
    //     scrub: true, // Enables smooth scrolling animation
    //   },
    // });

    // tl.fromTo(
    //   ".myclass",
    //   {
    //     xPercent: -5,
    //     ease: "none",
    //   },
    //   {
    //     xPercent: 5,
    //     ease: "none",
    //   }
    // );

    // Clean up
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative pb-[250px] gap-[2em] z-[40] flex overflow-hidden">
      {[...Array(5).keys()].map((index) => (
        <div
          key={index}
          className=" border-4 border-black flex-shrink-0 max-h-[60vh] w-full max-w-[450px] panel overflow-visible">
          <img
            src=" https://ik.imagekit.io/fluxy/DesignProject/arr4.jpg?tr=w-800"
            alt=""
            className="absolute w-[100vw] h-full myclass"
          />
        </div>
      ))}
    </div>
  );
}

export default Project2;
