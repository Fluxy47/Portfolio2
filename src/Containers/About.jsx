import React from 'react'
import NavBar from "../Components/NavBar"

function About() {
  // clamp(x,x,7em)
  return (
    <div>
       <NavBar />
       <section className='flex justify-center items-center mt-[12em]'>
        <div className=' flex flex-col w-full max-w-[70em] items-start border-4 border-black mr-[1em]'>
          <h1 className='text-[7em] leading-tight'>Helping brands thrive
               in the digital world</h1>
  <div className='h-[1px] w-full bg-[#adb4b6]' />
        </div>
       </section>
    </div>
  )
}

export default About
