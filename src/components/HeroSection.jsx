import React from 'react'
import me from "../assets/me.png"
import heroImg from "../assets/bg-hero.png"

export const HeroSection = () => {
  return (
    <section className='HeroSection font-[Inter] ' >
   <div className=' flex justify-around relative bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${heroImg})`}}>
     <div className="leftSide  pt-15">
        <p className='text-3xl pb-2'>Hi, I'm</p>
        <p className='text-5xl pb-1'>KARAN SINGH</p>
        <p className='text-3xl pb-3'>Frontend Developer</p>
        <div className='w-150 pb-4'><p className='text-2xl'>I built fast, responsive and modern websites.Using React,JavaScript and Tailwind CSS </p></div>
        <div className=''>
            <div className="infoBox">View Projects</div>
            <div className="infoBox">Download Resume</div>
        </div>
        
    </div>
    <div className='RightSide max-w-150 '>
        <img className='w-full' src={me} alt="me-pic" />
    </div>
   </div>
   </section>
    
  )
}
