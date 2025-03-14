import React from 'react';
import Image from 'next/image';

export default function ChatMessage({ message, isUser }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[80%]`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isUser ? 'ml-3' : 'mr-3'} 
                        ${isUser ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'}`}>
          {isUser ? (
            <span className="text-white text-sm">You</span>
          ) : (
            <span className="text-white dark:text-gray-200 text-sm">AI</span>
          )}
        </div>
        <div className={`py-3 px-4 rounded-lg ${
          isUser 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
        }`}>
          <p className="text-sm">{message.text}</p>
          {message.emotion && (
            <div className="mt-2 text-xs italic">
              Detected emotion: {message.emotion}
            </div>
          )}
          {message.image && (
            <div className="mt-2">
              <Image 
                src={message.image} 
                alt="Uploaded image" 
                width={200} 
                height={200} 
                className="rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 