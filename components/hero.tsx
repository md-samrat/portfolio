"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { scrollToSection } from "@/lib/utils";

const ROLES = [
  "Full Stack Developer",
  "Next.js Developer",
  "Backend Developer",
  "MERN Stack Developer",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gold-radial" />

      <div className="container-content grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-muted"
          >
            <span className="h-px w-8 bg-gold" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            MD <span className="gold-text">Samrat</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 flex h-9 items-center text-xl text-muted sm:text-2xl"
          >
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-lg text-balance leading-relaxed text-muted"
          >
            I design and build full stack web applications with clean
            architecture, fast performance, and interfaces people actually
            enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button onClick={() => scrollToSection("#projects")}>
                View Projects
              </Button>
            </Magnetic>
            <Magnetic>
              <a
                href="https://drive.google.com/file/d/1r_yWQtXndhkYynRtFVKU56SlWAfIuQY0/view?usp=sharing"
                download
                target="_blank"
                className={buttonVariants({ variant: "outline" }) + " gap-2"}
              >
                <Download size={16} />
                Download Resume
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-edge bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/profile.jpg"
                alt="Portrait of MD Samrat, Full Stack Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-top grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-3 -z-10 rounded-[34px] border border-gold/20" />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center justify-center text-muted hover:text-gold sm:flex"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
