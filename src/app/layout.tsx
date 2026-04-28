import Navbar from'./com/Navbar'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rift Valley University Online Registration",
  description: "RVU Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body  className='flex flex-col min-h-screen'>
  <Navbar/>
  <main className='flex-grow'> {children}</main>
        
    

    <footer className="mt-20 py-10 bg-gray-900 text-gray-400 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 ">

    {/* Left Section */}
    <div>
      <p className="text-lg font-semibold text-white">
        © {new Date().getFullYear()} Rift Valley University
      </p>
      <p>All rights reserved.</p>
     
        <p className="font-semibold text-white mb-2">Contact</p>
      <p>Rift Valley University </p>
      <p>📞 +251987414141</p>
      
  

    </div>

    {/* Middle Section */}
    <div>
       <p className="mt-2">Developer: Eyob Zawude</p>
      <p className="font-semibold text-white mb-2"></p>
      <p>Thank you Jesus</p>
      <p className="italic">
        Your word is a lamp to my feet and a light for my path.
      </p>
      <p className="mt-1">Psalm 119:105</p>
    </div>

    {/* Right Section */}
    <div>
      <p className="font-semibold text-white mb-2">Contact</p>
      <p>Eyob</p>
      <p>📞 0945202203</p>
      <p>📞 0943612097</p>
    </div>

  </div>
</footer>
        </body>
    </html>
  );
}
