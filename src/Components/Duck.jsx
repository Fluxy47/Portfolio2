import React from 'react'
import NavBar from './NavBar'
import VideoCont from './VideoCont'

function Duck() {
  return (
    <div className='min-h-screen text-black '>
      <NavBar />
      <div className='flex flex-col  justify-center  items-center mt-[13em]  mx-auto '>
            <h1 className='md:text-[5em] xl:text-[8em] leading-tight  self-start ml-[2.8em]'>FABRIC™</h1>
      
      <section className='flex items-center justify-center gap-[3em] mt-[5em] w-full'>
        <div className='flex flex-col gap-[2em] items-start w-full max-w-[20em]'> 
        <p className='text-[0.7em] text-[#999D9E]'>ROLE / SERVICES</p>
        <div className='h-[1px] w-full bg-[#adb4b6]' />
        <h2 className='text-base font-semibold'>Design & Development</h2>
        </div>
        <div className='flex flex-col gap-[2em] items-start  w-full max-w-[20em]'> 
        <p className='text-[0.7em] text-[#999D9E]'>LOCATION & YEAR</p>
        <div className='h-[1px] w-full bg-[#999D9E]' />
        <h2 className='text-base font-semibold'>United Kingdom ©2023</h2>
        </div>
       <div className='w-52 h-52 bg-[blue] rounded-full flex justify-center items-center'><h3 className='text-white font-semibold'>Live Project</h3></div>
      </section>
      </div>
      <VideoCont />
    </div>
  )
}

export default Duck


{/* <div className='flex w-[70vw]  items-start mt-[13em]  mx-auto border-4 border-[red]'>
<h1 className='md:text-[5em] xl:text-[8em] leading-tight'>FABRIC™</h1>
</div>
<section className='flex items-center justify-center gap-[5em] mt-[5em] border-2 border-[yellow]'>
<div className='flex flex-col gap-[2em] items-start w-full max-w-[25em]'> 
<p className='text-[0.7em] text-[#999D9E]'>ROLE / SERVICES</p>
<div className='h-[1px] w-full bg-[#adb4b6]' />
<h2 className='text-lg font-semibold'>Design & Development</h2>
</div>
<div className='flex flex-col gap-[2em] items-start  w-full max-w-[25em]'> 
<p className='text-[0.7em] text-[#999D9E]'>LOCATION & YEAR</p>
<div className='h-[1px] w-full bg-[#999D9E]' />
<h2 className='text-lg font-semibold'>United Kingdom ©2023</h2>
</div>
<div className='w-52 h-52 bg-[blue] rounded-full flex justify-center items-center'><h3 className='text-white font-semibold'>Live Project</h3></div>
</section> */}