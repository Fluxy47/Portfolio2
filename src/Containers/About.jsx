import React, { useEffect, useRef } from "react";
import NavBar from "../Components/NavBar";
import pic from "../assets/pic.jpg";
import Ukiyo from "ukiyojs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";

gsap.registerPlugin(ScrollTrigger);

function About({ setIsVisible }) {
  // clamp(x,x,7em)

  const Cont = useRef(null);
  const imageRef = useRef(null);
  const imageCont = useRef(null);
  const elementRef = useRef();
  // useEffect(() => {
  //   const images = myRef.current;
  //   new Ukiyo(images);
  // }, []);

  useEffect(() => {
    const container = imageCont.current;
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      },
    });

    tl.fromTo(
      image,
      {
        yPercent: -20,
        ease: "none",
      },
      {
        yPercent: 20,
        ease: "none",
      }
    );
  }, []);

  useEffect(() => {
    // Select the carousel container using the ref
    const element = elementRef.current;

    // Create a timeline for the animations
    const tl = gsap.timeline();

    // Set initial position
    gsap.set(element, { y: "-20%" });

    // Add animation to the timeline
    tl.to(element, {
      y: "-=70%",
      scrollTrigger: {
        trigger: element,
        scrub: 0.5,
      },
    });

    // ScrollTrigger update on component unmount
    return () => {
      tl.kill();

      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  console.log("window", window.innerWidth);

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
    });
  }, []);

  return (
    <div>
      <NavBar color="black" setIsVisible={setIsVisible} />
      <section
        ref={Cont}
        className="flex justify-center items-center mt-[12em]">
        <div className=" flex flex-col w-full max-w-[60vw] lg:max-w-[35em] xl:max-w-[45em] items-start  mr-[1em] gap-[5.5em]">
          <h1
            style={{ fontSize: "calc(clamp(3.25em, 4.5vw, 6em) * .875)" }}
            className=" leading-[1.2]">
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
        <div
          ref={imageCont}
          className="overflow-hidden border-2 border-red-950 w-full lg:max-w-[70%]">
          <img
            ref={imageRef}
            src=" https://ik.imagekit.io/fluxy/DesignProject/arr4.jpg?tr=w-1200"
            className=" w-full"
          />
        </div>
      </section>

      {/* work here */}
      <section
        ref={pinContainer}
        className="flex flex-col md:flex-row justify-center relative mt-[5em] md:mt-0 z-[40] gap-[4em] md:gap-0">
        <section className="md:h-screen flex justify-center items-center md:ml-[50px]">
          <div
            ref={pinElement}
            className="md:border-l-[5px] border-[red] w-full md:max-w-[40em] xl:max-w-[48em]  flex items-center justify-center">
            <h1 className="text-[3em] md:text-[3.5rem] lg:text-[5rem] xl:text-[7rem] tracking-tighter leading-[1.02] ml-[30px]">
              I CAN HELP YOU WITH
            </h1>
          </div>
        </section>
        <section className="flex flex-col md:mt-[16em] md:mr-[80px] mx-[20px] gap-[4em] md:gap-0">
          <div className=" md:h-screen flex items-center justify-center ">
            <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
              <p className="text-[#adb4b6] text-[0.8em]">01</p>
              <div className="h-[1px] w-full bg-[#adb4b6] " />
              <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
                Design
              </h2>{" "}
              <div className="w-full max-w-[50em]">
                <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                  With a solid track record in designing websites and apps, I
                  deliver strong and user-friendly digital designs. Solid
                  company branding is the foundation of any succesful website.
                </p>
              </div>
            </div>
          </div>

          <div className=" md:h-screen flex items-center justify-center ">
            <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
              <p className="text-[#adb4b6] text-[0.8em]">01</p>
              <div className="h-[1px] w-full bg-[#adb4b6] " />
              <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
                Design
              </h2>{" "}
              <div className="w-full max-w-[50em]">
                <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                  With a solid track record in designing websites and apps, I
                  deliver strong and user-friendly digital designs. Solid
                  company branding is the foundation of any succesful website.
                </p>
              </div>
            </div>
          </div>

          <div className=" md:h-screen flex items-center justify-center ">
            <div className="  w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
              <p className="text-[#adb4b6] text-[0.8em]">01</p>
              <div className="h-[1px] w-full bg-[#adb4b6] " />
              <h2 className=" text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
                Design
              </h2>{" "}
              <div className="w-full max-w-[50em]">
                <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                  With a solid track record in designing websites and apps, I
                  deliver strong and user-friendly digital designs. Solid
                  company branding is the foundation of any succesful website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div
        ref={elementRef}
        className="bg-white w-full h-[500px] rounded-br-[25%] rounded-bl-[25%] absolute z-[39] pt-[250px]"></div>
      <Footer />
    </div>
  );
}

export default About;

// <section className="flex flex-col w-[90vw] mx-auto justify-center items-center gap-[2em] mt-[5em] pb-[500px]">
//         <h1
//           style={{ fontSize: "calc(clamp(3.25em, 5vw, 4.5em) * .75)" }}
//           className="self-start">
//           I can help you with ...
//         </h1>
//         <div className="flex flex-col md:flex-row w-full gap-[2em] md:gap-[3em]">
//           <div className="flex flex-col gap-[2em]">
//             <p className="text-[#adb4b6] text-[0.8em]">01</p>
//             <div className="h-[1px] w-full bg-[#adb4b6] " />
//             <h2 className="text-3xl font-[450]">Design</h2>
//             <div className="w-full max-w-[50em]">
//               <p>
//                 With a solid track record in designing websites and apps, I
//                 deliver strong and user-friendly digital designs. Solid company
//                 branding is the foundation of any succesful website.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-[2em]">
//             <p className="text-[#adb4b6] text-[0.8em]">02</p>
//             <div className="h-[1px] w-full bg-[#adb4b6] " />
//             <h2 className="text-3xl">Development</h2>
//             <div className="w-full max-w-[50em]">
//               <p>
//                 I build scalable websites from scratch that fit seamlessly with
//                 design. My focus is on micro animations, transitions and
//                 interaction. For content management I use Kirby CMS.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-[2em]">
//             <p className="text-[#adb4b6] text-[0.8em]">03</p>
//             <div className="h-[1px] w-full bg-[#adb4b6] " />
//             <h2 className="text-3xl">The full package</h2>
//             <div className="w-full max-w-[50em]">
//               <p>
//                 A complete website from concept to implementation, that's what
//                 makes me stand out. My great sense for design and my development
//                 skills enable me to create kick-ass projects.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
