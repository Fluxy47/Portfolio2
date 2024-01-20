import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const arr = [
 {src:"https://images.unsplash.com/photo-1673865587123-0ab545ad623e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",route:"project1"},
 {src:"https://images.unsplash.com/photo-1695753723797-d505375d13a3?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",route:"project2"},
 {src:  "https://images.unsplash.com/photo-1697499238636-8e002b0fd7f0?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",route:"project3"},
 {src: "https://images.unsplash.com/photo-1581857605049-6cf608e10d4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",route:"project4"},
 {src:"https://images.unsplash.com/photo-1704904902693-11913f35c990?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",route:"project5"},
]

// mt-[5em] md:mt-[20em]

function Projects() {
  const navigate = useNavigate()
  const handleNavigation = (route) => {
    navigate(`/work/${route}`)
  }
  
  return (
    <div className="border-4 border-black min-h-screen  overflow-hidden flex flex-col gap-[5em]">
      <section className="flex flex-grow  w-full ">
      <motion.div animate={{transform:"translateX(100%)"}} transition={{ease: "linear", duration:500,repeat: Infinity}} className="flex gap-[4em]">
      {arr.map((item,idx) => (
        <div key={idx} className="bg-[gray] max-h-[450px] w-full min-w-[550px] flex justify-center items-center" onClick={() => handleNavigation(item.route)}>
        <img src={item.src} className="w-[80%] h-[60%]" />
        </div>
      ))}
      </motion.div>
    </section>

    <section className="flex flex-grow  w-full ">
      <motion.div animate={{transform:"translateX(-100%)"}} transition={{ease: "linear", duration:500,repeat: Infinity}} className="flex gap-[4em]">
      {arr.map((item,idx) => (
        <div key={idx} className="bg-[gray] max-h-[450px] w-full min-w-[550px] flex justify-center items-center" onClick={() => handleNavigation(item.route)}>
        <img src={item.src} className="w-[80%] h-[60%]" />
        </div>
      ))}
      </motion.div>
    </section>
    </div>
  );
}

export default Projects;