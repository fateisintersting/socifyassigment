"use client";
import React, { useState } from 'react';
import { Smile } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sentByMe: boolean;
  timestamp: string;
}

interface ChatViewProps {
  user?: {
    id: string;
    name: string;
    avatar: string;
  };
  messages: Message[];
  onSendMessage: (text: string) => void;
}

const ChatView = ({ user, messages, onSendMessage }: ChatViewProps) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  // If no user is selected, show the welcome screen
  if (!user) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-chat-darker text-center px-8">
        <div className="mb-6">
          <img src="images/dating-app-concept-social-media.png" alt="Socify Logo" className="w-32 h-32" />
        </div>
        <h2 className="text-2xl font-bold mb-2 tracking-wider">SWIPEVERSE</h2>
        <p className="text-gray-400 text-sm">
          Message while keeping your identity anonymous and secure using WEB3 Chat
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-chat-darker">
      {/* Chat Header */}
      <div className="py-4 px-6 border-b border-gray-800 flex items-center">
        <div className='avatar'>
                <div className='h-12 w-12 mr-4'>
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.avatar}
                      className="rounded-full"
                    />
                    </div>

                </div>
        <h3 className="font-medium">{user.name}</h3>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex ${message.sentByMe ? 'justify-end' : 'justify-start'}`}
          >
            <div className={message.sentByMe ? 'chat-bubble-sent' : 'chat-bubble-received'}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800">
        <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2">
          <Smile size={20} className="text-gray-400 mr-3" />
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message"
            className="flex-1 bg-transparent outline-none text-white"
          />
          <button 
            type="submit" 
            className="ml-2 text-accent font-medium"
            disabled={!newMessage.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatView;