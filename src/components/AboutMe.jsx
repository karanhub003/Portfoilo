import React from "react";
import profileImage from "../assets/me.png"

export default function AboutMe() {
  return (
    <section className="aboutMe border flex w-7xl mx-auto">
      <div className="aboutMeProfileContainer border p-2 w-[25%]">
        <div className="profileImageFrame border"><img src={profileImage} alt="profileImg" /></div>
      </div>
      <div className="aboutMeInformationContainer border p-3 w-[75%]">
        <h2 className="text-blue-700 text-4xl">About Me</h2>
        <p >
          Frontend Developer with hands-on Experience building responsive
          websites and wed applications using React, JavaScript, Tailwind CSS,
          WordPress.Passionate about creating clean UI, reusable components and
          great user experience
        </p>
        <div className="highlightContainers flex  gap-15  py-2">
          <div className="highlightInfo border w-[140px] py-1.5 px-2.5 flex gap-2 items-center bg-blue-400 text-white">
            <div className="icon ">
             <i class="fa-regular fa-calendar-days"></i>
            </div>
            <p>8+ Months Experiences</p>
          </div>
          <div className="highlightInfo border w-[130px] py-1.5 px-2.5 flex gap-2 items-center bg-blue-400 text-white">
            <div className="icon">
             <i class="fa-solid fa-code"></i>
            </div>
            <p>10+ Projects</p>
          </div>
          <div className="highlightInfo border w-[140px] py-1.5 px-2.5 flex gap-2 items-center bg-blue-400 text-white ">
            <div className="icon">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <p>Client Satisfaction</p>
          </div>
          <div className="highlightInfo border w-[130px] py-1.5 px-2.5 flex gap-2 justify-center items-center bg-blue-400 text-white">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <p>India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
