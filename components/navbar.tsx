"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { cn, scrollToSection } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scroll-progress";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(navItems.map((n) => n.href.replace("#", "")));

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container-content">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500",
            scrolled
              ? "border-edge bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              : "border-transparent bg-transparent"
          )}
        >
         <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
>
  <CodeXml size={20} strokeWidth={2.2} />
</a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="relative px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <span className={cn(isActive && "text-foreground")}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" onClick={() => handleNav("#contact")}>
              Contact Me
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="container-content overflow-hidden md:hidden"
          >
            <div className="mt-3 flex flex-col gap-1 rounded-2xl border border-edge bg-surface/95 p-4 backdrop-blur-xl">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="rounded-lg px-3 py-3 text-left text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
              <Button className="mt-2 w-full" onClick={() => handleNav("#contact")}>
                Contact Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
