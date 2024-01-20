import React from "react";
import Projects from "../Components/Projects";
import NavBar from "../Components/NavBar";

function Work() {
  return (
    <div className="min-h-screen">
      <NavBar color="black" />
      <section className="flex items-center justify-center ">
        <div className="flex items-start  w-full max-w-[55em] ">
          <h1 className="text-[5em] leading-tight">
            Creating next level digital products
          </h1>
        </div>
      </section>
      <Projects />
    </div>
  );
}

export default Work;
