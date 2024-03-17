import React from 'react'
import { SiCplusplus, SiCss3, SiExpress, SiHtml5, SiJavascript, SiNextdotjs, SiOpenai, SiPython, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Experience() {
  
    const experience = [
        
        {
            title: "Wave Wallet",
            tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiCplusplus],
            link: "https://devpost.com/software/wavewallet",
            cover: "/1.png",
            background: "bg-gray-800",

        },
        

    ]
    
    
    return( 
    
    
    <div className='max-w-5xl mx-auto px-8'>
         <Title
                text="Experience 💪" className='flex flex-col items-center justify-center'
            />


        </div>
    
    );
    
}
