import React from "react";
import NavBar  from "./components/NavBar";
import  HeroSection  from "./components/HeroSection";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";


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
      </main>
      <footer></footer>
    </>
  );
};
