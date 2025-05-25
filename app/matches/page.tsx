"use client";
import React, { useState } from 'react';
import ChatList from "./../components/Chatlist";
import ChatView from "./../components/Chatview";
import { mockUsers, mockMessages } from "./../data/mockData";
import Header from '../components/Header';
import { usePathname } from 'next/navigation';


export default function page() {
    const [activeUserId, setActiveUserId] = useState<string | undefined>(undefined);
      const [messages, setMessages] = useState<{ [key: string]: any[] }>(mockMessages);
  const pathname = usePathname();
  const segments = pathname.split('/');
  const activeTab = (segments[2] || 'matches') as 'find' | 'likes' | 'matches';

    
      const handleSelectUser = (userId: string) => {
        setActiveUserId(userId);
      };
    
      const handleSendMessage = (text: string) => {
        if (!activeUserId) return;
    
        const newMessage = {
          id: `${activeUserId}-${Date.now()}`,
          text,
          sentByMe: true,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    
        setMessages(prev => ({
          ...prev,
          [activeUserId]: [...(prev[activeUserId] || []), newMessage]
        }));
      };
    
      const activeUser = activeUserId ? mockUsers.find(user => user.id === activeUserId) : undefined;
      const activeMessages = activeUserId ? messages[activeUserId] || [] : [];
    
  return (
    <div  className="min-h-screen flex flex-col items-center justify-start " >
  {/* Header — now properly constrained to 60% */}
  <Header activeTab={activeTab} />

  {/* Chat Container */}
  <div className='w-[60%] mx-auto"'>
      <div className='border-b-2 border-gray-800 py-2   '>
        <h2 className="text-center text-xs   text-white">
          CHAT WITH PEOPLE WHO MATCHED WITH YOU
        </h2>
    </div>
  <div className="grid grid-cols-2 justify-center overflow-hidden mt-4 p-1 ">
    {/* Left panel */}
    <div className=" border-r border-gray-800 p-1">
      <ChatList 
        users={mockUsers}
        activeUserId={activeUserId}
        onSelectUser={handleSelectUser}
      />
    </div>

    {/* Right panel */}
    <div className=" p-2">
      <ChatView 
        user={activeUser}
        messages={activeMessages}
        onSendMessage={handleSendMessage}
      />
    </div>
    </div>
    
  </div>
</div>

  );
}
