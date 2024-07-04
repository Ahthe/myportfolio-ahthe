import React from 'react';
import Title from './Title';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';

export default function Experience() {
  const experiences = [
    {
      company: "American Muslim Center Dearborn",
      location: "Remote",
      position: "Full Stack Web Developer - Part Time",
      duration: "Mar 2024 - Current",
      description: (
        <>
          &bull; Developing new webpages for community projects using HTML, CSS, JavaScript, React, and Next.js<br />
          &bull; Collaborating with IT team to implement new features and optimize performance, and to reduce the bounce rate<br />
          &bull; Implement user-centric features to enhance community engagement and improve overall user experience<br />
        </>
      ),
    },
    
    {
      company: "ACBSP VR Technologies",
      location: "Alliance, OH",
      position: "Software Developer",
      duration: "Sept 2022 - Apr 2023",
      description: (
        <>
          &bull; Developed a C# Unity-based VR application to analyze psychological behavior, enhancing research accuracy.<br />
          &bull; Designed VR scenarios such as a rage room horror scenario with Unity and Oculus SDK increasing user engagement by 17%.<br />
          {/* &bull; Integrated Kanban, improving project efficiency and team collaboration. */}
        </>
      ),
    },
    {
      company: "University of Mount Union",
      location: "Alliance, OH",
      position: "Programming and Math Tutor",
      duration: "Jan 2022 - Dec 2023",
      description: (
        <>
        &bull; Provided one-on-one and group tutoring sessions in programming languages (Java, Swift, C#) and Math courses, helping students grasp complex concepts, resulting in an average grade improvement of 30%.<br />
        </>
      ),
    },
    // {
    //   company: "University of Mount Union",
    //   location: "Alliance, OH",
    //   position: "Cataloging Assistant",
    //   duration: "Aug 2020 - Dec 2023",
    //   description: (
    //     <>
    //       &bull; Boosted cataloging efficiency and inventory accuracy by 17% through advanced proficiency in OCLC and Sierra.<br />
    //       &bull; Expanded library collection by 27%, integrating 2,000+ titles, which raised borrower engagement by 13%.<br />
    //     </>
    //   ),
    // },
    {
      company: "IT Technician Intern",
      location: "East Lansing, MI - Hybrid",
      position: "East Lancing Modern Dental",
      duration: "Dec 2021 - May 2022",
      description: (
        <>
          &bull; Provided efficient remote technical support, troubleshooting complex issues for a staff of 20+. <br />
          &bull; Implemented system enhancements that improved overall operational efficiency by 20%. <br />
          &bull; Maintained and optimized computer systems and databases, ensuring 99.9% uptime. <br />
        </>
      ),
    },
    // {
    //   company: "Taha Optical Retial Chains",
    //   location: "Jeddah, Saudi Arabia",
    //   position: "Operations Manager",
    //   duration: "Aug 2016 - Jan 2020",
    //   description: (
    //     <>
    //       &bull; Led business operations across retail chains using lean principles and data-driven decisions, reducing costs by 15% and increasing customer satisfaction by 20%.<br />
    //       &bull; Implemented advanced security and surveillance systems with real-time monitoring, reducing shrinkage by 27%.<br />
    //     </>
    //   ),
    // },
    // Add more experience objects as needed.
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title text="Experience 💪" className="flex flex-col items-center justify-center text-white" />
      <div className="bg-gradient-to-r from-black to-gray-800 bg-opacity-15 p-6 rounded-lg shadow-lg mt-8">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8">
            <div className="relative group perspective-1000">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md transition duration-500 ease-in-out group-hover:bg-gradient-to-r from-gray-900 to-gray-800 group-hover:scale-105 group-hover:shadow-lg transform-style-3d group-hover:rotate-x-20 group-hover:rotate-y-20 group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-white font-montserrat mb-2 md:mb-0">{experience.company}</h3>
                  <p className="text-gray-400 font-montserrat text-sm md:text-base">{experience.duration}</p>
                </div>
                <p className="text-gray-300 mb-2 font-montserrat text-sm md:text-base">{experience.location}</p>
                <p className="text-lg font-semibold text-white mb-2 font-montserrat">{experience.position}</p>
                <div className="text-gray-100 font-montserrat leading-relaxed text-sm md:text-base">{experience.description}</div>
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