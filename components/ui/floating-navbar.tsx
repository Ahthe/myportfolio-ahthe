"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
  hideDuration = 5000,
}: {
  navItems: {
    name: string;
    ref: React.RefObject<HTMLElement>;
    icon?: JSX.Element;
  }[];
  className?: string;
  hideDuration?: number;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          const newTimeoutId = setTimeout(() => {
            setVisible(false);
          }, hideDuration);
          setTimeoutId(newTimeoutId);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleNavItemClick = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<AnimatePresence mode="wait">
  <motion.div
    initial={{
      opacity: 1,
      y: 0,
    }}
    animate={{
      y: visible ? 0 : -100,
      opacity: visible ? 1 : 0,
    }}
    transition={{
      duration: 0.2,
    }}
    className={cn(
      "flex max-w-fit fixed top-2 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-3 pl-4 py-2 items-center justify-center space-x-4",
      className
    )}
  >
    {navItems.map((navItem: any, idx: number) => (
      <button
        key={`link=${idx}`}
        onClick={() => handleNavItemClick(navItem.ref)}
        className={cn(
          "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-xs font-sans tracking-wide",
          navItem.className
        )}
      >
        {navItem.icon}
        {navItem.underline}
      </button>
    ))}
  </motion.div>
</AnimatePresence>
  );
};
