'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/bitvora logo.svg";
import { navLinks } from "../Data/Data";

interface NavbarProps {
  currentPage: string;
}

export function Navbar({ currentPage,  }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (
    <nav className="bg-[#01172F] border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
           <button
            className="flex items-center gap-1"
          >
            <Image src={logo} alt="logo"  width={100} height={100} className="object-contain"/>
            <span className="text-xl font-black uppercase text-white">BitvoraTech</span>
          </button>
          </Link>
         

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link href={`/${link.page}`} key={link.page}>
                  <button
                
                className={`transition-colors ${
                  currentPage === link.page
                    ? "text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {link.name}
              </button>
              </Link>
              
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/quote">
            <Button
              className="bg-[#319198] text-white rounded-lg py-6 px-8 font-bold text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#319198]/70"
            >
              Get a Quote
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                
                <Link href={`/${link.page} key={link.page}`}>
                   <button
                  
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === link.page
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </button>
                </Link>
               
              ))}
              <Link href="/quote">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="bg-[#319198] text-white rounded-lg"
              >
                Get a Quote
              </Button>
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
