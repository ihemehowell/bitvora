"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      const route = path === 'home' ? '/' : `/${path}`;
      router.push(route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white">W</span>
              </div>
              <span className="text-white">WebFlow Agency</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building high-performance websites that grow your business. Professional web development services tailored to your needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white mb-4">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigate('home')} className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('services')} className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('portfolio')} className="text-gray-400 hover:text-primary-400 transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white mb-4">Services</h6>
            <ul className="space-y-3">
              <li className="text-gray-400">Website Development</li>
              <li className="text-gray-400">Landing Page Design</li>
              <li className="text-gray-400">eCommerce Websites</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">Web Maintenance</li>
              <li className="text-gray-400">SEO Optimization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-white mb-4">Contact Us</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@webflowagency.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Tech Street, San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 WebFlow Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
