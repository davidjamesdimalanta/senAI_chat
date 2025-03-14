'use client';

import React from 'react';
import Chat from './components/Chat';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <header className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Facial Emotion Detection Chat</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Upload a photo and I&apos;ll analyze the emotions!
        </p>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full">
          <Chat />
        </div>
      </main>
      
      <footer className="px-6 py-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
        <p>Model: Facial-Emotion-Detection-SigLIP2 from Hugging Face</p>
        <a 
          href="https://huggingface.co/prithivMLmods/Facial-Emotion-Detection-SigLIP2"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500"
        >
          View model on Hugging Face
        </a>
      </footer>
    </div>
  );
}
