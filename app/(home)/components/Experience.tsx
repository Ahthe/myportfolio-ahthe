import React from 'react';
import { SiCplusplus, SiCss3, SiExpress, SiHtml5, SiJavascript, SiNextdotjs, SiOpenai, SiPython, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

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
    // Add more experience objects as needed
  ];

  return (
   
      <div className="max-w-5xl mx-auto px-8">
        <Title text="Experience 💪" className="flex flex-col items-center justify-center text-white" />
        <div className="bg-gray-900 bg-opacity-25 p-8 rounded-lg shadow-md mt-8">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                <p className="text-gray-400">{experience.duration}</p>
              </div>
              <p className="text-gray-300 mb-2">{experience.location}</p>
              <p className="text-lg font-semibold text-white mb-2">{experience.position}</p>
              <p className="text-gray-100">{experience.description}</p>
              {index !== experiences.length - 1 && (
                <div className="border-b border-green-500 my-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    
  );
}