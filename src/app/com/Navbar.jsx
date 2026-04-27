"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Image
              src="/images.png" 
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <h1 className="text-sm md:text-lg font-bold">
              Rift Valley University Online Registration
            </h1>
         
          </div>
     
          {/* Desktop Navigation (PC irratti qofa mul'ata) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-400 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link href="/registration" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button (Bilbila irratti qofa mul'ata) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none p-2">
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Yoo button tuqame qofa mul'ata) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#242424] border-t border-gray-700`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-400">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-400">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-400">Contact</Link>
          <Link href="/registration" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-center py-2 rounded-md mt-4">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}