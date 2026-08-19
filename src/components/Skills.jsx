import React from "react";
import { skills } from "../data/skills.js";
import SkillsBadge from "./SkillsBadge.jsx";

export default function Skills() {
  const categories = ["Frontend", "Tools", "Learning"];

  return (
    <>
      <section className="skillsSection w-full  bg-slate-50 py-24 ">
        <div className="skillsOuterContainer  w-345 mx-auto  " >
          <h2 className=" text-4xl text-slate-900 font-medium underline decoration-blue-500 text-center  mb-10">Skills</h2>
          <div className="skillInnerContainer  flex justify-between px-10">
            {categories.map((category) => (
              <div key={category} className="w-[30%] min-h-52 p-2.5 flex flex-col gap-4 items-center">
                <h3 className=" text-2xl ">
                  {category === "Learning" ? "Learning" : category}
                </h3>
                <div className="flex flex-wrap gap-5">
                  {skills.filter((skill) => skill.category === category).map((skill)=>(
                    <SkillsBadge key={skill.name} skill={skill}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
