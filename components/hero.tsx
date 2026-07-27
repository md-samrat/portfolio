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
            Mohammad <span className="gold-text">Samrat</span>
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
            architecture, fast performance, and interfaces people actually enjoy
            using.
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
                href="https://drive.google.com/file/d/1cHcGJIdGmES5TvYNfrcQOWlfHf9duJOB/view?usp=sharing"
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          {/* Gold Glow */}
          <div className="absolute inset-0 -z-20 rounded-[36px] bg-gold/10 blur-3xl" />

          {/* Border */}
          <div className="absolute -inset-2 -z-10 rounded-[34px] border border-gold/20" />

          {/* Image Card */}
          <div className="group relative overflow-hidden rounded-[32px] border border-edge bg-card/70 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="relative aspect-[4/5]">
              <Image
                src="/profile.jpg"
                alt="Portrait of MD Samrat"
                fill
                priority
                quality={100}
                sizes="(max-width:768px) 90vw, 420px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <p className="text-xl font-semibold text-white">Mohammad Samrat</p>

                <p className="mt-1 text-sm text-zinc-300">
                  Full Stack Developer
                </p>
              </div>
            </div>
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
