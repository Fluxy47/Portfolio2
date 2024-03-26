import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Testing() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  const pinContainer = useRef();
  const pinElement = useRef();

  useEffect(() => {
    const Container = pinContainer.current;
    const element = pinElement.current;

    ScrollTrigger.create({
      trigger: Container,
      start: "top top",
      end: "bottom bottom",
      pin: element,
      scrub: 0.5,
      markers: true,
    });
  }, []);

  return (
    <section className="flex justify-center gap-[10em] border-4 border-black">
      <section>
        <div className="md:h-screen flex items-center justify-center ">
          <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
            <p className="text-[#adb4b6] text-[0.8em]">01</p>
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
              Design
            </h2>{" "}
            <div className="w-full max-w-[50em]">
              <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                With a solid track record in designing websites and apps, I
                deliver strong and user-friendly digital designs. Solid company
                branding is the foundation of any succesful website.
              </p>
            </div>
          </div>
        </div>
        <div className="md:h-screen flex items-center justify-center ">
          <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
            <p className="text-[#adb4b6] text-[0.8em]">01</p>
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
              Design
            </h2>{" "}
            <div className="w-full max-w-[50em]">
              <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                With a solid track record in designing websites and apps, I
                deliver strong and user-friendly digital designs. Solid company
                branding is the foundation of any succesful website.
              </p>
            </div>
          </div>
        </div>
        <div className="md:h-screen flex items-center justify-center ">
          <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
            <p className="text-[#adb4b6] text-[0.8em]">01</p>
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
              Design
            </h2>{" "}
            <div className="w-full max-w-[50em]">
              <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                With a solid track record in designing websites and apps, I
                deliver strong and user-friendly digital designs. Solid company
                branding is the foundation of any succesful website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col  w-[50vh] h-[45vh] border-[blue] border-4">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1581857605049-6cf608e10d4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1581857605049-6cf608e10d4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1581857605049-6cf608e10d4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
}

export default Testing;
