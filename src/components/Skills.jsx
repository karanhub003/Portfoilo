import { easeOut, motion, stagger } from "motion/react";
import { skills } from "../data/skills.js";
import SkillsBadge from "./SkillsBadge.jsx";

export default function Skills() {
  const categories = ["Frontend", "Tools", "Learning"];

  const container = {
    hidden: {},
    visible: {
      transition: {
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  };

  return (
    <>
      <section className="skillsSection w-full  bg-slate-50 py-12 lg:py-24 ">
        <div className="skillsOuterContainer  xl:w-345 xl:mx-auto  ">
          <h2 className=" text-4xl text-slate-900 font-medium underline decoration-blue-500 text-center  mb-10">
            Skills
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="skillInnerContainer  flex justify-center flex-wrap gap-8 xl:justify-between xl:px-10 px-2"
          >
            {categories.map((category) => (
              <motion.div
                variants={item}
                key={category}
                className="xl:w-[30%] 1xl:w-[30%] p-4 lg:min-h-52 xl:p-2.5 md:w-[45%] flex flex-col gap-5.5 items-center"
              >
                <h3 className=" text-2xl font-medium text-slate-600 ">
                  {category === "Learning" ? "Learning" : category}
                </h3>
                <div className="flex flex-wrap gap-5 justify-center ">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <SkillsBadge key={skill.name} skill={skill} />
                    ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
