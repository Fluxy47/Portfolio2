import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useMouseMovementAnimation from "../util/MouseMoveAnimation";
import mainVideo from "../assets/try.mp4";
import previewVideo from "../assets/val.mp4";

function Testing() {
  // const pointer = useRef();
  // const screenLog = useRef();

  // // State variables for x and y positions
  // const [xPosition, setXPosition] = useState(0);
  // const [yPosition, setYPosition] = useState(0);

  // let storedXPosition;
  // let storedYPosition;

  // // Set up our coordinate mapping with GSAP utils!
  // let mapWidth;
  // let mapHeight;

  // useEffect(() => {
  //   function setMaps() {
  //     mapWidth = gsap.utils.mapRange(0, window.innerWidth, -50, 50);
  //     mapHeight = gsap.utils.mapRange(0, window.innerHeight, -50, 50);
  //   }

  //   // Add a resize event listener to update coordinate mapping on window resize
  //   window.addEventListener('resize', setMaps);

  //   // Initialize coordinate mapping
  //   setMaps();

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener('resize', setMaps);
  //   };
  // }, []);

  // useEffect(() => {
  //   function movePointer() {
  //     // Only recalculating if the value changes
  //     if (storedXPosition === xPosition && storedYPosition === yPosition) return;

  //     if (xPosition && yPosition) {
  //       screenLog.current.innerText = `transform: translate(${Math.round(xPosition)}%, ${Math.round(yPosition)}%)`;
  //     }

  //     // Use GSAP to animate the pointer element's position
  //     gsap.to(pointer.current, {
  //       xPercent: xPosition,
  //       yPercent: yPosition,
  //       ease: 'none',  // Animation easing, 'none' means linear motion
  //       // Other easing options could be used, like 'power4.out', 'power4.in', etc.
  //     });

  //     // Update the stored positions with the current positions
  //     storedXPosition = xPosition;
  //     storedYPosition = yPosition;
  //   }

  //   // Use GSAP's ticker to run the movePointer function in every animation frame
  //   gsap.ticker.add(movePointer);

  //   return () => {
  //     gsap.ticker.remove(movePointer);
  //   };
  // }, [xPosition, yPosition]);

  // useEffect(() => {
  //   // Define the updateMouseCoords function
  //   const updateMouseCoords = (event) => {
  //     // Map mouse coordinates to the defined coordinate range using GSAP utilities
  //     setXPosition(mapWidth(event.clientX));
  //     setYPosition(mapHeight(event.clientY));
  //   };

  //   // Add a mousemove event listener to update mouse coordinates
  //   window.addEventListener('mousemove', updateMouseCoords);

  //   // Cleanup: Remove the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener('mousemove', updateMouseCoords);
  //   };
  // }, [mapWidth, mapHeight]);
  const videoRef = useRef(null);

  // const handleHover = () => {
  //   videoRef.current.play();
  // };

  // const handleLeave = () => {
  //   videoRef.current.pause();
  // };

  const [isHovered, setIsHovered] = useState(false);
  console.log("is", isHovered);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const videoSource = isHovered ? mainVideo : previewVideo;

  const slideInRef = useRef(null);
  const slideOutRef = useRef(null);

  useEffect(() => {
    const slideIn = slideInRef.current;
    const slideOut = slideOutRef.current;

    // Slide In Animation
    gsap.from(slideIn, {
      scaleY: 0,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    });

    // Slide Out Animation
    gsap.to(slideOut, {
      scaleY: 0,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    });

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf([slideIn, slideOut]); // Kill the animations to avoid memory leaks
    };
  }, []);

  return (
    //     <div  className='flex min-h-screen justify-center items-center'>
    //     <div ref={pointer} className="pointer">
    //    <img src="https://assets.codepen.io/756881/pointer.svg" />
    //    <p ref={screenLog} className="screen-log text-white">transform: translate(0,0)</p>
    //  </div>
    // <div className='min-h-[800px] w-full max-w-[800px] bg-slate-500 '>
    // <video className='w-full h-full' ref={videoRef}      controls
    //         onMouseEnter={handleHover}
    //         onMouseLeave={handleLeave}  // Autoplay preview loop only if not hovered
    //          >
    //           {isHovered && (
    //           <source
    //           videoUrl={mainVideo}
    //           previewUrl={previewVideo}
    //         />
    //       )}

    //       <img src={mainVideo} alt="Video Thumbnail" />
    //       </video>
    // </div>
    //  </div>
    <>
      <div
        ref={slideInRef}
        className="slide-in"
        // initial={{ scaleY: 0 }}
        // animate={{ scaleY: 0 }}
        // exit={{ scaleY: 1 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        ref={slideOutRef}
        className="slide-out"
        // initial={{ scaleY: 1 }}
        // animate={{ scaleY: 0 }}
        // exit={{ scaleY: 0 }}
        // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

export default Testing;
