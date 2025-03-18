'use client';
import React from 'react';
import Chat from './components/Chat';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-primary-white dark:bg-neutral-dark-grey">
      <header className="px-6 py-4 border-b border-neutral-light-grey dark:border-neutral-grey">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary-black dark:text-primary-white">Facial Emotion Detection Chat</h1>
            <p className="text-sm text-neutral-grey dark:text-neutral-light-grey">
              Upload a photo and I&apos;ll analyze the emotions!
            </p>
          </div>
          <Link 
            href="/design-system" 
            className="py-2 px-4 bg-primary-royal text-primary-white font-bold rounded hover:opacity-90 transition-opacity"
          >
            Design System
          </Link>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full">
          <Chat />
        </div>
      </main>
      
      <footer className="px-6 py-3 text-center text-xs text-neutral-grey dark:text-neutral-light-grey border-t border-neutral-light-grey dark:border-neutral-grey">
        <p>Model: Facial-Emotion-Detection-SigLIP2 from Hugging Face</p>
        <a 
          href="https://huggingface.co/prithivMLmods/Facial-Emotion-Detection-SigLIP2"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-secondary-meta-blue"
        >
          View model on Hugging Face
        </a>
      </footer>
    </div>
  );
}
