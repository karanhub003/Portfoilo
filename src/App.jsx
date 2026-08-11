import React from "react";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import "./index.css";
import AboutMe from "./components/AboutMe";

export const App = () => {
  return (
    <>
      <header className="bg-slate-900 w-full">
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <AboutMe />
      </main>
      <footer></footer>
    </>
  );
};
