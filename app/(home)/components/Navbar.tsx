import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiDevpost, SiGithub, SiGmail, SiLinkedin } from "react-icons/si";


export default function Navbar({className}:{className?: string}) {

   const socials = [
    {
      Link: "https://www.linkedin.com/in/ahthesham-ali-syed-5723881a3/",
      Label: "Linkedin",
      Icon: SiLinkedin,

    },

    {
        Link: "https://github.com/Ahthe",
        Label: "Github",
        Icon: SiGithub,
  
    },

    {
        Link: "ahtheshamali786@gmail.com",
        Label: "Gmail",
        Icon: SiGmail,
  
    },

    {
        Link: "https://devpost.com/Ahthe?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
        Label: "Devpost",
        Icon: SiDevpost,
  
    },
   ];


  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'> Syed Ahthesham Ali 👨‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social, index)=>{
                
              const Icon = social.Icon
                
             return( 
                    <Link 
                        href={social.Link} 
                        key={index} 
                        aria-label={social.Label}
                        target="_blank"> 
                <Icon className='w-5 h-5 hover:scale-125 transition-all' />
             </Link> 
             ); 
            })}
        </div>
    </nav>
  )
}
