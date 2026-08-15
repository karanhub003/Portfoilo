import React from "react";

export default function ProjectsCard({ project }) {
  console.log(project);
  return (
    <div className="projectCardContainer   flex flex-col w-[30.5%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl ">
      <div className="projectInfoBox  p-2">
        {" "}
        <div className="projectImg  rounded-tr-xl rounded-tl-xl overflow-hidden">
          <img src={project.image} alt="" />
        </div>
        <h2 className="text-[18px] font-medium">{project.name}</h2>
        <p>{project.description}</p>
        <div className="flex">
          {project.technologies.map((technology) => (
            <div>{technology}</div>
          ))}
        </div>
      </div>
      <div className="liveLinksBox flex border-t border-slate-50 p-2 justify-between bg-slate-100 ">
        <div>
          <img src="#" alt="" />
          <a href={project.liveLink}>Live Demo</a>
        </div>
        <div>
          <img src="#" alt="" />
          <a href={project.githubLink}>GitHub</a>
        </div>
      </div>
    </div>
  );
}
