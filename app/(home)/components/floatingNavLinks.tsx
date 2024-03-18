"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconStackFilled, IconUser } from "@tabler/icons-react";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { BiSolidTrophy } from "react-icons/bi";
import { cn } from "@/lib/utils";

export function FloatingNavDemo({ sectionRefs }: { sectionRefs: any }) {
  const navItems = [
    {
      name: "Home",
      ref: sectionRefs.heroSection,
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      ref: sectionRefs.skillsSection,
      icon: <SiFuturelearn className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      ref: sectionRefs.projectsSection,
      icon: (
        <GoProject className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Experience",
      ref: sectionRefs.experienceSection,
      icon: (
        <MdOutlineWork className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Achievements",
      ref: sectionRefs.achievementsSection,
      icon: (
        <BiSolidTrophy className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

       // Add the "About Me" button here
       {
        name: "About Me",
        ref: sectionRefs.aboutmeSection,
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        className: cn(
          "border text-xs font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-3 py-1.5 rounded-full relative",
          "hidden sm:inline-flex items-center space-x-1"
        ),
        underline: (
          <span className="absolute inset-x-5 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        ),
      },

  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}