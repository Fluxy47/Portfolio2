import { useState,useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
import Landing from './Components/Landing'
import { AnimatePresence } from 'framer-motion';
import Overlay from './Components/Overlay';
import SideBar from './Components/SideBar';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let loadingTimeout;

    if (isLoading) {
      loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 2500); // Adjust the duration as needed
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [isLoading]);

  return (
    <>
    <AnimatePresence mode="wait">{isLoading && <Overlay />}</AnimatePresence>
    <SideBar />
    <Landing />
    <div className='min-h-screen ' />
    </>
  )
}

export default App
