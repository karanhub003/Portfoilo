import React from 'react'
import logo from "../assets/logo.png"
import '../index.css'

export const NavBar = () => {
  return (
    <div  className='NavBar ' >
    <div className='NavItemBox'>
    <img src={logo} alt="logo" class='' />
    </div>
    <div className='NavItemBox'>
        <p>Home</p>
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Experience</p>
        <p>Contact</p>
    </div>
    <div className='NavItemBox'>
        <p>Download CV</p>
    </div>
    </div>
  )
}
