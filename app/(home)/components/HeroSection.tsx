import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react';
import Title from './Title';
import { FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold'>
          Nice to meet you! 👋 <br />
          <span className='text-blue-500 dark:text-blue-500 underline underline-offset-8 decoration-green-500'>
            {"I'm Ahthesham."}
          </span>
        </h1>
        <p className='md:w-96 text-lg text-gray-300'>
          {
            "I'm a Full Stack Developer, who loves to build web applications and solve problems. I'm always open to Feel free to reach out to me!."
          }
        </p>
        <Link href={'ahtheshamali786@gmail.com'} className='inline-block group'>
          <Title text='Contact Me 📫' />
        </Link>
      </div>
      <div className='relative'>
        <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
          <div className='flex gap-3 translate-x-8'>
            <div className='w-32 h-32 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 relative overflow-hidden '>
              <div className='absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <FaCode className='w-16 h-16 text-white animate-bounce' />
              </div>
            </div>
            <div className='w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 relative overflow-hidden '>
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <FaDatabase className='w-16 h-16 text-white animate-spin' />
              </div>
            </div>
          </div>
          <div className='flex gap-3 -translate-x-8'>
            <div className='w-32 h-32 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 relative overflow-hidden '>
              <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <FaServer className='w-16 h-16 text-white animate-pulse' />
              </div>
            </div>
            <div className='w-32 h-32 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 relative overflow-hidden '>
              <div className='absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <FaMobile className='w-16 h-16 text-white animate-bounce' />
              </div>
            </div>
          </div>
          <div className='glow absolute top-[40%] right-1/2 -z-10 '></div>
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <div className='w-24 h-24 rounded-full bg-white opacity-0 animate-ping'></div>
          </div>
        </div>
        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
          <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
            <p>💻 Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}