import React from "react";

export default function ContactMe() {
  return (
    <section className="contactMeSection w-full bg-slate-50 py-12 flex flex-col gap-6.5 ">
      <div className="contactMeHeadingInfoContainer flex flex-col items-center mb-5.5">
        {" "}
        <h2 className="text-4xl text-slate-900 font-medium underline decoration-blue-500  mb-3.5">
          Get In Touch
        </h2>
        <div className="text-center">
          {" "}
          <p className="text-[18px] text-slate-600">
            I'am currently open to new opportunities and exciting projects.
          </p>
          <p className="text-[18px] text-slate-600">
            Feel free to reach out, i'd love to here you from!
          </p>
        </div>
      </div>

      <div className="contactMeContainer w-345 mx-auto  flex gap-8.5 p-2.5">
        <div className="leftSideContainer bg-white shadow-md w-[40%] py-3 px-4.5 flex flex-col gap-3.5 rounded-lg ">
          <h3 className=" font-bold text-2xl">Contact Information</h3>
          <div className="contactInfoContainer flex flex-col gap-2">
            <div className="contactInfoCard   border-b border-slate-200 p-1.5  pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-15 h-15 bg-slate-200 rounded-xl flex justify-center items-center ">
                <i className="fa-regular fa-envelope  text-blue-500 text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[18px]">Email</p>
                <p className="text-blue-600">nkaran2020@gmail.com</p>
              </div>
            </div>
            <div className="contactInfoCard  border-b border-slate-200 p-1.5 pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-15 h-15 bg-slate-200 rounded-xl flex justify-center items-center">
                <i class="fa-solid fa-location-dot text-blue-500 text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[18px]">Location</p>
                <p className="text-slate-500">Agra, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="contactInfoCard  border-b border-slate-200 p-1.5 pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-15 h-15 bg-slate-200 rounded-xl flex justify-center items-center">
                <i class="fa-brands fa-github text-blue-500 text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[18px]">GitHub</p>
                <a
                  className=" text-blue-500"
                  href="https://github.com/karanhub003"
                  target="_blank"
                >
                  https://github.com/karanhub003
                </a>
              </div>
            </div>
            <div className="contactInfoCard  border-b border-slate-200 p-1.5 pb-2.5 gap-2 flex items-center">
              <div className="contactInfoImg w-15 h-15 bg-slate-200 rounded-xl flex justify-center items-center">
                <i class="fa-brands fa-linkedin-in text-blue-500 text-3xl"></i>
              </div>
              <div className="ContactInfo">
                <p className="font-medium text-[18px]">Linkedin</p>
                <a
                  className=" text-blue-500"
                  href="www.linkedin.com/in/karan-singh-kushwah-603325351"
                  target="_blank"
                >
                  www.linkedin.com/in/karan-singh-kushwah-603325351
                </a>
              </div>
            </div>
          </div>
          <div className="resumeBox border p-3 flex items-center justify-center gap-2 border-blue-400 rounded-lg text-blue-500 font-bold bg-blue-50 cursor-pointer hover:bg-blue-500 hover:text-white">
            <i className="fa-regular fa-file  font-medium "></i>Download Resume
          </div>
        </div>

        <div className="rightSideContainer   bg-white shadow-md w-[60%] py-3 px-4.5 flex flex-col gap-3.5 rounded-lg">
          <h3 className="font-bold text-2xl">Send Me A Message</h3>

          <div className="formContainer flex flex-col p-1 gap-5">
            <div className="nameFieldContainer   flex flex-col gap-1">
              <p className="font-medium">Your Name</p>
              <div className="nameBox border  flex p-1.5 items-center rounded-lg gap-1 border-slate-300">
                <div className="userImgBox">
                  <i className="fa-regular fa-user  text-slate-500"></i>
                </div>
                <div className="nameInputBox w-full text-slate-500">
                  <input
                    className=" w-full placeholder:text-slate-500 outline-0"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            </div>
            <div className="emailFieldContainer  flex flex-col gap-1">
              <p className="font-medium">Email</p>
              <div className="emailBox  border flex p-1.5 items-center rounded-lg gap-1 border-slate-300">
                <div className="emailImgBox">
                  <i className="fa-regular fa-envelope  text-slate-500"></i>
                </div>
                <div className="emailInputBox w-full text-slate-500">
                  <input
                    className=" w-full placeholder:text-slate-500 outline-0"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
            <div className="messageFieldContainer flex flex-col gap-1">
              <p className="font-medium">Your Message</p>
              <div className="messageBox  border flex p-1.5  rounded-lg gap-1 border-slate-300 ">
                <div className="messageImgBox">
                  <i className="fa-solid fa-pen  text-slate-500"></i>
                </div>
                <div className="messageInputBox  w-full min-h-25 text-slate-500">
                  <textarea
                    className="w-full min-h-25 placeholder:text-slate-500 outline-0"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="formSubmitContainer border p-3 flex items-center justify-center gap-2 border-blue-400 rounded-lg text-blue-500 font-bold bg-blue-50 cursor-pointer hover:bg-blue-500 hover:text-white">
            <i class="fa-solid fa-paper-plane"></i>
            <p>Send Message</p>
          </div>
        </div>
      </div>

      <div className="socialLinksContainer w-340 mx-auto">
        <div className=" bg-white rounded-lg flex justify-between items-center p-2.5 gap-8.5 shadow-md">
          {" "}
          <div className="leftSide  flex w-[40%] py-2 px-4.5 gap-4 items-center border-r border-slate-300">
            <div className="paperPlaneBox  rounded-[50%] flex items-center justify-center w-15 h-15 bg-blue-100">
              <i className="fa-solid fa-paper-plane text-2xl text-blue-500"></i>
            </div>
            <div className="workTogetherBox w-75">
              <h2 className="font-bold">Let's work together!</h2>
              <p className="text-slate-500">
                I'm always interested in new opportunities and exciting
                projects.
              </p>
            </div>
          </div>
          <div className="rightSide  flex w-[60%] items-center py-3 px-4.5 gap-4 ">
            <p className="text-slate-500 w-[20%]">Also find me on</p>
            <div className="socialImgBox flex items-center justify-between  w-[60%]">
              <div className="w-15 h-15 bg-blue-100 rounded-[50%] flex items-center justify-center ]">
                <i class="fa-brands fa-github text-blue-500 text-3xl"></i>
              </div>
              <div className="w-15 h-15 bg-blue-100 rounded-[50%] flex items-center justify-center">
                <i class="fa-brands fa-linkedin-in text-blue-500 text-3xl"></i>
              </div>
              <div className="w-15 h-15 bg-blue-100 rounded-[50%] flex items-center justify-center">
                <i class="fa-brands fa-twitter"></i>
              </div>

              <div className="w-15 h-15 bg-blue-100 rounded-[50%] flex items-center justify-center">
                <i className="fa-regular fa-envelope  text-blue-500 text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
