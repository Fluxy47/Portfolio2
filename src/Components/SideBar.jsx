import React, { useState } from 'react'
import { motion } from "framer-motion";

const arr = ["Home", "Work", "About","Contact"];

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <section  className="fixed top-6 right-3 bg-[blue]  z-[201]">
      
      <motion.div
    //   animate={{ transform: `translate(${position.x}px, ${position.y}px)`}}
      transition={{ duration: 0.3, ease: "easeIn" }}
    //    ref={elementRef2}
       data-value="-7"
        onClick={() => setIsOpen((prevState) => !prevState)}

        className="bg-[#1C1D20] w-16 h-16 rounded-full fixed top-6 right-3 z-[200] cursor-pointer"

      >
        lets see
      </motion.div>
  
      </section>
      <motion.section
        animate={{
          transform: isOpen
            ? "translate(calc(0% - 0vw), 0) rotate(0.001deg)"
            : "translate(calc(100% + 6vw),0) rotate(0.001deg)",
        }}
        transition={{ transform: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } }}
        className="fixed right-0 h-screen w-full lg:w-2/6 z-[99] bg-[#3D3B39]"
      >
        <div className="absolute flex justify-center items-center w-full h-full">
          <div className="border-y  max-h-[60vh] relative z-[98]  min-w-[60%] h-full ">
            {arr.map((item, idx) => (
              <motion.h1 key={idx} className="text-[4em]">
                {item}
              </motion.h1>
            ))}
          </div>
        </div>
        <motion.div
          animate={{
            borderRadius: isOpen ? 0 : "60% 0 0 60%",
            transform: isOpen ? "translateX(-5%)" : "translateX(-50%)",
          }}
          transition={{
            duration: 0.85,
            ease: [0.7, 0, 0.2, 1],
          }}
          className="bg-[#3D3B39] h-screen w-1/2 relative left-[35px] z-[96]"
        />
      </motion.section>
    </>
  )
}

export default SideBar
