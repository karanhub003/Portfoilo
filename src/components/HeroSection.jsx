import React from "react";
import me from "../assets/me.png";
import heroImg from "../assets/bg-hero.png";
import git from "../assets/git.png";
import email from "../assets/email.png";
import linkdin from "../assets/linkdin.png";

export const HeroSection = () => {
  return (
    <section
      className="HeroSection font-[Inter] min-h-[90vh] relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className=" max-w-7xl mx-auto px-6 lg:px-10 min-h-[90vh] flex items-center justify-between gap-20 ">
        <div className="max-w-xl">
          <p className="text-xl pb-5 text-slate-300">Hi, I'm</p>
          <p className="text-6xl pb-3 text-white leading-tight font-bold tracking-tight">
            Karan Singh
          </p>
          <p className="text-3xl pb-8 text-blue-400">Frontend Developer</p>

          <p className="text-lg text-slate-400 leading-8 max-w-md pb-5">
            I build modern, responsive, and user-focused web applications using
            React, JavaScript, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-3 pb-15 text-sm ">
            <div
              className=" py-1.5 px-3 rounded-full  bg-slate-800/70
border border-slate-600
text-slate-200 hover:border-blue-400
hover:text-blue-400"
            >
              React
            </div>
            <div
              className=" py-1.5 px-3 rounded-full bg-slate-800/70
border border-slate-600
text-slate-200 hover:border-blue-400
hover:text-blue-400"
            >
              JavaScript
            </div>
            <div
              className=" py-1.5 px-3 rounded-full bg-slate-800/70
border border-slate-600
text-slate-200 hover:border-blue-400
hover:text-blue-400"
            >
              Tailwind CSS
            </div>
            <div
              className=" py-1.5 px-3 rounded-full bg-slate-800/70
border border-slate-600
text-slate-200 hover:border-blue-400
hover:text-blue-400"
            >
              Git
            </div>
          </div>

          <div className="flex gap-8 pb-9  ">
            <button className="border py-3 px-6 rounded-xl border-transparent  bg-blue-400 text-white ">
              Projects
            </button>
            <button className="border-white py-3 px-6 rounded-xl bg-transparent text-white border ">
              Download CV
            </button>
          </div>
          <div
            className="SocialIconContainer  flex gap-10 "
          >
            <img
              className="w-7 bg-white rounded-full   cursor-pointer hover:scale-110
hover:bg-blue-400
transition-all
duration-300"
              src={git}
              alt="GitIcon"
            />
            <img
              className="w-7 bg-white rounded-full  cursor-pointer hover:scale-110
hover:bg-blue-400
transition-all
duration-300"
              src={email}
              alt="me-pic"
            />
            <img
              className="w-7 bg-white rounded-full  cursor-pointer hover:scale-110
hover:bg-blue-400
transition-all
duration-300"
              src={linkdin}
              alt="me-pic"
            />
          </div>
        </div>

        <div className="w-full max-w-xl">
          <img className="w-full" src={me} alt="me-pic" />
        </div>
      </div>
    </section>
  );
};
