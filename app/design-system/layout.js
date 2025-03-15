import Link from 'next/link';

export default function DesignSystemLayout({ children }) {
  return (
    <div className="min-h-screen bg-primary-white dark:bg-neutral-dark-grey">
      <header className="px-6 py-4 border-b border-neutral-light-grey dark:border-neutral-grey">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-primary-black dark:text-primary-white">Design System</h1>
          <Link 
            href="/" 
            className="py-2 px-4 bg-transparent border border-primary-royal text-primary-royal dark:text-primary-white font-bold rounded hover:bg-primary-royal hover:text-primary-white transition-colors"
          >
            Back to App
          </Link>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="px-6 py-3 text-center text-xs text-neutral-grey dark:text-neutral-light-grey border-t border-neutral-light-grey dark:border-neutral-grey">
        <p>Albert Sans Design System</p>
        <a 
          href="https://fonts.google.com/specimen/Albert+Sans" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-secondary-meta-blue"
        >
          View font on Google Fonts
        </a>
      </footer>
    </div>
  );
} 