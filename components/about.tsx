"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    icon: Code2,
    title: "Clean architecture",
    text: "Code organized to be read, extended, and handed off without friction.",
  },
  {
    icon: Rocket,
    title: "Built for speed",
    text: "Every screen is measured against real load times, not just a design mock.",
  },
  {
    icon: Sparkles,
    title: "Detail-driven UI",
    text: "Interfaces refined at the pixel and interaction level, not just the layout.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-content grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow="About" title="Building products, not just pages" />

        <div>
          <Reveal>
            <p className="text-balance text-lg leading-relaxed text-muted sm:text-xl">
              I&apos;m a Full Stack Web Developer who enjoys building modern
              web applications with scalable architecture. My focus sits at
              the intersection of clean UI, dependable backend systems, and
              real-world performance, so the products I ship feel considered
              from the database schema up to the last pixel.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-balance leading-relaxed text-muted">
              Working across the MERN stack and Next.js, I care as much about
              how an interface feels to use as I do about how the API behind
              it holds up under real traffic. Every project starts with the
              same question: what does this need to do well, and what can be
              left out.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-border rounded-2xl bg-card/60 p-6"
              >
                <point.icon className="mb-4 text-gold" size={22} />
                <h3 className="font-display text-base font-semibold">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
