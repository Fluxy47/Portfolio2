import React from "react";
import NavBar from "./NavBar";

function Landing() {
  return (
    <div className="min-h-[105dvh] bg-[#999D9E]">
      <NavBar color="white" />
      <section className="hidden md:flex w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between">
        <div className="bg-[#1C1D20] h-[120px] w-[270px] rounded-r-full flex justify-center items-center">
          <div className="flex w-full justify-around">
            <span className="text-white text-center">
              <p className="text-xl mt-[5px]">Located</p>
              <p className="text-xl">in London</p>
            </span>
            <div className="lg:w-[70px] w-[50px] h-[50px] lg:h-[70px] rounded-full bg-[#999D9E]"></div>
          </div>
        </div>
        <div className=" mr-[30px] lg:mr-[145px] text-white font-normal tracking-tighter lg:tracking-wider">
          <h1 className="text-[1.8em] lg:text-[2.4em] lg:mb-[5px]">
            Freelance
          </h1>
          <h1 className=" text-[1.8em] lg:text-[2.4em] ">
            Designer & Developer
          </h1>
        </div>
      </section>
      {/* <section class="container">
   <p class="marquee-text">Muhammad Asad ---</p>
</section> */}
      <div className=" w-full absolute bottom-[30%] md:bottom-0">
        <div className="flex items-center justify-center text-nowrap overflow-hidden text-white">
          <p className="loop-text text-[8em] md:text-[13em]">Muhammad Asad</p>
          {/* <div className='loop' /> */}
          <p className="loop-text text-[8em] md:text-[13em]">Muhammad Asad</p>
          {/* <div className='loop' /> */}
          <p className="loop-text text-[8em] md:text-[13em]">Muhammad Asad</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
