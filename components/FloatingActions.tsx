'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { whatsappLink } from '@/Data/Data';

// Pages where the sticky "Get a quote" bar would be redundant
const HIDE_CTA_ON = ['/quote', '/contact'];

export function FloatingActions() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showMobileCta = scrolled && !HIDE_CTA_ON.includes(pathname);

  return (
    <>
      {/* WhatsApp — always available */}
      <a
        href={whatsappLink('Hi Bitvoratech, I would like to discuss a project.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`fixed right-4 md:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${
          showMobileCta ? 'bottom-24 md:bottom-6' : 'bottom-4 md:bottom-6'
        }`}
      >
        <IconBrandWhatsapp size={28} />
      </a>

      {/* Sticky quote bar — mobile only, after the user scrolls */}
      <AnimatePresence>
        {showMobileCta && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-background/90 backdrop-blur-xl border-t border-border"
          >
            <Link
              href="/quote"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl"
            >
              Get a free quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
