"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCplusplus, SiCsharp, SiCss3, SiExpress, SiFigma, SiFlask, SiGithub, SiGo, SiGooglecloud, SiHtml5, SiJavascript, SiJquery, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPython, SiReact, SiRust, SiSharp, SiSpringboot, SiSwift, SiTailwindcss, SiThreedotjs, SiUnity } from 'react-icons/si'
import { FaAws, FaCode, FaJava } from 'react-icons/fa6'
import { TbApi, TbSdk, TbSql } from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'
import { MdCss, MdHtml } from 'react-icons/md'

export default function Skills() {


  const skills = [

    { 
      text: "HTML/CSS", 
      Icon: FaCode
    },
    
    // { 
    //   text: "CSS", 
    //   Icon: SiCss3 
    // },
    
    { 
      text: "JavaScript", 
      Icon: SiJavascript 
    },
    
    { 
      text: "React", 
      Icon: SiReact 
    },
    
    { 
      text: "Next.js", 
      Icon: SiNextdotjs 
    },
    
    { 
      text: "Tailwind", 
      Icon: SiTailwindcss 
    },
    
    { 
      text: "Node.js", 
      Icon: SiNodedotjs
    },
      
    { text: "Three.js", Icon: SiThreedotjs },
    
    { 
      text: "Java", 
      Icon: FaJava 
    },
    
    { 
      text: "Python", 
      Icon: SiPython 
    },
    
    { 
      text: "C#", 
      Icon: SiCsharp 
    },
        
    { 
      text: "C++", 
      Icon: SiCplusplus 
    },

    // { text: "RUST", Icon: SiRust },
    
    { text: "GO", Icon: SiGo },

    { 
      text: "Swift", 
      Icon: SiSwift 
    },
    
    { 
      text: "SQL", 
      Icon: TbSql
    },
    
    { 
      text: "PostgresSQL", 
      Icon: BiLogoPostgresql 
    },
   
    { 
      text: "API Integrations", 
      Icon: TbApi 
    },

    // { 
    //   text: "REST API ", 
    //   Icon: AiOutlineCloudServer 
    // },
        
    { text: "Git", Icon: SiGithub },
    
    { text: "Google Cloud", Icon: SiGooglecloud },
    
    { text: "Unity", Icon: SiUnity },
      
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
