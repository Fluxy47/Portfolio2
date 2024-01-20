import React, { useEffect, useRef, useState } from 'react'
import mainVideo from '../assets/try.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VideoCont() {
    const videoRef = useRef(null);
    const [hasPlayed, setHasPlayed] = useState(false);
  
    // useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger);
  
    //   const video = videoRef.current;
  
    //   const tl = gsap.timeline({
    //     paused: true,
    //     onComplete: () => {
    //       if (!hasPlayed) {
    //         video.play();
    //         setHasPlayed(true);
    //       }
    //     },
    //     onReverseComplete: () => {
    //       video.pause();
    //     },
    //   });
  
  
  
    //   ScrollTrigger.create({
    //     trigger: video,
    //     start: 'top center',
    //     onEnter: () => tl.play(),
    //     onLeave: () => tl.reverse(),
    //     once: true,
    //   });
    // }, [hasPlayed]);

  return (
    <>
    <div className='flex justify-center items-center mt-[7em] min-h-screen relative'>
        
        <img src='https://dennissnellenberg.com/media/pages/work/fabric/bb6007cf05-1687432216/case-header-fabric.jpg' className='h-screen w-full max-w-[82vw]' />
       <div className='absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2  w-full max-w-[20vw]'> <h1 className='text-3xl text-[blue] '>THIS IS THE WROLD</h1></div>

    </div>
    <div className='flex justify-center items-center mt-[15em] min-h-screen '>
    <video
      className='w-full max-w-[65vw] h-[90vh] border-4 border-black'
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    >
      <source src={mainVideo} type="video/mp4" />
    </video>
    </div>
    </>
  )
}

export default VideoCont
