import React from 'react';
import Title from './Title';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';

export default function Experience() {
  const experiences = [
    {
      company: "American Muslim Center Dearborn",
      location: "Remote",
      position: "Full Stack Web Developer",
      duration: "Mar 2024 - Current",
      description: (
        <>
          &bull; Expanded community reach from 800+ to potentially 1000+ members by developing an event booking website
          using NextJS, MongoDB, Clerk, and StripeAPI, streamlining registration and addressing social health concerns<br />
          &bull; Created an interactive Quiz app with NextJS, Sanity.io, and MongoDB for summer school children and 
          implemented engaging features such as leaderboards, increasing student engagement through gamified education<br />
        </>
      ),
    },

    {
      company: "Headstarter AI",
      location: "NY, Hybrid",
      position: "Incoming Software Engineering Fellow",
      duration: "July 2024 - Current",
      description: (
        <>
          &bull; Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI as seen by 1000 users<br />
          &bull; Develop projects from design to deployment leading 4+ engineering fellows using MVC design patterns<br />
          &bull; Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git and microservice patterns<br />
        </>
      ),
    },
    
    {
      company: "ACBSP VR Technologies - StartUp",
      location: "Alliance, OH",
      position: "Software Engineer",
      duration: "Sept 2022 - Apr 2023",
      description: (
        <>
          &bull; Tasked with creating a VR action game in Unity to study psychological behavior and improve research studies<br />
          &bull; Constructed a VR action game in Unity using C# and Oculus SDK, targeting the prefrontal cortex to reduce user stress and anxiety by 30%, through strategic enemy dismemberment scenarios<br />
        </>
      ),
    },


    // {
    //   company: "Welocalize - Contract Amazon",
    //   location: "Remote",
    //   position: "AI Data Annotator - Part Time",
    //   duration: "May 2024 - Current",
    //   description: (
    //     <>
    //       &bull; Perform AI-driven evaluations through data labeling, contributing to improved Amazon search result accuracy<br />
    //       &bull; Enhance AI suggestion systems by selecting highly relevant options, aiming to increase customer satisfaction<br />
    //     </>
    //   ),
    // },



    {
      company: "University of Mount Union",
      location: "Alliance, OH",
      position: "Computer Science and Math Tutor",
      duration: "Jan 2022 - Dec 2023",
      description: (
        <>
        &bull; Improved grades of 90% of tutored students from failing grades of 55% to high achievers 85-90% within a semester 
        by tutoring in Systems Programming, Data Structures, Algorithms, and Mathematics<br />
        &bull; Analyzed and debugged code in Java, C#, Swift and SQL using IDE tools and debugging techniques, while teaching
        key mathematical concepts such as calculus, linear algebra, and statistics resulting in a 35% grade increase<br />
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
          &bull; Increased operational efficiency by 20% for 150+ staff across multiple branches by implementing network 
          configurations, providing remote support, and optimizing Dentrix Ascend software for improved dental imaging<br />
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