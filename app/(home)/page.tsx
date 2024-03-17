import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { GridBackgroundDemo } from "@/components/ui/GridBackground";
import Skills from "./components/Skills";
import CursorBlob from "@/components/ui/cursorBlob";
import Projects from "./components/Projects";


export default function page() {
  return (
    <div>
     <CursorBlob/>
    <div className="min-h-[400vh] bg-black overflow-hidden">
      
      <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills/>
        <Projects />
        
      </div>
    </div>

    </div>
  );
}
