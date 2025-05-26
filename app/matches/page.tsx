"use client";
import React, { useState, useEffect } from 'react';
import ChatList from "../components/Chatlist";
import ChatView from "../components/Chatview";
import { mockUsers, mockMessages } from "../data/mockData";
import Header from '../components/Header';
import { usePathname } from 'next/navigation';


interface ChatUser {
  id: string;
  text: string;
  sentByMe: boolean;
  timestamp: string;
  sender?: string;
  content?: string;
}

const Page: React.FC = () => {
  const [activeUserId, setActiveUserId] = useState<string | undefined>(undefined);
  const [messages, setMessages] = useState<{ [key: string]: ChatUser[] }>(mockMessages);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const segments = pathname.split('/');
  const activeTab = (segments[2] || 'matches') as 'find' | 'likes' | 'matches';

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    if (isMobile){
      window.addEventListener('resize', checkMobile);
    }

    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <div className="min-h-screen flex flex-col justify-start">
      {/* Header - show on top for desktop, bottom for mobile */}
      <div className="hidden md:block">
        <Header activeTab={activeTab} />
      </div>

      <div className="w-full md:w-[60%] mx-auto flex-1">
        <div className="border-b-2 border-gray-800 py-2">
          <h2 className="text-center text-xs text-white">
            CHAT WITH PEOPLE WHO MATCHED WITH YOU
          </h2>
        </div>

        {/* Main content for mobile and desktop */}
        <div className="mt-4 p-1">
          {/* Desktop view */}
          <div className="hidden md:grid grid-cols-2">
            <div className="border-r border-gray-800 p-1 ">
              <ChatList
                users={mockUsers}
                activeUserId={activeUserId}
                onSelectUser={handleSelectUser}
              />
            </div>
            <div className="p-2">
              <ChatView
                user={activeUser}
                messages={activeMessages}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden ">
            {!activeUserId ? (
              <ChatList
                users={mockUsers}
                activeUserId={activeUserId}
                onSelectUser={handleSelectUser}
              />
            ) : (
              <ChatView
                user={activeUser}
                messages={activeMessages}
                onSendMessage={handleSendMessage}
              />
            )}
          </div>
        </div>
      </div>

      {/* Header at bottom on mobile */}
      <div className="md:hidden mt-auto">
        <Header activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Page;
