import React from 'react';
import { SiCplusplus, SiCss3, SiExpress, SiHtml5, SiJavascript, SiNextdotjs, SiOpenai, SiPython, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';

export default function Experience() {
  const experiences = [
    {
      company: "ACBSP VR Technologies",
      location: "Alliance, OH",
      position: "Software Engineer",
      duration: "Sept 2022 - Apr 2023",
      description: (
        <>
          &bull; Developed a C# Unity-based VR application to analyze psychological behavior, enhancing research accuracy.<br />
          &bull; Designed VR scenarios such as a rage room horror scenario with Unity and Oculus SDK increasing user engagement by 17%.<br />
          &bull; Integrated Kanban, improving project efficiency and team collaboration by 23%.
        </>
      ),
    },
    {
      company: "University of Mount Union",
      location: "Alliance, OH",
      position: "Cataloging Assistant",
      duration: "Aug 2020 - Dec 2023",
      description: (
        <>
          &bull; Boosted cataloging efficiency and inventory accuracy by 17% through advanced proficiency in OCLC and Sierra.<br />
          &bull; Expanded library collection by 27%, integrating 2,000+ titles, which raised borrower engagement by 13%.<br />
        </>
      ),
    },
    {
      company: "Taha Optical Retial Chains",
      location: "Jeddah, Saudi Arabia",
      position: "Operations Manager",
      duration: "Aug 2016 - Jan 2020",
      description: (
        <>
          &bull; Led business operations across retail chains, cutting costs by 12% and raising customer satisfaction by 18%.<br />
          &bull; Implemented security and surveillance system deployment, significantly improving loss prevention.<br />
        </>
      ),
    },
    // Add more experience objects as needed
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="Experience 💪" className="flex flex-col items-center justify-center text-white" />
      <div className="bg-gradient-to-r from-black to-gray-800 bg-opacity-15 p-8 rounded-lg shadow-lg mt-8">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8">
            <div className="relative group perspective-1000">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md transition duration-500 ease-in-out group-hover:bg-gradient-to-r from-gray-900 to-gray-800 group-hover:scale-115 group-hover:shadow-lg transform-style-3d group-hover:rotate-x-50 group-hover:rotate-y-20 group-hover:-translate-x-10 group-hover:-translate-y-10 group-hover:z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white font-montserrat">{experience.company}</h3>
                  <p className="text-gray-400 font-montserrat">{experience.duration}</p>
                </div>
                <p className="text-gray-300 mb-2 font-montserrat">{experience.location}</p>
                <p className="text-lg font-semibold text-white mb-2 font-montserrat">{experience.position}</p>
                <p className="text-gray-100 font-montserrat leading-relaxed">{experience.description}</p>
              </div>
            </div>
            {index !== experiences.length - 1 && (
              <div className="border-b border-teal-500 my-8"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}