// cursorBlob.tsx
"use client"

// cursorBlob.tsx
import React, { useEffect, useRef } from 'react';
import styles from '@/styles/CursorBlob.module.css';
import Image from 'next/image';

const CursorBlob = () => {
  const circlesRef = useRef<HTMLSpanElement[]>([]);
  const svgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const coords = useRef({ x: 0, y: 0 });

  const animateCircles = () => {
    let x = coords.current.x;
    let y = coords.current.y;

    circlesRef.current.forEach((circle, index) => {
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      const len = circlesRef.current.length * 2;
      circle.style.transform = `scale(${((len - index) / len) * (window.innerWidth / 1400)})`;
      circle.setAttribute('data-x', x.toString());
      circle.setAttribute('data-y', y.toString());
      const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
      const nextX = Number(nextCircle.getAttribute('data-x'));
      const nextY = Number(nextCircle.getAttribute('data-y'));
      x += (nextX - x) * 0.1;
      y += (nextY - y) * 0.1;
    });

    requestAnimationFrame(animateCircles);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX - 20;
      coords.current.y = e.clientY - 20;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (svgRef.current) {
        svgRef.current.style.visibility = 'hidden';
      }
      circlesRef.current.forEach((circle) => {
        circle.style.display = 'block';
      });

      timerRef.current = setTimeout(() => {
        circlesRef.current.forEach((circle) => {
          circle.style.display = 'none';
          if (svgRef.current) {
            svgRef.current.style.visibility = 'visible';
            svgRef.current.style.display = 'block';
          }
        });
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursor}>
      <Image
        ref={svgRef}
        className={`${styles.circle} ${styles.anim_cursor}`}
        src="/blobanimation.svg"
        alt="animation"
        width={10}
        height={10}
      />
      {[...Array(60)].map((_, index) => (
        <span
          key={index}
          ref={(el) => (circlesRef.current[index] = el!)}
          className={styles.circle}
        ></span>
      ))}
    </div>
  );
};

export default CursorBlob;