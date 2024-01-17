import React from "react";

const arr = ["Work", "About", "Contact"];

function Landing() {
  return (
    <div className="min-h-[105dvh] bg-[#999D9E]">
      <section className=" flex justify-between pt-[30px] md:pt-[35px">
        <h2 className="ml-3 md:ml-10 tracking-wider font-bold  md:text-xl">
          @CodeByDenis
        </h2>
        <div className="md:flex mr-10 justify-evenly  gap-[2em] hidden">
          {arr.map((item, idx) => (
            <h2 className="text-xl font-bold tracking-wider" key={idx}>
              {item}
            </h2>
          ))}
        </div>
        <h2 className="tracking-wider font-bold md:hidden mr-3">Menu</h2>
      </section>
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
        <div className="lg:mt-[15px] mr-[30px] lg:mr-[145px] text-white font-normal tracking-tighter lg:tracking-wider">
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
      <div className=" w-full absolute bottom-[30%] md:bottom-[10%]">
        <div className="flex items-center justify-center text-nowrap overflow-hidden">
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
