import { color, easeInOut, easeOut, motion } from "motion/react";
import me from "../assets/me.png";
import heroImg from "../assets/bg-hero.png";
import git from "../assets/git.png";
import email from "../assets/email.png";
import linkdin from "../assets/linkdin.png";

export default function HeroSection() {
  return (
    <section
      className="HeroSection font-[Inter] min-h-[90vh] relative bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className=" xl:w-345 xl:mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center 2xlg:justify-between gap-12 py-10 lg:py-24 px-3.5">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          viewport={{ once: false }}
          className=" leftSideContainer lg:w-[60%] w-full items-center lg:items-start  flex flex-col "
        >
          <p className="text-xl pb-2.5 lg:pb-5 text-slate-300">Hi, I'm</p>
          <p className="xl:text-6xl text-5xl pb-3 text-white leading-tight font-bold tracking-tight">
            Karan Singh
          </p>
          <p className="xl:text-3xl text-2xl pb-4 lg:pb-8 text-blue-400">
            Frontend Developer
          </p>

          <p className="text-lg text-slate-400 leading-8 w-100 text-center lg:text-left lg:max-w-md py-4">
            I build modern, responsive, and user-focused web applications using
            React, JavaScript, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-3  py-6 lg:pb-15 text-sm ">
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

          <div className="flex gap-8  py-4 lg:pb-9  ">
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="border py-3 px-6 rounded-xl border-transparent  bg-blue-400 text-white "
            >
              Projects
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor:"#42A5F5"
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="border-white py-3 px-6 rounded-xl bg-transparent text-white border "
            >
              Download CV
            </motion.button>
          </div>
          <div className="SocialIconContainer  flex gap-10 py-4 lg:py-0 ">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          viewport={{ once: false }}
          className=" rightSideContainer lg:w-[40%] w-112.5 "
        >
          <img className="profileImage w-full " src={me} alt="me-pic" />
        </motion.div>
      </div>
    </section>
  );
}
