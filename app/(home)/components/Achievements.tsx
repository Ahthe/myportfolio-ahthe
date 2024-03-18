import React from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Achievements() {
  const achievements = [
    {
      title: "Grizz Hacks 6 Hackathon Winner",
      description: "Winners for the best UI/UX award at GrizzHacks among 30+ teams at my very first Hackathon.",
      icon: '🏆🥇',
      link: 'https://devpost.com/Ahthe',
    },
    {
      title: "Dean's List",
      description: "Achieved Dean's List recognition for academic excellence.",
      icon: '🏆',
      link: 'https://meritpages.com/Ahthesham-Ali-Syed/5723795',
    },
    {
      title: 'Scout Leader',
      description: 'Guided scouts to first place in challenges, honing strategic leadership and team coordination.',
      icon: '🏆🥇',
    },
    {
      title: 'Cricket Team Captain',
      description: 'Led the cricket team, bolstering team spirit and resilience, and enhancing communication in High School.',
      icon: '🏏',
    },
    {
        title: 'Winner of Alhali Club Swimming Compitation',
        description: 'Won the Alhali Club Swimming Compitation',
        icon: '🏆🥇',
    },
    {
        title: 'House Captain',
        description: 'Blue House Captain in my High School',
        icon: '👨‍✈',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <Title text="Achievements👑" className="flex flex-col items-center justify-center mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
              <p className="text-white">{achievement.description}</p>
            </div>
            {achievement.link && (
              <div className="mt-6">
                <Link href={achievement.link} target="_blank">
                  <motion.button
                    className="bg-white text-indigo-500 px-4 py-2 rounded-full font-semibold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}