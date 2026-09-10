import React, { useState } from "react";
import logo from "../assets/logo.webp";
import icon from "../assets/icon.png";
import "../index.css";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="NavBar px-2.5  flex justify-between items-center w-full  xl:w-345 xl:mx-auto    lg:h-20 h-15 font-semibold font-[Poppins]    ">
        <div className="NavItemBox w-10 h-10 lg:w-15 lg:h-15 md:w-12 md:h-12">
          <img src={logo} alt="logo" className="w-max" />
        </div>
        <div className="NavItemBox hidden  sm:flex gap-3 md:gap-8 sm:gap-4 justify-center items-center text-slate-300 cursor-pointer lg:py-4 lg:px-10  ">
          <div className="hover:bg-blue-400 hover:text-white rounded-md lg:px-5 lg:py-1.5  md:px-2.5 md:py-1 ">
            <a href="#home">Home</a>
          </div>
          <div className="hover:bg-blue-400 hover:text-white rounded-md  lg:px-5 lg:py-1.5  md:px-2.5 md:py-1">
            <a href="#about">About</a>
          </div>
          <div className="hover:bg-blue-400 hover:text-white rounded-md lg:px-5 lg:py-1.5  md:px-2.5 md:py-1">
            <a href="#skills">Skills</a>
          </div>
          <div className="hover:bg-blue-400 hover:text-white rounded-md  lg:px-5 lg:py-1.5 md:px-2.5 md:py-1">
            <a href="#experience">Experience</a>
          </div>
          <div className="hover:bg-blue-400 hover:text-white rounded-md lg:px-5 lg:py-1.5  md:px-2.5 md:py-1">
            <a href="#projects">Projects</a>
          </div>
          <div className="hover:bg-blue-400 hover:text-white rounded-md  lg:px-5 lg:py-1.5 md:px-2.5 md:py-1">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="NavItemBox hidden sm:block   text-slate-300 ">
          <a href="/Resume.pdf" download>
            <button className="hover:bg-blue-400 p-1.5 rounded-lg hover:text-white cursor-pointer">
              Download CV
            </button>
          </a>
        </div>
        <div className="sm:hidden relative">
          <div
            onClick={toggleVisibility}
            className="border rounded-4xl w-8 bg-black flex items-center justify-center"
          >
            <img src={icon} alt="humburger-icon" />
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="navBarLinks sm:hidden text-white flex flex-col items-center gap-2.5 py-2.5">
          <a className="text-[14px] font-semibold" onClick={toggleVisibility} href="#home">Home</a>
          <a className="text-[14px] font-semibold" onClick={toggleVisibility} href="#about">About</a>
          <a className="text-[14px] font-semibold" onClick={toggleVisibility} href="#skills">Skills</a>
          <a className="text-[14px] font-semibold" onClick={toggleVisibility} href="#experience">Experience</a>
          <a className="text-[14px] font-semibold" onClick={toggleVisibility} href="#projects">Projects</a>
          <a className="text-[14px] font-semibold" onClick={toggleVisibility} href="#contact">Contact</a>
        </div>
      )}
    </>
  );
}
