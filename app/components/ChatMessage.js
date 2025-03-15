import React from 'react';
import Image from 'next/image';

export default function ChatMessage({ message, isUser }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[80%]`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isUser ? 'ml-3' : 'mr-3'} 
                        ${isUser ? 'bg-primary-royal' : 'bg-neutral-grey dark:bg-neutral-dark-grey'}`}>
          {isUser ? (
            <span className="text-primary-white text-sm">You</span>
          ) : (
            <span className="text-primary-white dark:text-neutral-light-grey text-sm">AI</span>
          )}
        </div>
        <div className={`py-3 px-4 rounded-lg ${
          isUser 
            ? 'bg-primary-royal text-primary-white' 
            : 'bg-neutral-light-grey dark:bg-neutral-grey text-primary-black dark:text-primary-white'
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