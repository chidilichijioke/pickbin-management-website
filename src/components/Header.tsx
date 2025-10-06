'use client';

import Logo from "./assets/pick_bin_logo.png"; 
import { useState } from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from './ui/dropdown-menu';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from "next/link";


interface HeaderProps {
  onNavigateToAbout: () => void;
  onNavigateToFAQ?: () => void;               
  onNavigateToSchedulePickup?: () => void;    
}


export function Header({
  onNavigateToAbout,
  onNavigateToFAQ,
  onNavigateToSchedulePickup,
}: HeaderProps)  {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services', action: null },
    { name: 'About', href: '#about', action: onNavigateToAbout },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
           <img src={Logo} alt="Pick&Bin Logo" className="h-12 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.action ? (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-gray-700 hover:text-green-600 transition-colors relative group font-montserrat font-medium"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 transition-colors relative group font-montserrat font-medium"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </a>
              )
            ))}
            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="text-gray-700 hover:text-green-600 transition-colors relative group font-montserrat font-medium rounded-xl px-3 py-2 
                            focus:outline-none focus:ring-0"
                >
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl shadow-lg font-montserrat mt-2 min-w-[180px]">
                <DropdownMenuItem asChild>
                  <a
                    href="tel:+44-7477-860379"
                    className="block px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg focus:bg-green-50 focus:text-green-700 transition-colors font-montserrat"
                    tabIndex={0}
                  >
                    0203 488 3249
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              onClick={() => onNavigateToSchedulePickup?.()}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all font-montserrat font-medium"
            >
              Schedule Pickup
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  link.action ? (
                    <button
                      key={link.name}
                      onClick={() => {
                        link.action?.();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors font-montserrat"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors font-montserrat"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                ))}
                <div className="px-3 py-2">
                  <Button
                    onClick={() => {
                      onNavigateToSchedulePickup?.();
                      setIsMenuOpen(false); 
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6 py-2 shadow-lg font-montserrat font-medium"
                  >
                    Schedule Pickup
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}