import { motion } from "motion/react";

export default function ContactMe() {
  const isMobile=window.innerWidth<850;
  return (
    <section id="contact" className="contactMeSection w-full bg-white py-8 2xl:py-12 lg:py-24 flex flex-col gap-3.25 sm:gap-6.5 ">
      <div className="contactMeHeadingInfoContainer flex flex-col items-center mb-3 sm:mb-5.5">
        {" "}
        <h2 className=" text-2xl 2xl:text-3xl sm:text-4xl text-slate-900 font-medium underline decoration-blue-500 mb-3.5">
          Get In Touch
        </h2>
        <div className="text-center">
          {" "}
          <p className=" text-[12px] 2xl:text-[16px] sm:text-[18px] text-slate-600">
            I'am currently open to new opportunities and exciting projects.
          </p>
          <p className=" text-[12px] 2xl:text-[16px] sm:text-[18px] text-slate-600">
            Feel free to reach out, i'd love to here you from!
          </p>
        </div>
      </div>

      <div className="contactMeContainer xl:w-345 xl:mx-auto  flex flex-col md:flex-row gap-8.5 px-2 sm:p-2.5">
        
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0:-20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="leftSideContainer bg-white shadow-md md:w-[40%] py-1.5 2xl:py-3 xl:px-4.5 px-2.5 2xl:px-3 flex flex-col gap-3.5 rounded-lg "
        >
          <h3 className=" font-bold text-[18px] 2xl:text-[20px] sm:text-2xl">Contact Information</h3>
          <div className="contactInfoContainer flex flex-col gap-2">
            <div className="contactInfoCard   border-b border-slate-200 p-1.5  pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-7.5 sm:w-15 h-7.5 sm:h-15 bg-slate-200 rounded-lg sm:rounded-xl flex justify-center items-center ">
                <i className="fa-regular fa-envelope  text-blue-500 text-[15px] sm:text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[14px] 2xl:text-[16px] sm:text-[18px]">Email</p>
                <p className="text-blue-600 text-[12px] 2xl:text-[14px] sm:text-[16px]">nkaran2020@gmail.com</p>
              </div>
            </div>
            <div className="contactInfoCard  border-b border-slate-200 p-1.5 pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-7.5 sm:w-15 h-7.5 sm:h-15 bg-slate-200 rounded-lg sm:rounded-xl flex justify-center items-center">
                <i class="fa-solid fa-location-dot text-blue-500 text-[15px] sm:text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[14px] 2xl:text-[16px] sm:text-[18px]">Location</p>
                <p className="text-slate-500 text-[12px] 2xl:text-[14px] sm:text-[16px]">Agra, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="contactInfoCard  border-b border-slate-200 p-1.5 pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-7.5 sm:w-15 h-7.5 sm:h-15 bg-slate-200 rounded-lg sm:rounded-xl flex justify-center items-center">
                <i class="fa-brands fa-github text-blue-500 text-[15px] sm:text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[14px] 2xl:text-[16px] sm:text-[18px]">GitHub</p>
                <a
                  className=" text-blue-500 text-[12px] 2xl:text-[14px] sm:text-[16px]"
                  href="https://github.com/karanhub003"
                  target="_blank"
                >
                  https://github.com/karanhub003
                </a>
              </div>
            </div>
            <div className="contactInfoCard  border-b border-slate-200 p-1.5 pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-7.5 sm:w-15 h-7.5 sm:h-15 bg-slate-200 rounded-lg sm:rounded-xl flex justify-center items-center">
                <i class="fa-brands fa-linkedin-in text-blue-500 text-[15px] sm:text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[14px] 2xl:text-[16px] sm:text-[18px]">Linkedin</p>
                <a
                  className=" text-blue-500 text-[12px] 2xl:text-[14px] sm:text-[16px]"
                  href="www.linkedin.com/in/karan-singh-kushwah-603325351"
                  target="_blank"
                >
                  www.linkedin.com/in/karan-singh-kushwah-603325351
                </a>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="resumeBox text-[14px] 2xl:text-[16px]  border  p-1.5 sm:p-3 flex items-center justify-center gap-2 border-blue-400 rounded-lg text-blue-500 font-bold bg-blue-50 cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            <i className="fa-regular fa-file  font-medium 2xl:text-[16px] "></i>Download Resume
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="rightSideContainer   bg-white shadow-md md:w-[60%] px-2.5 py-1.5 2xl:py-3 xl:px-4.5 2xl:px-3 flex flex-col gap-3.5 rounded-lg"
        >
          <h3 className="font-bold text-[18px] 2xl:text-[20px] sm:text-2xl">Send Me A Message</h3>

          <div className="formContainer flex flex-col p-1 gap-5">
            <div className="nameFieldContainer   flex flex-col gap-1">
              <p className="font-medium text-[14px] 2xl:text-[16px] ">Your Name</p>
              <div className="nameBox border  flex p-1.5 items-center rounded-lg gap-1 border-slate-300">
                <div className="userImgBox">
                  <i className="fa-regular fa-user text-[12px] 2xl:text-[16px]  text-slate-500"></i>
                </div>
                <div className="nameInputBox w-full text-slate-500">
                  <input
                    className=" w-full placeholder:text-slate-500 outline-0 text-[12px] 2xl:text-[16px]"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            </div>
            <div className="emailFieldContainer  flex flex-col gap-1">
              <p className="font-medium text-[14px] 2xl:text-[16px]">Email</p>
              <div className="emailBox  border flex p-1.5 items-center rounded-lg gap-1 border-slate-300">
                <div className="emailImgBox">
                  <i className="fa-regular fa-envelope  text-slate-500 text-[12px] 2xl:text-[16px]"></i>
                </div>
                <div className="emailInputBox w-full text-slate-500">
                  <input
                    className=" w-full placeholder:text-slate-500 outline-0 text-[12px] 2xl:text-[16px]"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
            <div className="messageFieldContainer flex flex-col gap-1">
              <p className="font-medium text-[14px] 2xl:text-[16px]">Your Message</p>
              <div className="messageBox  border flex p-1.5  rounded-lg gap-1 border-slate-300 ">
                <div className="messageImgBox ">
                  <i className="fa-solid fa-pen  text-slate-500 text-[12px] 2xl:text-[16px]"></i>
                </div>
                <div className="messageInputBox  w-full min-h-12.5 2xl:min-h-25 text-slate-500 text-[12px] 2xl:text-[16px]">
                  <textarea
                    className="w-full min-h-12.5 2xl:min-h-25 placeholder:text-slate-500 outline-0"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="formSubmitContainer text-[14px] 2xl:text-[16px] border p-1.5 sm:p-3 flex items-center justify-center gap-2 border-blue-400 rounded-lg text-blue-500 font-bold bg-blue-50 cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            <i class="fa-solid fa-paper-plane"></i>
            <p >Send Message</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="socialLinksContainer xl:w-340 xl:mx-auto px-2 sm:px-0">
        <div className=" bg-white rounded-lg flex flex-col md:flex-row justify-between items-center sm:p-2.5 gap-2.5 2xl:gap-4.5 sm:gap-8.5 shadow-md">
          {" "}
          <div className="leftSide w-full  flex md:w-[40%] py-1 px-1.5 2xl:py-2 2xl:px-3 xl:px-4.5  gap-4 items-center sm:border-r sm:border-slate-300">
            <div className="paperPlaneBox  rounded-[50%] flex items-center justify-center w-7.5 h-7.5 sm:w-15 sm:h-15 bg-blue-100">
              <i className="fa-solid fa-paper-plane text-[12px] sm:text-2xl text-blue-500"></i>
            </div>
            <div className="workTogetherBox w-75">
              <h2 className="font-bold text-[14px] 2xl:text-[16px]">Let's work together!</h2>
              <p className="text-slate-500 text-[12px] 2xl:text-[16px]">
                I'm always interested in new opportunities and exciting
                projects.
              </p>
            </div>
          </div>
          <div className="rightSide  flex w-full md:w-[60%] justify-between md:justify-normal items-center py-1 px-1.5 2xl:py-3 2xl:px-3  xl:px-4.5 gap-4 ">
            <p className="text-slate-500 w-[20%] 2xl:text-[16px] text-[14px]">Also find me on</p>
            <div className="socialImgBox flex items-center justify-between  w-[60%]">
              <div className=" w-7.5 sm:w-15  h-7.5 sm:h-15 bg-blue-100 rounded-[50%] flex items-center justify-center ]">
                <i class="fa-brands fa-github text-blue-500 text-[15px] sm:text-3xl"></i>
              </div>
              <div className=" w-7.5 sm:w-15  h-7.5 sm:h-15 bg-blue-100 rounded-[50%] flex items-center justify-center">
                <i class="fa-brands fa-linkedin-in text-blue-500 text-[15px] sm:text-3xl"></i>
              </div>
              <div className=" w-7.5 sm:w-15  h-7.5 sm:h-15 bg-blue-100 rounded-[50%] flex items-center justify-center">
                <i class="fa-brands fa-twitter text-[15px] sm:text-3xl text-blue-500"></i>
              </div>

              <div className=" w-7.5 sm:w-15  h-7.5 sm:h-15 bg-blue-100 rounded-[50%] flex items-center justify-center">
                <i className="fa-regular fa-envelope  text-blue-500 text-[15px] sm:text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
