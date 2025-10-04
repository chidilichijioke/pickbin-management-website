'use client';

import Logo from "./assets/pb_black_logo.png"; 
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from './ui/dropdown-menu';

interface FooterProps {
  onNavigateToAbout: () => void;
  onNavigateToFAQ: () => void;
  onNavigateToSchedulePickup?: () => void; // add this line
}


export function Footer({ onNavigateToAbout, onNavigateToFAQ }: FooterProps) {
  const navLinks = [
    { name: 'Services', href: '#services', action: null },
    { name: 'About', href: '#about', action: onNavigateToAbout },
    { name: 'Contact', href: '#contact', action: null },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
           <img src={Logo} alt="Pick&Bin Logo" className="h-12 w-auto -mt-2 mb-4" />
            <p className="text-gray-300 font-montserrat mb-6 max-w-md">
              Leading the way in sustainable waste management solutions. 
              Reliable, eco-friendly, and committed to keeping our communities clean.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <span className="font-montserrat">0203 488 3249</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-green-400" />
                <span className="font-montserrat">emmanueljejeniwa1@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-green-400" />
                <span className="font-montserrat">114 Wickham St., London, DA16 3LU</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white font-montserrat mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.filter(link => link.name !== 'Contact').map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-gray-300 hover:text-green-400 transition-colors font-montserrat"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors font-montserrat"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="block w-full text-left text-green-600 hover:text-green-800 transition-colors font-montserrat focus:outline-none focus:ring-0"
                    >
                      Contact
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded-xl shadow-lg font-montserrat mt-2 min-w-[180px]">
                    <DropdownMenuItem asChild>
                      <a
                        href="tel:+44-7477-860379"
                        className="block px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg focus:bg-green-50 focus:text-green-700 transition-colors font-montserrat"
                      >
                        0203 488 3249
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <button 
                  onClick={onNavigateToFAQ}
                  className="text-gray-300 hover:text-green-400 transition-colors font-montserrat"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white font-montserrat mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat">
                  Residential Pickup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat">
                  Commercial Waste
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat">
                  Recycling Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat">
                  Bulk Removal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors font-montserrat">
                  Emergency Pickup
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 font-montserrat text-sm">
            © 2025 Pick&Bin. All rights reserved.
          </div>
          
          {/* Trust Badge */}
          <div className="mt-4 sm:mt-0 text-gray-400 font-montserrat text-sm">
            Licensed & Insured • EPA Compliant
          </div>
        </div>
      </div>
    </footer>
  );
}