import React from "react";
import NavBar  from "./components/NavBar";
import  HeroSection  from "./components/HeroSection";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";


export const App = () => {
  return (
    <>
      <header className="bg-slate-900 w-full">
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <AboutMe />
        <Skills/>
        <Experience/>
        <Projects/>
        <ContactMe/>
      </main>
      <footer></footer>
    </>
  );
};
