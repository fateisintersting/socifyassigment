
import React from 'react';

import { TbHeartSearch ,TbHeartCheck ,TbHearts  } from "react-icons/tb";

import Link from 'next/link';

interface HeaderProps {
  activeTab?: 'find' | 'likes' | 'matches';
}
export default function Header({ activeTab }: HeaderProps) {

  return (
    <header  className="w-full h-15 bg-primary py-4 px-4 flex items-center justify-between border-b border-gray-800 ">
      <div className='hidden md:block'>
      <div className="flex flex-col items-center    ">
        <h1 className="text-xm font-semibold tracking-wider text-white">
          S W I P E V E R S E
        </h1>
        <span className="text-xs text-gray-400 ml-1 mt-auto"> UNBAISED DATING APP</span>
      </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-3 font-bold gap-14 w-full max-w-md mx-auto">
        <Link href="/find" className={`flex flex-col items-center ${activeTab === 'find' ? 'text-white' : 'text-gray-400'}`}>
          <div className="flex flex-row gap-2">
            <TbHeartSearch  size={28} />
          </div>
        </Link>

        <Link href="/likes" className={`flex flex-col items-center ${activeTab === 'likes' ? 'text-white' : 'text-gray-400'}`}>
          <div className="relative flex flex-row gap-2">
            
            <TbHearts size={28} />
            <span className="absolute -top-2 -left-[-14px] bg-red-700 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center">
              8
            </span>
         
          
           </div>
        </Link>

        <Link href="/matches" className={`flex flex-col items-center ${activeTab === 'matches' ? 'text-white' : 'text-gray-400'}`}>
          <div className="relative flex flex-row gap-2">
            <TbHeartCheck size={28} />

            <span className="absolute -top-2 -left-[-12px] bg-red-700 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center">
              1
            </span>
          
         
          </div>
        </Link>
        
        <Link href='/' className='flex flex-col items-center shadow-amber-100  md:hidden' >
           <div className='avatar avatar-placeholder  relative flex flex-row gap-2'>
          <span className='text-xm '>VK</span>
        </div>
      

        
      </Link>
    </div>

      <div className='border-l border-gray-400 h-8 ml-2 hidden md:flex items-center justify-center'>
      <div className="flex flex-row ml-2    bg-black rounded-sm rounded-r-full ">
        <div className="text-left p-1 ml-2   ">
          <div className="text-sm mr-2 text-white font-medium">Vishal Kumar</div>
          <div className="text-xs text-gray-400">0x10..12</div>
         </div>

        <div className='avatar avatar-placeholder'>
          <div className='bg-warning text-neutral-content h-10 w-10 rounded-full'>
            <span className='text-sm '>VK</span>
          </div>
        </div>
       
      </div>
      </div>
      
    </header>
  );
}
