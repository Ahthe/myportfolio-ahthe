"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconStackFilled, IconUser } from "@tabler/icons-react";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { GoProject } from "react-icons/go";

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
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}