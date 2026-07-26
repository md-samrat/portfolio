"use client";
import { Github, Linkedin, Facebook, Heart } from "lucide-react";
import { navItems } from "@/data/nav";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/mohammad.samrat0/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-samrat0/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/md-samrat", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-edge py-12">
      <div className="container-content flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="font-display text-sm font-semibold text-gold"
        >
          MD Samrat
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-gold/50 hover:text-gold"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="container-content mt-8 flex flex-col items-center gap-2 border-t border-edge pt-6 text-center text-xs text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} MD Samrat. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Made with <Heart size={12} className="fill-gold text-gold" /> by MD Samrat
        </p>
      </div>
    </footer>
  );
}
