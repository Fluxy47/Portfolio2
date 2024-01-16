import { motion } from "framer-motion";

function Overlay() {
  return (
    <motion.div
      exit={{
        transform: "translateY(-130%) rotate(0.001deg)",
      }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
      className="bg-[#181418] text-white h-[101vh] w-full fixed top-0 left-0 z-[99]   "
      style={{ borderRadius: "0 0 15% 15%" }}
    >
      <div className="relative flex flex-col h-screen justify-center items-center z-20">
        <section className="block mx-[1em] text-center max-w-[600px] ">
          <div className="scale-90">
            <h2 className="leading-[1.15em] tracking-[0] font-[400] text-[2.6em] ">
              Discover your new ambition
            </h2>
            {/* <p className="mx-[8px] leading-[1.6em] mt-[5px] font-[300] tracking-[1px] text-[1.3em]">
              <span className=""> Rate how you feel</span>
              {""} about the following 10 words.
            </p> */}
          </div>
        </section>
      </div>
      <motion.div
        animate={{
          borderRadius: "0 0 60% 60%",
          transform: "translateY(25%)",
        }}
        transition={{
          duration: 0.85,
          ease: [0.7, 0, 0.2, 1],
          delay: 2.5,
        }}
        className="bg-[#181418] w-full h-2/3 absolute bottom-1"
      />
    </motion.div>
  );
}

export default Overlay;
