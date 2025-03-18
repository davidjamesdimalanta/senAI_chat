import Link from 'next/link'
import { Albert_Sans } from "next/font/google"

// Load Albert Sans font
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-albert-sans",
})

export const metadata = {
  title: 'SenAI - Your Social and Emotional Navigator',
  description: 'SenAI is a smart contact lens that helps you navigate social and emotional situations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${albertSans.className} font-albert-sans text-white`}>
        <div className="flex flex-col min-h-screen">
          <header className="w-full px-4 py-6 bg-transparent absolute top-0 z-50">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center">
                </Link>
                <div className="hidden md:flex space-x-8">
                  <Link href="/contacts" className="text-white hover:text-[#89d6fb] font-light transition-colors">
                    CONTACTS
                  </Link>
                  <Link href="/glasses" className="text-white hover:text-[#89d6fb] font-light transition-colors">
                    GLASSES
                  </Link>
                  <Link href="https://sen.ai" className="text-white hover:text-[#89d6fb] font-light transition-colors">
                    sen.ai
                  </Link>
                </div>
              </div>
              <div>
                <Link 
                  href="/pre-order" 
                >
                  <div className='flex flex-row items-center gap-2'>
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </div>
                </Link>
              </div>
            </nav>
          </header>
          
          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="w-full py-6 bg-[#01303f] text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} SenAI Technologies. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
