import React from "react";

export default function () {
  return (
    <>
      <div className="footerMainContainer xl:w-345 xl:mx-auto py-2.5 2xl:py-5">
        <div className="topContainer flex flex-col md:flex-row items-center gap-3.5 2xl:gap-5  ">
          <div className="leftContainer w-full md:w-[20%] flex flex-col gap-1 p-2">
            <h2 className="font-bold text-2xl xl:text-4xl 2xl:text-3xl text-white">
              Karan<span className="text-blue-600"> Singh</span>
            </h2>
            <h4 className="text-blue-600 font-medium text-[14px] xl:text-[20px] 2xl:text-[18px]">Frontend Developer</h4>
            <hr className="w-[10%] text-blue-600 my-1.5"   />
            <p className="text-slate-400 text-[12px] 2xl:text-[16px]">
              Building modern, responsive and user-friendly web experiences that
              makes impact.
            </p>
          </div>
          <div className="rightContainer  w-full flex flex-wrap gap-3.5 md:flex-row  md:w-[80%] justify-between py-4 px-4">
            <div className="quickLinksContainer  flex flex-col gap-1.5">
              <h3 className="font-bold  2xl:text-[20px] text-white">Quick Links</h3>
              <hr className="w-5 text-blue-500" />
              <div className="linksInnerContainer flex flex-col gap-3 mt-1 ">
                <div className="linksBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div className="">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a className="" href="#">About Me</a>
                </div>
                <div className="linksBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div className="">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a className="" href="#">Skills</a>
                </div>
                <div className="linksBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div className="">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a className="" href="#">Experience</a>
                </div>
                <div className="linksBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div className="">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a className="" href="#">Projects</a>
                </div>
                <div className="linksBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div className="">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a className="" href="#">Contact</a>
                </div>
              </div>
            </div>
            <div className="servicesContainer flex flex-col gap-1.5">
              <h3 className="font-bold  2xl:text-[20px] text-white">Services</h3>
              <hr className="w-5 text-blue-500" />
              <div className="servicesInnerContainer flex flex-col gap-3 mt-1">
                <div className="serviceBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a href="#">Frontend Development</a>
                </div>
                <div className="serviceBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a href="#">Responsive Design</a>
                </div>
                <div className="serviceBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a href="#">Web Performance</a>
                </div>
                <div className="serviceBox text-[12px] 2xl:text-[16px] flex gap-1.5 items-center text-slate-400 hover:text-blue-400">
                  <div>
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <a href="#">UI/UX Implementation</a>
                </div>
              </div>
            </div>
            <div className="ContactContainer flex flex-col gap-1.5">
              <h3 className="font-bold  2xl:text-[20px] text-white" >Contact</h3>
              <hr className="w-5 text-blue-500" />
              <div className="contactInnerContainer flex flex-col gap-3 mt-1 ">
                <div className="contactBox  flex gap-1.5  text-slate-400 items-center ">
                  <div className=" w-5 h-5 2xl:w-10 2xl:h-10 bg-slate-500 rounded-md 2xl:rounded-lg flex justify-center items-center ">
                    <i className="fa-regular fa-envelope  text-blue-500 text-[12px] 2xl:text-[18px]"></i>
                  </div>
                  <div>
                    <p className="font-medium  text-[14px] 2xl:text-[16px]">Email</p>
                    <p className="text-blue-600 text-[12px] 2xl:text-[16px]">nkaran2020@gmail.com</p>
                  </div>
                </div>
                <div className="contactBox  flex gap-1.5  text-slate-400 items-center ">
                  <div className=" w-5 h-5 2xl:w-10 2xl:h-10 bg-slate-500 rounded-md 2xl:rounded-lg flex justify-center items-center ">
                    <i class="fa-solid fa-location-dot text-blue-500 text-[12px] 2xl:text-[18px]"></i>
                  </div>
                  <div>
                    <p className="font-medium text-[14px] 2xl:text-[16px]">Location</p>
                    <p className="text-slate-500 text-[12px] 2xl:text-[16px]">Agra, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="contactBox  flex gap-1.5  text-slate-400 items-center">
                  <div className=" w-5 h-5 2xl:w-10 2xl:h-10 bg-slate-500 rounded-md 2xl:rounded-lg flex justify-center items-center ">
                    <i class="fa-solid fa-phone text-blue-500 text-[12px] 2xl:text-[18px] "></i>
                  </div>
                  <div>
                    <p className="font-medium text-[14px] 2xl:text-[16px]">Phone</p>
                    <p className="text-blue-600 text-[12px] 2xl:text-[16px]">91+ 7017146341</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       
       
        <div className="middleContainer border-t border-slate-800  pt-2.5  2xl:pt-5 px-3">
          <div className="socialLinksContainer flex items-center justify-center p-3 gap-8 ">
            <div className="socialLinksBox flex flex-col items-center gap-1 hover:text-blue-400 ">
              <div className="w-6 2xl:w-12 h-6 2xl:h-12 rounded-[50%] bg-slate-800 flex items-center justify-center">
                <a href="#"><i class="fa-brands fa-github text-white text-[12px] 2xl:text-[20px]"></i></a>
              </div>
              <a className="font-medium text-white text-[14px] 2xl:text-[16px]" href="#">GitHub</a>
            </div>
            <div className="socialLinksBox flex flex-col items-center gap-1 hover:text-blue-400">
              <div className="w-6 2xl:w-12 h-6 2xl:h-12 rounded-[50%] bg-slate-800 flex items-center justify-center">
                <a href="#"><i class="fa-brands fa-linkedin-in text-blue-500 text-[12px] 2xl:text-[20px]"></i></a>
              </div>
              <a className="font-medium text-white text-[14px] 2xl:text-[16px]" href="#">Linkedin</a>
            </div>
            <div className="socialLinksBox flex flex-col items-center gap-1 hover:text-blue-400">
              <div className="w-6 2xl:w-12 h-6 2xl:h-12 rounded-[50%] bg-slate-800 flex items-center justify-center">
                <a href="#"><i class="fa-regular fa-envelope text-white text-[12px] 2xl:text-[20px]"></i></a>
              </div>
              <a className="font-medium text-white text-[14px] 2xl:text-[16px]" href="#">Email</a>
            </div>
            <div className="socialLinksBox flex flex-col items-center gap-1 hover:text-blue-400">
              <div className="w-6 2xl:w-12 h-6 2xl:h-12 rounded-[50%] bg-slate-800 flex items-center justify-center">
                <a href="#"><i className="fa-regular fa-file text-white  font-medium text-[12px] 2xl:text-[20px] "></i></a>
              </div>
              <a className="font-medium text-white text-[14px] 2xl:text-[16px]" href="#">Resume</a>
            </div>
          </div>
        </div>
        
        
      </div>
      <div className="lastContainer border border-slate-800 py-1.5 2xl:py-4.5 flex items-center justify-center  lg:justify-between bg-slate-950 w-full">
          <div className="designationContainer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 w-[95%]">
            <div className="flex items-center text-slate-400">
              <i class="fa-regular fa-copyright text-[14px] 2xl:text-[16px]"></i>
              <p className=" text-[14px] 2xl:text-[16px]">2026 Karan Singh.All Right Reserved.</p>
            </div>
            <div>
              <p className="text-slate-400 text-[14px] 2xl:text-[16px]">
                Made with <i className="fa-solid fa-heart text-blue-500"></i> using React and
                Tailwind CSS
              </p>
            </div>
          
          </div>
          <div className="scrollerUpBox hidden lg:block w-[5%] ">
            <div className="w-10 h-10 bg-slate-800 rounded-[50%] flex justify-center items-center"><i className="fa-solid fa-arrow-up text-blue-400"></i></div>
          </div>
        </div>
    </>
  );
}
