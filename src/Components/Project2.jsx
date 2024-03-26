import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@uidotdev/usehooks";
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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    let dragRatio = 1;
    let scrollTo;

    // gsap.set(containerRef.current, { xPercent: 20 });
    gsap.set(sections, { xPercent: isSmallDevice ? 50 : 150 });

    const scrollTween = gsap.to(sections, {
      xPercent: isSmallDevice
        ? -110 * (sections.length - 1)
        : -80 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        pin: true,
        scrub: 0.1,
        onRefresh: (self) => {
          const sectionsWidth = sections[0].offsetWidth;
          dragRatio =
            (self.end - self.start) / ((sections.length - 1) * sectionsWidth);
        },
        end: "+=3000",
      },
    });
  }, []);

  const myarr = [
    { name: "project 1", id: 1 },
    { name: "project 2", id: 2 },
    { name: "project 3", id: 3 },
    { name: "project 4", id: 4 },
    { name: "project 5", id: 5 },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative pb-[250px] gap-[2em] z-[40] flex overflow-hidden">
      {myarr.map((item) => (
        <div
          key={item.id}
          className=" border-4 border-black flex-shrink-0 max-h-[50vh] sm:max-h-[60vh] w-full max-w-[250px] sm:max-w-[450px] panel overflow-visible lg:translate-x-[-80%] 2xl:translate-x-[70%]">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] text-white text-3xl">
            {item.name}
          </h1>
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

// {[...Array(5).keys()].map((index) => (
