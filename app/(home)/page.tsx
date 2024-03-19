"use client";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import CursorBlob from "@/components/ui/cursorBlob";
import Projects from "./components/Projects";
import { FloatingNavDemo } from "./components/floatingNavLinks";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function Page() {
  const heroSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const achievementsSectionRef = useRef(null);
  const aboutmeSectionRef = useRef(null);
  return (
    <div>
      <CursorBlob />
      <div className="min-h-screen bg-black overflow-hidden">
        <div className="dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
          <div className="max-w-7xl mx-auto p-5 ">
            <div ref={heroSectionRef}>
              <Navbar />
            </div>
            <FloatingNavDemo
              sectionRefs={{
                heroSection: heroSectionRef,
                skillsSection: skillsSectionRef,
                projectsSection: projectsSectionRef,
                experienceSection: experienceSectionRef,
                achievementsSection: achievementsSectionRef,
                aboutmeSection: aboutmeSectionRef,
              }}
            />
            <HeroSection />
          </div>
          <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
        </div>

        <div className="max-w-7xl mx-auto p-5 mt-20">
          <div ref={skillsSectionRef}>
            <Skills />
          </div>

          <div ref={projectsSectionRef}>
            <Projects />
          </div>

          <div ref={experienceSectionRef}>
          <div className="max-w-7xl mx-auto p-5 mt-16">
            <Experience />
            </div>
          </div>

          <div ref={achievementsSectionRef}>
            <Achievements />
          </div>

          <Footer />

        </div>  
      </div>
    </div>
  );
}

  {/* <div className="max-w-7xl mx-auto p-5 mt-19"> 
          <div ref={aboutmeSectionRef}>
            <AboutMe />
          </div> 
          </div> */}

     {/* <div className="max-w-7xl mx-auto p-5 mt-19">
          <div ref={experienceSectionRef}>
            <Experience />
          </div>
          </div>
        
      
        <div className="max-w-7xl mx-auto p-5 mt-19"> 
          <div ref={achievementsSectionRef}>
            <Achievements />
          </div>
          <Footer />
          </div>  */}
