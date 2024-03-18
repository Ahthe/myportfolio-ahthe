import React from 'react'
import { SiCplusplus, SiCsharp, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiOpenai, SiPython, SiSanity, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { FaJava } from 'react-icons/fa6';

export default function Projects() {
  
    const projects = [
        
        {
            title: "Wave Wallet",
            tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiCplusplus],
            link: "https://devpost.com/software/wavewallet",
            cover: "/1.png",
            background: "bg-gray-800",

        },
        
        {
            title: "Wreak It Down Game!",
            tech: [SiHtml5, SiJavascript, SiCss3, SiExpress],
            link: "https://ahthe.github.io/Wreak-IT-Down--Multiplayer/",
            cover: "/2.png",
            background: "bg-gray-800",

        },

        {
            title: "Sentiment Analyzer Tool",
            tech: [SiPython],
            link: "https://github.com/Ahthe/Sentiment-Analyzer-for-Stock-News",
            cover: "/4.png",
            background: "bg-gray-800",

        },

        {
            title: "AI Fable Trail",
            tech: [SiPython, SiOpenai],
            link: "https://github.com/Ahthe/AI-FableTrail",
            cover: "/3.png",
            background: "bg-gray-800",

        },

        {
            title: "AI ChatBot",
            tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiOpenai],
            link: "https://github.com/Ahthe/ai-chat-bot-nextjs",
            cover: "/7.png",
            background: "bg-gray-800",

        },

        {
            title: "Recipe Webpage",
            tech: [SiHtml5,SiCss3,SiJavascript, SiVuedotjs],
            link: "https://github.com/Ahthe/Vue-Recipe-Webpage",
            cover: "/6.png",
            background: "bg-gray-800",

        },

        {
            title: "Restuarant Reservation System",
            tech: [SiHtml5,SiCss3,SiJavascript,SiCsharp,SiMysql],
            link: "https://github.com/Ahthe/Restaurant-Reservation-System",
            cover: "/8.png",
            background: "bg-gray-800",

        },

        {
            title: "Sudoku Solver",
            tech: [FaJava],
            link: "https://github.com/Ahthe/Restaurant-Reservation-System",
            cover: "/9.png",
            background: "bg-gray-800",

        },

        {
            title: "Blog Website",
            tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiSanity],
            link: "https://blog-nextjs-13-two.vercel.app",
            cover: "/10.png",
            background: "bg-gray-800",

        },

    ]
    
    
    return( 
    
        <div className='py-10 p-5 sm:p-0'>
            
            <Title
            
                text="Projects 🎯"

                className='flex flex-col items-center justify-center '

            />

            <div className='grid grid-col-1 sm:grid-cols-3 pt-20 gap-5' >

                {projects.map((project, index) => {
                
                return ( 
                
                    <Link href={project.link} key={index} target="_blank">
                    <div 
                        className={cn(
                            "p-1 rounded-md", 
                            project.background
                        )}

                    >

                        <DirectionAwareHover
                        
                        imageUrl={project.cover}

                        className='w-full space-y-5 cursor-pointer'>

                            
                        <div className='space-y-5'>
                            <h1 className='text-2xl font-bold'>{project.title}</h1>

                            <div className='flex items-center gap-5'>
                                {project.tech.map((Icon, index)=> {

                                 return <Icon 
                                        className='w-8 h-8' 
                                        key={index}
                                        
                                    />;
                              
                                })}
                            </div>
                        </div>

                        </DirectionAwareHover>
                    </div>
                    
                    </Link>

                );

                })}

            </div>
             
        </div>
    
    );
    
}

