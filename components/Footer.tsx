"use client";

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from "../public/bitvora-logo.svg";
import Link from 'next/link';
import { footerLinks, socialLinks } from "@/Data/Data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src={logo} 
                alt="BitvoraTech Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <span className="text-xl font-bold text-white">
                Bitvora<span className="text-cyan-400">Tech</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Building high-performance websites that grow your business with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  {social.icon === 'facebook' && <Facebook size={18} />}
                  {social.icon === 'twitter' && <Twitter size={18} />}
                  {social.icon === 'instagram' && <Instagram size={18} />}
                  {social.icon === 'linkedin' && <Linkedin size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-semibold mb-6">Quick Links</h6>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-semibold mb-6">Services</h6>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-white font-semibold mb-6">Contact</h6>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                info@bitvoratech.com
              </li>
              <li className="text-gray-400">
                +234 9061846290
              </li>
              <li className="text-gray-400">
                2, Dacosta Street, Yaba Lagos
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bitvoratech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
