import React from 'react'
import logo from "../assets/logo.png"
import icon from "../assets/icon.png"
import '../index.css'

export const NavBar = () => {
  return (
    <div  className='NavBar  flex justify-between items-center max-w-full  lg:h-20 h-15  px-3.5 bg-slate-900 font-semibold font-[Poppins]    ' >
    <div className='NavItemBox w-10 h-10 lg:w-15 lg:h-15 md:w-12 md:h-12'>
    <img src={logo} alt="logo" class="w-max" />
    </div>
    <div className='NavItemBox hidden  sm:flex gap-3 md:gap-8 sm:gap-4 justify-center items-center text-slate-300 cursor-pointer lg:py-4 lg:px-10  '>
       <div className='hover:bg-blue-400 hover:text-white rounded-md lg:px-5 lg:py-1.5  md:px-2.5 md:py-1 '><p>Home</p></div>
       <div className='hover:bg-blue-400 hover:text-white rounded-md  lg:px-5 lg:py-1.5  md:px-2.5 md:py-1'><p>About</p></div>
       <div className='hover:bg-blue-400 hover:text-white rounded-md lg:px-5 lg:py-1.5  md:px-2.5 md:py-1'><p>Skills</p></div>
       <div className='hover:bg-blue-400 hover:text-white rounded-md  lg:px-5 lg:py-1.5 md:px-2.5 md:py-1'><p>Projects</p></div>
       <div className='hover:bg-blue-400 hover:text-white rounded-md lg:px-5 lg:py-1.5  md:px-2.5 md:py-1'><p>Experience</p></div>
       <div className='hover:bg-blue-400 hover:text-white rounded-md  lg:px-5 lg:py-1.5 md:px-2.5 md:py-1'><p>Contact</p></div>
    </div>
    <div className='NavItemBox hidden sm:block   text-slate-300 '>
        <button>Download CV</button>
    </div>
    <div className='sm:hidden'>
      <div className='border rounded-4xl w-8 bg-black flex items-center justify-center'>
        <img src={icon} alt="humburger-icon" /></div>
    </div>
    </div>
  )
}
