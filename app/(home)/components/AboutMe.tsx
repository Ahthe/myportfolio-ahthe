import React from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const World = dynamic(() => import('@/components/ui/globe').then((m) => m.World), {
  ssr: false,
});

export default function AboutMe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0e1e3e",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#0e1e3e",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const projectLocations = [
    {
      order: 1,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.2,
      color: "#06b6d4",
      project: "Wave Wallet",
      description: "A decentralized crypto wallet built with Next.js, Tailwind CSS, and Ethers.js.",
    },
    {
      order: 2,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.3,
      color: "#3b82f6",
      project: "Sneaker Hub",
      description: "An e-commerce platform for sneaker enthusiasts developed using React and Node.js.",
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: -37.8136,
      endLng: 144.9631,
      arcAlt: 0.1,
      color: "#6366f1",
      project: "Fitness Tracker",
      description: "A mobile app for tracking fitness goals and activities built with Flutter and Firebase.",
    },
    {
      order: 4,
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: 37.5665,
      endLng: 126.978,
      arcAlt: 0.2,
      color: "#ec4899",
      project: "Task Manager",
      description: "A web-based task management application developed using Angular and MongoDB.",
    },
    // Add more project locations...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Title
        text="About Me 🫅"
        className="flex flex-col items-center justify-center mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Hi, I&apos;m Ahthesham Ali
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate and dedicated entry-level developer with a strong
            foundation in computer science. I recently graduated with a degree
            in CS and have been honing my skills through various projects and
            collaborations.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            My expertise lies in web development, particularly in technologies such as
            React, Node.js, and MongoDB. I&apos;m always eager to learn and explore new
            concepts in the ever-evolving field of software development.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            When I&apos;m not coding, you can find me exploring the outdoors, playing
            basketball, or immersed in a good science fiction novel. I enjoy
            collaborating with others and solving complex problems through
            innovative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-blue-500">My Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore the projects I&apos;ve worked on around the globe!
            </p>
          </div>
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <World data={projectLocations} globeConfig={globeConfig} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}