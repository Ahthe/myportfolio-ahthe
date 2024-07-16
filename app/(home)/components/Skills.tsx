"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCplusplus, SiCsharp, SiCss3, SiExpress, SiFigma, SiFlask, SiGithub, SiGo, SiGooglecloud, SiHtml5, SiJavascript, SiJquery, SiLinux, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPython, SiReact, SiRust, SiSharp, SiSpringboot, SiSvelte, SiSwift, SiTailwindcss, SiThreedotjs, SiTypescript, SiUnity } from 'react-icons/si'
import { FaAws, FaCode, FaJava } from 'react-icons/fa6'
import { TbApi, TbSdk, TbSql } from 'react-icons/tb'
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi'
import { MdCss, MdHtml } from 'react-icons/md'

export default function Skills() {


  const skills = [

    { text: "Java", Icon: FaJava },

    { text: "C++", Icon: SiCplusplus },
    
    { text: "Python", Icon: SiPython },

    { text: "JavaScript", Icon: SiJavascript },

    { text: "C#", Icon: SiCsharp },

    { text: "Swift", Icon: SiSwift },

    { text: "SQL", Icon: TbSql },

    { text: "MongoDB", Icon: BiLogoMongodb },

    { text: "HTML/CSS", Icon: FaCode },

    { text: "LaTeX", Icon: MdHtml },
    


    //Frameworks and Libraries
    
    { text: "NextJS", Icon: SiNextdotjs },

    { text: "React", Icon: SiReact },

    { text: "Typescript", Icon: SiTypescript },
    
    { text: "NodeJS", Icon: SiNodedotjs },
    
    { text: "Tailwind", Icon: SiTailwindcss },

    { text: "Spring", Icon: SiSpringboot },

    { text: "ASP.NET", Icon: SiExpress },

    { text: "Flask", Icon: SiFlask },

    { text: "Svelte", Icon: SiSvelte },
      
    // { text: "ThreeJS", Icon: SiThreedotjs },
        
    // { text: "API Integrations", Icon: TbApi },

        
    // Tools

    { text: "AWS", Icon: FaAws},

    { text: "Google Cloud", Icon: SiGooglecloud },

    { text: "Git", Icon: SiGithub },

    { text: "CI/CD", Icon: TbSdk },

    { text: "REST API", Icon: TbApi },

    { text: "Unity", Icon: SiUnity },
    
    { text: "Figma", Icon: SiFigma },

    { text: "Linux", Icon: SiLinux },


    
    // { 
    //   text: "REST API ", 
    //   Icon: AiOutlineCloudServer 
    // },

    // { 
    //   text: "CSS", 
    //   Icon: SiCss3 
    // },

        // { 
    //   text: "PostgresSQL", 
    //   Icon: BiLogoPostgresql 
    // },

    // { text: "RUST", Icon: SiRust },
    
    // { text: "GO", Icon: SiGo },

      
  ]


  return (
      <div className='max-w-5xl mx-auto px-8'>
         <Title
                text="Skills 🛠️" className='flex flex-col items-center justify-center'
            />
        
        <HoverEffect items={skills}/>
      </div>
  )
}
