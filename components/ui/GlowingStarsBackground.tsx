"use client"
// GlowingStarsBackground.tsx
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function GlowingStarsBackground() {
  const stars = 200;
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      <div
        className="h-full w-full"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(50px, 1fr))`,
          gap: `10px`,
        }}
      >
        {[...Array(stars)].map((_, starIdx) => {
          const isGlowing = glowingStars.includes(starIdx);
          const delay = (starIdx % 10) * 0.1;
          return (
            <div
              key={`star-${starIdx}`}
              className="relative flex items-center justify-center"
            >
              <Star isGlowing={isGlowing} delay={delay} />
              <AnimatePresence mode="wait">
                {isGlowing && <Glow delay={delay} />}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? '#fff' : '#666',
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      className={cn('bg-[#666] h-[2px] w-[2px] rounded-full relative z-20')}
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[6px] w-[6px] rounded-full bg-blue-500 blur-[2px] shadow-2xl shadow-blue-400"
    />
  );
};