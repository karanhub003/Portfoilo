import React from "react";
import profileImage from "../assets/me.png"

export default function AboutMe() {
  return (
    <section className=" w-full bg-slate-50 ">
      <div className="aboutMe  flex w-7xl mx-auto gap-[34px]">
      <div className="aboutMeProfileContainer  p-2 w-[25%]">
        <div className="profileImageFrame border-blue-100  rounded-2xl overflow-hidden bg-blue-50 shadow-lg"><img className="pl-1.5" src={profileImage} alt="profileImg" /></div>
      </div>
      <div className="aboutMeInformationContainer  p-3 w-[75%]">
        <h2 className="text-slate-900 text-4xl font-medium underline decoration-blue-500">About Me</h2>
        <p className="my-5 text-[18px] text-slate-600" >
          I'm a frontend developer with hands-on experience building responsive websites and web applications using React, JavaScript, and Tailwind CSS. I enjoy creating clean interfaces, reusable components, and intuitive user experiences with a strong focus on performance and responsiveness.
        </p>
        <div className="highlightContainers flex  gap-15  py-2">
          <div className="highlightInfo border-slate-200 w-[140px] py-1.5 px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon text-blue-500 ">
             <i class="fa-regular fa-calendar-days"></i>
            </div>
            <p>8+ Months Experiences</p>
          </div>
          <div className="highlightInfo  border-slate-200 w-[140px] py-1.5 px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon  text-blue-500">
             <i class="fa-solid fa-code"></i>
            </div>
            <p>10+ Projects</p>
          </div>
          <div className="highlightInfo  border-slate-200 w-[140px] py-1.5 px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon  text-blue-500">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <p>Client Satisfaction</p>
          </div>
          <div className="highlightInfo border-slate-200 w-[140px] py-1.5 px-2.5 flex gap-2 items-center bg-white text-slate-900 cursor-pointer rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="icon  text-blue-500">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <p>India</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}
