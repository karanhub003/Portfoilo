import React from "react";
import { experiences } from "../data/experiences.js";
import ExperienceCard from "./ExperienceCard.jsx";
import upArrowImg from '../assets/icons/up-arrow.jpg'

export default function Experience() {
  return (
    <>
      <section className="experienceSection  w-full bg-white py-24">
        <div className="experienceHeadingInfoContainer flex flex-col items-center xl:w-345 xl:mx-auto mb-10">
          {" "}
          <h2 className="text-4xl text-slate-900 font-medium underline decoration-blue-500  mb-3.5">
            Experience
          </h2>
          <div className="text-center">
            {" "}
            <p className="text-[18px]">
              A look at my professional journey and the value
            </p>
            <p className="text-[18px]">
              I've contributed to teams and projects.
            </p>
          </div>
        </div>
        <div className="experienceOuterWrapper  xl:w-345 xl:mx-auto flex flex-col gap-6 items-center p-3 relative">
          <div className="w-0.5 h-full bg-blue-500 absolute  left-30 top-0"></div>
          {experiences.map((experience) => (
            <>
              <div className="wrapper relative w-full">
                <div className="dot w-5 h-5 rounded-full bg-blue-500 absolute left-25 top-0"></div>
                <ExperienceCard
                  key={experience.company}
                  experience={experience}
                />
              </div>
            </>
          ))}
        </div>
        <div className="xl:w-345 xl:mx-auto  mt-2.5">
           <div className="experienceFooter border border-slate-400 max-w-240 mx-auto  flex items-center py-2.5 px-1.5 rounded-xl gap bg-slate-100 justify-center gap-4">
                  <div className="upArrowImgContainer  flex w-5 h-5">
                    <img src={upArrowImg} alt="upArrowImg" />
                  </div>
                  <p className="text-[16px] text-slate-600 font-medium">1+ Years of experience in building modern, responsive and user-friendly web applications.</p>
                </div>
        </div>
      </section>
    </>
  );
}
