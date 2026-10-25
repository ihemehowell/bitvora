import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { footerLinks, socialLinks } from "@/Data/Data";
import { BrandIcon } from "./BrandIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="Bitvoratech home">
              <BrandIcon size={40} background="dark" />
              <span className="text-xl font-bold text-foreground">
                Bitvora<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Websites, apps and online stores for Nigerian businesses. Makers of Bitvora Stores.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Bitvoratech on ${social.name}`}
                  className="w-10 h-10 rounded-lg border border-border text-muted-foreground flex items-center justify-center hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <h2 className="text-foreground font-semibold mb-6">Quick Links</h2>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <div>
            <h2 className="text-foreground font-semibold mb-6">Products</h2>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-foreground font-semibold mb-6">Services</h2>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-foreground font-semibold mb-6">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@bitvoratech.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} aria-hidden /> info@bitvoratech.com
                </a>
              </li>
              <li>
                <a href="tel:+2349061846290" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} aria-hidden /> +234 906 184 6290
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2+Dacosta+Street+Yaba+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden /> 2, Dacosta Street, Yaba Lagos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Bitvoratech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Clearance for the mobile sticky CTA bar */}
      <div className="h-20 md:hidden" aria-hidden />
    </footer>
  );
}
