import React from "react";
import { easeOut, motion } from "motion/react";
import profileImage from "../assets/me.png";

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut }}
      viewport={{ once: true }}
      id="about"
      className=" aboutSection w-full bg-white py-8 2xl:py-12 lg:py-24 "
    >
      <div className="aboutMe flex-col  items-center flex xl:w-345 1xlg:flex-row 1xl:flex-row xl:mx-auto  gap-4.25 2xl:gap-8.5">
        <div className="aboutMeProfileContainer order-2 1xlg:order-1  p-2 xl:w-[25%] 1xl:w-[25%] 1xlg:w-[25%] w-75 2xl:w-100">
          <div className="profileImageFrame border-blue-100  rounded-2xl overflow-hidden bg-blue-50 shadow-lg">
            <img className="pl-1.5" src={profileImage} alt="profileImg" />
          </div>
        </div>
        <div className="aboutMeInformationContainer order-1 1xlg:order-2 text-center px-3 py-0   sm:p-3 xl:w-[75%] 1xl:w-[75%] 1xlg:w-[75%] ">
          <h2 className="text-slate-900 text-2xl 2xl:text-3xl sm:text-4xl font-medium underline decoration-blue-500">
            About Me
          </h2>
          <p className="my-5 text-[12px] 2xl:text-[16px] sm:text-[18px] text-slate-600">
            I'm a frontend developer with hands-on experience building
            responsive websites and web applications using React, JavaScript,
            and Tailwind CSS. I enjoy creating clean interfaces, reusable
            components, and intuitive user experiences with a strong focus on
            performance and responsiveness.
          </p>
          <div className="highlightContainers flex flex-wrap order-3  justify-center  xl:gap-15 gap-2.5  2xl:gap-5 sm:gap-10  py-2">
          <div className="highlightInfo border-slate-200 w-35 py-0.75 px-1.25 sm:py-1.5 sm:px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon text-blue-500 ">
              <i className="fa-regular fa-calendar-days"></i>
            </div>
            <p className=" text-[12px] sm:text-[16px]">8+ Months Experiences</p>
          </div>
          <div className="highlightInfo  border-slate-200 w-35 py-0.75 px-1.25 sm:py-1.5 sm:px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon  text-blue-500">
              <i className="fa-solid fa-code"></i>
            </div>
            <p className=" text-[12px] sm:text-[16px]">10+ Projects</p>
          </div>
          <div className="highlightInfo  border-slate-200 w-35 py-0.75 px-1.25 sm:py-1.5 sm:px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon  text-blue-500">
              <i className="fa-regular fa-circle-check "></i>
            </div>
            <p className=" text-[12px] sm:text-[16px]">Client Satisfaction</p>
          </div>
          <div className="highlightInfo border-slate-200 w-35 py-0.75 px-1.25 sm:py-1.5 sm:px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon  text-blue-500">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <p className=" text-[12px] sm:text-[16px]">India</p>
          </div>
        </div>
        </div>
        
      </div>
    </motion.section>
  );
}
