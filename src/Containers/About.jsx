import React, { useEffect, useRef } from "react";
import NavBar from "../Components/NavBar";
import pic from "../assets/pic.jpg";
import Ukiyo from "ukiyojs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  // clamp(x,x,7em)

  const Cont = useRef(null);
  const imageRef = useRef(null);
  // useEffect(() => {
  //   const images = myRef.current;
  //   new Ukiyo(images);
  // }, []);

  useEffect(() => {
    const element = imageRef.current;
    const Container = Cont.current;
    gsap.to(element, {
      scrollTrigger: {
        trigger: Container,
        start: "top bottom", // Animation starts when the bottom of the element is at the center of the viewport
        end: "bottom top",
        scrub: 0.2, // Adjust this value for smoother or less smooth movement
        onUpdate: (self) => {
          const direction = self.direction;

          // Animate object position based on scroll direction
          gsap.to(element, {
            objectPosition: `+=0% ${direction === 1 ? "-10%" : "10%"}`, // Adjust the value accordingly
            overwrite: true,
          });
        },
      },
    });
  }, []);

  return (
    <div>
      <NavBar color="black" />
      <section
        ref={Cont}
        className="flex justify-center items-center mt-[12em]"
      >
        <div className=" flex flex-col w-full max-w-[60vw] lg:max-w-[35em] xl:max-w-[45em] items-start  mr-[1em] gap-[5.5em]">
          <h1
            style={{ fontSize: "calc(clamp(3.25em, 6vw, 7em) * .875)" }}
            className=" leading-[1.2]"
          >
            Helping brands thrive in the digital world
          </h1>

          <div className="w-full flex flex-col relative">
            <div className="h-[1px] w-[110%] bg-[#adb4b6] " />
            <div className="w-40 h-40 rounded-full bg-[blue] absolute top-[-5em] right-10"></div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col lg:flex-row mt-[8em] justify-evenly items-center w-[90vw] mx-auto gap-[4em] lg:gap-[1em]">
        <div className="flex flex-col  w-full max-w-[90%] lg:max-w-[16em] gap-[1em] lg:self-start mt-[3em]">
          <p className="font-medium text-[#313232]">
            I help companies from all over the world with tailor-made solutions.
            With each project, I push my work to new horizons, always putting
            quality first.
          </p>
          <span>Always exploring</span>
        </div>
        <img ref={imageRef} src={pic} className=" w-full  lg:max-w-[70%] " />
      </section>
      <section className="flex flex-col w-[90vw] mx-auto justify-center items-center gap-[2em] mt-[5em]">
        <h1
          style={{ fontSize: "calc(clamp(3.25em, 5vw, 4.5em) * .75)" }}
          className="self-start"
        >
          I can help you with ...
        </h1>
        <div className="flex flex-col md:flex-row w-full gap-[2em] md:gap-[3em]">
          <div className="flex flex-col gap-[2em]">
            <p className="text-[#adb4b6] text-[0.8em]">01</p>
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <h2 className="text-3xl font-[450]">Design</h2>
            <div className="w-full max-w-[50em]">
              <p>
                With a solid track record in designing websites and apps, I
                deliver strong and user-friendly digital designs. Solid company
                branding is the foundation of any succesful website.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[2em]">
            <p className="text-[#adb4b6] text-[0.8em]">02</p>
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <h2 className="text-3xl">Development</h2>
            <div className="w-full max-w-[50em]">
              <p>
                I build scalable websites from scratch that fit seamlessly with
                design. My focus is on micro animations, transitions and
                interaction. For content management I use Kirby CMS.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[2em]">
            <p className="text-[#adb4b6] text-[0.8em]">03</p>
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <h2 className="text-3xl">The full package</h2>
            <div className="w-full max-w-[50em]">
              <p>
                A complete website from concept to implementation, that's what
                makes me stand out. My great sense for design and my development
                skills enable me to create kick-ass projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
