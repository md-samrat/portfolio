"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container-content">
        <SectionHeading eyebrow="Projects" title="A few things I've shipped" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
             <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-edge bg-card/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_70px_rgba(255,196,0,0.08)]">

  {/* Image */}
  <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl border border-edge aspect-[16/9]">
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(max-width:768px)100vw,50vw"
      className="object-cover object-top transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
  </div>

  {/* Content */}
  <div className="flex flex-1 flex-col p-6">

    <h3 className="font-display text-2xl font-semibold text-foreground">
      {project.title}
    </h3>

    <p className="mt-3 text-sm leading-7 text-muted">
      {project.summary}
    </p>

    {/* Tech */}
    <div className="mt-6 flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-edge bg-background/30 px-3 py-1 text-xs text-muted transition-all duration-300 hover:border-gold/50 hover:text-gold"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div className="mt-auto flex gap-3 pt-8">

      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background transition hover:scale-[1.04] hover:bg-gold-soft"
      >
        Live Demo
        <ArrowUpRight size={16} />
      </a>

      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-edge px-5 py-2.5 text-sm transition hover:border-gold/40 hover:text-gold"
      >
        <Github size={16} />
        GitHub
      </a>

    </div>

  </div>

</TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
