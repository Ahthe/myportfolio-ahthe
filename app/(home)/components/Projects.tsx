import React from 'react'
import { SiCss3, SiExpress, SiHtml5, SiJavascript } from 'react-icons/si';
import Title from './Title';

export default function Projects() {
  
    const projects = [
        
        {
            title: "Wreak It Down Game",
            tech: [SiHtml5, SiJavascript, SiCss3, SiExpress],
            link: "https://ahthe.github.io/Wreak-IT-Down--Multiplayer/",
            cover: "/next.svg",
            background: "bg-gray-500",

        },
    ]
    
    
    return( 
    
        <div className='py-10 p-5 sm:p-0'>
            
            <Title
            
                text="Projects"

                className='flex flex-col items-center justify-center '

            />
             
        </div>
    
    );
    
}

