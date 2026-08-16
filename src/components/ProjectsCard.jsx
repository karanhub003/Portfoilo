import React from "react";
import linkImg from "../assets/icons/linke.png";
import githubImg from "../assets/git.png";

export default function ProjectsCard({ project }) {
  console.log(project);
  return (
    <div className="projectCardContainer flex flex-col w-[30.5%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl ">
      <div className="projectInfoBox  p-2.5 flex flex-col gap-1.5">
        {" "}
        <div className="projectImg  rounded-tr-xl rounded-tl-xl overflow-hidden">
          <img src={project.image} alt="" />
        </div>
        <h2 className="text-[18px] font-medium">{project.name}</h2>
        <p className="text-slate-500 font-medium">{project.description}</p>
        <div className="flex gap-4 mt-1.5">
          {project.technologies.map((technology) => (
            <div className=" border py-1 px-2.5 rounded-3xl">{technology}</div>
          ))}
        </div>
      </div>
      <div className="liveLinksBox flex border-t border-slate-50 p-2.5 justify-between bg-slate-100 rounded-br-xl rounded-bl-xl ">
        <div className="liveLinkContainer flex items-center gap-1">
          <img className="w-4 h-4" src={linkImg} alt="" />
          <a className="text-blue-600 font-medium" href={project.liveLink} target="_blank">
            Live Demo
          </a>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-4 h-4" src={githubImg} alt="" />
          <a className="font-medium " href={project.githubLink}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
