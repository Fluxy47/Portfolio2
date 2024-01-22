import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";

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

// mt-[5em] md:mt-[20em]

function Projects() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(`/work/${route}`);
  };

  const Caraousel1 = useRef();
  const Caraousel2 = useRef();
  const Cont = useRef();

  useEffect(() => {
    // Select the carousel container using the ref
    const carousel1 = Caraousel1.current;
    const carousel2 = Caraousel2.current;

    // Create a timeline for the animations
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    // Set initial position
    gsap.set(carousel1, { x: "-0%" });
    gsap.set(carousel2, { x: "-13.5%" });

    // Add animation to the timeline
    tl.to(carousel1, {
      x: "-=10%",
      scrollTrigger: {
        trigger: carousel1,
        scrub: 0.5,
      },
    });

    tl.to(carousel2, {
      x: "+=10%",
      scrollTrigger: {
        trigger: carousel2,
        scrub: 0.5,
      },
    });

    // ScrollTrigger update on component unmount
    return () => {
      tl.kill();
      tl2.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  useEffect(() => {
    const carousel = Cont.current;

    // Enable Draggable functionality
    Draggable.create(carousel, {
      type: "x",
      inertia: true,
      throwProps: true,
      bounds: { minX: -800, maxX: 300 }, // Adjust the drag limits
      ease: "power2.out", // Use a power2 easing function for smoother motion
    });

    return () => {
      // Clean up Draggable instance on component unmount
      Draggable.get(carousel).kill();
    };
  }, []);

  return (
    <div className="border-4 border-black min-h-screen overflow-hidden flex flex-col gap-[5em] z-50">
      <section ref={Cont} className="flex flex-grow  w-full ">
        <div ref={Caraousel1} className="flex gap-[4em]">
          {arr.map((item, idx) => (
            <div
              key={idx}
              className="bg-[gray] max-h-[450px] w-full min-w-[550px] flex justify-center items-center"
              onClick={() => handleNavigation(item.route)}
            >
              <img src="" className="w-[80%] h-[60%]" />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-grow  w-full ">
        <div ref={Caraousel2} className="flex gap-[4em]">
          {arr.map((item, idx) => (
            <div
              key={idx}
              className="bg-[gray] max-h-[450px] w-full min-w-[550px] flex justify-center items-center"
              onClick={() => handleNavigation(item.route)}
            >
              <img src="" className="w-[80%] h-[60%]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
