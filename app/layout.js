import { Albert_Sans } from "next/font/google";
import '../src/tailwind.css'
// Load Albert Sans with all weights we need
const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // All weights we need
  variable: "--font-albert-sans",
});

export const metadata = {
  title: "Facial Emotion Detection Chat",
  description: "Chat interface with facial emotion detection capabilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen overflow-hidden overscroll-none">
      <head>
        {/* Add preconnect for Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${albertSans.className} font-albert-sans h-screen overflow-x-hidden overflow-y-hidden overscroll-none`}>
        {children}
      </body>
    </html>
  );
}
