import React from "react";
import { projects } from "../data/projects.js";
import ProjectsCard from "./ProjectsCard.jsx";

export default function Projects() {
  return (
    <section className="projectsSection w-full bg-slate-50 py-24">
      <div className="ProjectOuterContainer xl:w-345 xl:mx-auto">
        <div className="experienceHeadingInfoContainer flex flex-col items-center mb-4">
          {" "}
          <h2 className="text-4xl text-slate-900 font-medium underline decoration-blue-500  mb-3.5">
            Projects
          </h2>
          <div className="text-center">
            {" "}
            <p className="text-[18px] text-slate-600">
              A showcase of my recent work. Each project is built with
            </p>
            <p className="text-[18px] text-slate-600">
              passion, focusing on clean code, performance and great user experience.
            </p>
          </div>
        </div>
        <div className="projectsCategoriesContainer flex justify-center gap-16 text-slate-600 ">
          <div className="py-1.5 px-2.5  hover:underline decoration-blue-500 font-medium  mb-3.5 active:bg-blue-500 active:text-white ">All</div>
          <div className="py-1.5 px-2.5  hover:underline decoration-blue-500 font-medium  mb-3.5 active:bg-blue-500 active:text-white">Frontend</div>
          <div className="py-1.5 px-2.5  hover:underline decoration-blue-500 font-medium  mb-3.5 active:bg-blue-500 active:text-white">Full Stack</div>
        </div>
        <div className="projectsWrappersContainer flex  flex-wrap justify-around gap-y-9 ">
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
