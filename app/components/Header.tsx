
import React from 'react';
import { Heart, MessageSquare, User } from "lucide-react";
import Link from 'next/link';

interface HeaderProps {
  activeTab?: 'find' | 'likes' | 'matches';
}
export default function Header({ activeTab }: HeaderProps) {

  return (
    <header  className="w-full h-15 bg-primary py-4 px-4 flex items-center justify-between border-b border-gray-800">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold tracking-wider text-white">
          
          S W I P E V E R S E
        </h1>
        <span className="text-xs text-gray-400 ml-1 mt-auto"> UNBAISED DATING APP</span>
      </div>

      <div className="flex items-center  gap-10">
        <Link href="/find" className={`flex flex-col items-center ${activeTab === 'find' ? 'text-white' : 'text-gray-400'}`}>
          <div className="flex flex-row gap-2">
            <MessageSquare size={22} />
          <span className="text-xs mt-1 ">FIND LOVE</span>
          </div>
        </Link>

        <Link href="/likes" className={`flex flex-col items-center ${activeTab === 'likes' ? 'text-white' : 'text-gray-400'}`}>
          <div className="relative flex flex-row gap-2">
            <Heart size={22} />
            <span className="absolute -top-2 -left-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              8
            </span>
         
          <span className="text-xs mt-1">LIKES YOU</span>
           </div>
        </Link>

        <Link href="/matches" className={`flex flex-col items-center ${activeTab === 'matches' ? 'text-white' : 'text-gray-400'}`}>
          <div className="relative flex flex-row gap-2">
            <MessageSquare size={22} />
            <span className="absolute -top-2 -left-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              1
            </span>
          
          <span className="text-xs mt-1">MATCHES</span>
          </div>
        </Link>
      </div>

      <div className='border-l border-gray-500  '>
      <div className="flex flex-row ml-2   bg-gray-900 rounded-sm rounded-r-full ">
        
        <div className="text-left p-1 ml-2   ">
          <div className="text-sm text-white font-medium">Vishal Kumar</div>
          <div className="text-xs text-gray-400">0x10..12</div>
         </div>

        <div className='avatar avatar-placeholder'>
          <div className='bg-warning text-neutral-content w-10 rounded-full'>
            <span className='text-3xl '>VK</span>
          </div>
        </div>
       
      </div>
      </div>
      
    </header>
  );
}
