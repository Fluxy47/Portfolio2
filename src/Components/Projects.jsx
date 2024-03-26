import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";
import useCarousel from "../util/UseCarousel";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const arr = [
  {
    src: "https://images.unsplash.com/photo-1673865587123-0ab545ad623e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "project1",
  },
  {
    src: "https://images.unsplash.com/photo-1695753723797-d505375d13a3?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "project2",
  },
  {
    src: "https://images.unsplash.com/photo-1697499238636-8e002b0fd7f0?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "project3",
  },
  {
    src: "https://images.unsplash.com/photo-1581857605049-6cf608e10d4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "project4",
  },
  {
    src: "https://images.unsplash.com/photo-1704904902693-11913f35c990?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "project5",
  },
];

const arr2 = [
  {
    src: "https://via.placeholder.com/320?text=1",
    id: "i",
  },
  {
    src: "https://via.placeholder.com/320?text=2",
    id: "m",
  },
  {
    src: "https://via.placeholder.com/320?text=3",
    id: "a",
  },
  {
    src: "https://via.placeholder.com/320?text=4",
    id: "g",
  },
  {
    src: "https://via.placeholder.com/320?text=5",
    id: "e",
  },
];

// mt-[5em] md:mt-[20em]

function Projects() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(`/work/${route}`);
  };

  const Caraousel1 = useRef();
  const Caraousel2 = useRef();
  const Cont = useRef();
  const mycont = useRef();

  // useEffect(() => {
  //   // Select the carousel container using the ref
  //   const carousel1 = Caraousel1.current;
  //   const carousel2 = Caraousel2.current;

  //   // Create a timeline for the animations
  //   const tl = gsap.timeline();
  //   const tl2 = gsap.timeline();

  //   // Set initial position
  //   gsap.set(carousel1, { x: "-0%" });
  //   gsap.set(carousel2, { x: "-13.5%" });

  //   // Add animation to the timeline
  //   tl.to(carousel1, {
  //     x: "-=10%",
  //     scrollTrigger: {
  //       trigger: carousel1,
  //       scrub: 0.5,
  //     },
  //   });

  //   tl.to(carousel2, {
  //     x: "+=10%",
  //     scrollTrigger: {
  //       trigger: carousel2,
  //       scrub: 0.5,
  //     },
  //   });

  //   // ScrollTrigger update on component unmount
  //   return () => {
  //     tl.kill();
  //     tl2.kill();
  //     ScrollTrigger.getAll().forEach((instance) => instance.kill());
  //   };
  // }, []);

  // const wrapperRef = useRef(null);
  // const myRef = useRef();
  // const proxy1 = useRef();
  // const wrapperRef2 = useRef(null);
  // const myRef2 = useRef();
  // const proxy2 = useRef();

  // useCarousel(wrapperRef, myRef, proxy1);
  // useCarousel(wrapperRef2, myRef2, proxy2);
  const containerRef = useRef();

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  useEffect(() => {
    // Define ScrollTrigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 30%",
      end: "bottom bottom",

      onToggle: ({ direction }) => {
        if (direction === 1) {
          // Scrolling down
          instanceRef.current?.next();
        } else {
          // Scrolling up
          instanceRef.current?.prev();
        }
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [sliderRef2, instanceRef2] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  useEffect(() => {
    // Define ScrollTrigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 30%",
      end: "bottom bottom",
      markers: true,
      onToggle: ({ direction }) => {
        if (direction === 1) {
          // Scrolling down
          instanceRef2.current?.prev();
        } else {
          // Scrolling up
          instanceRef2.current?.next();
        }
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-evenly  relative gap-[2em]  pb-[250px] z-[40] ">
      <section ref={sliderRef} className="keen-slider mt-[8em]">
        {arr.map((item, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-[gray] max-h-[400px] w-full min-w-[250px] flex justify-center items-center">
            <img
              src={item.src}
              alt=""
              className="w-[80%] h-[80%] object-cover"
            />
          </div>
        ))}
      </section>

      <section ref={sliderRef2} className="keen-slider">
        {arr.map((item, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-[gray] max-h-[400px] w-full min-w-[250px] flex justify-center items-center">
            <img
              src={item.src}
              alt=""
              className="w-[80%] h-[80%] object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
