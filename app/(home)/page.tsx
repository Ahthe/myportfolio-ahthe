"use client";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { GridBackgroundDemo } from "@/components/ui/GridBackground";
import Skills from "./components/Skills";
import CursorBlob from "@/components/ui/cursorBlob";
import Projects from "./components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingNavDemo } from "./components/floatingNavLinks";

export default function Page() {
  const heroSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  return (
    <div>
      <CursorBlob />
      <div className="min-h-[400vh] bg-black overflow-hidden">
        <div className="dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
          <div className="max-w-7xl mx-auto p-5 ">
            <Navbar />
            <FloatingNavDemo
              sectionRefs={{
                heroSection: heroSectionRef,
                skillsSection: skillsSectionRef,
                projectsSection: projectsSectionRef,
              }}
            />
            <div ref={heroSectionRef}>
              <HeroSection />
            </div>
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
        </div>
      </div>
    </div>
  );
}