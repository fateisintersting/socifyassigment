
import Image from 'next/image';
import React from 'react';

interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isOnline?: boolean;
}

interface ChatListProps {
  users: ChatUser[];
  activeUserId?: string;
  onSelectUser: (userId: string) => void;
}

const ChatList = ({ users, activeUserId, onSelectUser }: ChatListProps) => {
  return (
    <div className="w-full h-full flex flex-col   ">
      <div className="flex-1 overflow-y-auto p-2 max-h-svw md:max-h-[500px] ">
        {users.map((user) => (
          <div 
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className={`flex items-center p-4 cursor-pointer hover:bg-gray-800/30 border-b border-gray-800 ${
              activeUserId === user.id ? 'bg-gray-800/50' : ''
            }`}
          >
            
            <div className='avatar'>
                <div className='h-12 w-12 mr-4'>
                    <Image
                      alt="Tailwind CSS Navbar component"
                      src={user.avatar}
                      className="rounded-full"
                      width={12}
                      height={12}
                    />
                    </div>

                </div>

            
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-white">{user.name}</h3>
                <span className="text-xs text-gray-400">{user.timestamp}</span>
              </div>
              <p className="text-xs text-gray-400 truncate">{user.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;