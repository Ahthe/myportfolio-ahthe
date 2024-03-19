"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { BiSolidTrophy } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { SiCodecademy } from "react-icons/si";
import { FaCode } from "react-icons/fa6";

export function FloatingNavDemo({ sectionRefs }: { sectionRefs: any }) {
  const navItems = [
    {
      name: "Home",
      ref: sectionRefs.heroSection,
      icon: (
        <>
          <IconHome className="h-4 w-4 text-neutral-500 dark:text-white sm:hidden" />
          <span className="hidden sm:inline-block text-xs font-medium text-neutral-600 dark:text-neutral-300 font-sans tracking-wide">
            Home
          </span>
        </>
      ),
    },
    {
      name: "Skills",
      ref: sectionRefs.skillsSection,
      icon: (
        <>
          <IconUser className="h-4 w-4 text-neutral-500 dark:text-white sm:hidden" />
          <span className="hidden sm:inline-block text-xs font-medium text-neutral-600 dark:text-neutral-300 font-sans tracking-wide">
            Skills
          </span>
        </>
      ),
    },
    {
      name: "Experience",
      ref: sectionRefs.experienceSection,
      icon: (
        <>
          <MdOutlineWork className="h-4 w-4 text-neutral-500 dark:text-white sm:hidden" />
          <span className="hidden sm:inline-block text-xs font-medium text-neutral-600 dark:text-neutral-300 font-sans tracking-wide">
            Experience
          </span>
        </>
      ),
    },
        {
      name: "Achievements",
      ref: sectionRefs.achievementsSection,
      icon: (
        <>
          <BiSolidTrophy className="h-4 w-4 text-neutral-500 dark:text-white sm:hidden" />
          <span className="hidden sm:inline-block text-xs font-medium text-neutral-600 dark:text-neutral-300 font-sans tracking-wide">
            Achievements
          </span>
        </>
      ),
    },
    {
      name: "Projects",
      ref: sectionRefs.projectsSection,
      icon: (
        <>
          <FaCode className="h-4 w-4 text-neutral-500 dark:text-white sm:hidden" />
          <span className="hidden sm:inline-block text-xs font-medium text-neutral-600 dark:text-neutral-300 font-sans tracking-wide">
            Projects
          </span>
        </>
      ),
      className: cn(
        "border border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-3 py-1.5 rounded-full relative",
        "items-center space-x-1"
      ),
      underline: (
        <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      ),
    },
    // {
    //   name: "About Me",
    //   ref: sectionRefs.aboutmeSection,
    //   icon: (
    //     <>
    //       <IconUser className="h-4 w-4 text-neutral-500 dark:text-white sm:hidden" />
    //       <span className="hidden sm:inline-block text-xs font-medium text-neutral-600 dark:text-neutral-300 font-sans tracking-wide">
    //         About Me
    //       </span>
    //     </>
    //   ),
    //   className: cn(
    //     "border border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-3 py-1.5 rounded-full relative",
    //     "items-center space-x-1"
    //   ),
    //   underline: (
    //     <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
    //   ),
    // },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}