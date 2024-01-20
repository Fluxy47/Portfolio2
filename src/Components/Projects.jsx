import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  const Cont = useRef();
  const Caraousel1 = useRef();
  const Caraousel2 = useRef();
  const Container = Cont.current;
  const element1 = Caraousel1.current;
  const element2 = Caraousel2.current;
  console.log("wicked", Container);
  console.log("wicked2", element1);
  console.log("wicked3", element2);

  useEffect(() => {
    if (!Container || !element1 || !element2) {
      // Log a warning or handle the case where refs are not initialized
      console.log("One or more refs are not initialized.");
      return;
    }
    console.log("please work");
    gsap.to(element1, {
      scrollTrigger: {
        trigger: Container,
        start: "top bottom", // Animation starts when the bottom of the element is at the center of the viewport
        end: "bottom top",
        scrub: 0.2, // Adjust this value for smoother or less smooth movement
        onUpdate: (self) => {
          // Check the direction of scroll
          const direction = self.direction;

          // Update the animation based on scroll direction
          gsap.to(element1, {
            x: direction === -1 ? `-50px` : `50px`, // move right if scrolling up, left if scrolling down
            ease: "power1.out",
            overwrite: "auto",
          });
        },
      },
    });

    gsap.to(element2, {
      scrollTrigger: {
        trigger: Container,
        start: "top bottom", // Animation starts when the bottom of the element is at the center of the viewport
        end: "bottom top",
        scrub: 0.2, // Adjust this value for smoother or less smooth movement
        onUpdate: (self) => {
          // Check the direction of scroll
          const direction = self.direction;

          // Update the animation based on scroll direction
          gsap.to(element2, {
            x: direction === 1 ? `-50px` : `50px`, // move right if scrolling up, left if scrolling down
            ease: "power1.out",
            overwrite: "auto",
          });
        },
      },
    });
  }, [Container, element1, element2]);

  // animate={{ transform: "translateX(100%)" }}
  // transition={{ ease: "linear", duration: 500, repeat: Infinity }}
  return (
    <div
      ref={Cont}
      className="border-4 border-black min-h-screen  overflow-hidden flex flex-col gap-[5em]"
    >
      <section className="flex flex-grow  w-full ">
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
