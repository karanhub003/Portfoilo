import { motion } from "motion/react";
import { projects } from "../data/projects.js";
import ProjectsCard from "./ProjectsCard.jsx";

export default function Projects() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="projectsSection w-full bg-slate-50 py-12 lg:py-24">
      <motion.div 
      variants={container}
      initial='hidden'
      whileInView='visible'
      className="ProjectOuterContainer xl:w-345 xl:mx-auto">
        <div className="experienceHeadingInfoContainer flex flex-col items-center mb-4">
          {" "}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-4xl text-slate-900 font-medium underline decoration-blue-500  mb-3.5"
          >
            Projects
          </motion.h2>
          <div className="text-center">
            {" "}
            <p className="text-[18px] text-slate-600">
              A showcase of my recent work. Each project is built with
            </p>
            <p className="text-[18px] text-slate-600">
              passion, focusing on clean code, performance and great user
              experience.
            </p>
          </div>
        </div>
        <div className="projectsCategoriesContainer flex justify-center gap-16 text-slate-600 ">
          <div className="py-1.5 px-2.5  hover:underline decoration-blue-500 font-medium  mb-3.5 active:bg-blue-500 active:text-white ">
            All
          </div>
          <div className="py-1.5 px-2.5  hover:underline decoration-blue-500 font-medium  mb-3.5 active:bg-blue-500 active:text-white">
            Frontend
          </div>
          <div className="py-1.5 px-2.5  hover:underline decoration-blue-500 font-medium  mb-3.5 active:bg-blue-500 active:text-white">
            Full Stack
          </div>
        </div>
        <motion.div 
          variants={item}
        className="projectsWrappersContainer flex flex-col   sm:flex-wrap  sm:flex-row justify-center 1xl:justify-around xl:justify-around  gap-7 gap-y-8 ">
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
