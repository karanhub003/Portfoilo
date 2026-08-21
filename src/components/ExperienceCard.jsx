import {motion} from "motion/react";
import calenderImg from "../assets/icons/calendar.png";
import locationImg from "../assets/icons/location.png";

export default function ExperienceCard({ experience }) {
  return (
    <>
    
      < motion.div 
        whileHover={{y:-12}}
        transition={{duration:0.2}}
      
      className="experienceCard  max-w-5xl mx-auto flex  flex-col gap-3.5 bg-white rounded-3xl xl:p-3.5 p-2 shadow-[-7px_6px_20px_-1px_rgba(134,_148,_104,_0.14)]">
        <div className="companyInfoContainer  flex gap-3.5">
          <div className="companyProfileImg w-15 h-15  sm:w-20 sm:h-20 flex items-center justify-center">
            <img className="w-full" src={experience.profile} alt="profileImg" />
          </div>
          <div className="companyInfo  flex flex-col gap-1.2">
            <h4 className=" text-[16px] 2xl:text-[18px] sm:text-[20px] font-bold">{experience.role}</h4>
            <p className=" text-[14px] 2xl:text-[16px] sm:text-[16px] font-bold text-blue-500">
              {experience.company}
            </p>
            <div className="flex gap-3.5 text-[14px] font-medium text-slate-600">
              <div className="flex items-center gap-1">
                <div className="calenderImgBox w-4">
                  <img src={calenderImg} alt="" />
                </div>
                <p className=" text-[12px] 2xl:text-[16px]"> {experience.duration}</p>
              </div>
              <p>|</p>
               <div className="flex items-center gap-1">
                <div className="calenderImgBox w-4">
                  <img src={locationImg} alt="" />
                </div>
                <p className="text-[12px] 2xl:text-[16px]"> {experience.location}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-semibold text-slate-800 text-[12px] 2xl:text-[14px] md:text-[16px]">{experience.description}</p>
        <div className="workedSkillsContainer  flex gap-4">
          {experience.technologies.map((technology) => (
            <div className="workedSkillsBadges text-[12px] 2xl:text-[16px]  py-1  px-1.25 2xl:px-2.5 rounded-2xl bg-slate-100">
              {technology}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
