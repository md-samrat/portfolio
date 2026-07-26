"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDaisyui,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongoose,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { Code2 } from "lucide-react";

import { skills, skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  daisyui: SiDaisyui,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongoose: SiMongoose,
  prisma: SiPrisma,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  netlify: SiNetlify,
  vercel: SiVercel,
  vscode: Code2,
  postman: SiPostman,
  figma: SiFigma,
};

export function Skills() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", ...skillCategories];

  const visible =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-content">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I Reach For Every Day"
        />

        {/* Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border border-edge bg-card/40 px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300",
                filter === f
                  ? "border-gold bg-gold/10 text-gold shadow-[0_0_20px_rgba(234,179,8,0.15)]"
                  : "text-muted hover:border-gold/40 hover:text-gold"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => {
              const Icon = iconMap[skill.icon] ?? Code2;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-3xl border border-edge bg-card/50 backdrop-blur-xl p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_15px_50px_rgba(234,179,8,0.08)]"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-3xl" />
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-edge bg-background/50 transition-all duration-300 group-hover:border-gold/40 group-hover:text-gold">
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-5">
                    <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-gold">
                      {skill.name}
                    </h3>

                    <p className="mt-2 text-sm text-muted">
                      {skill.category}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="relative z-10 mt-6 h-[2px] w-10 rounded-full bg-gold/40 transition-all duration-300 group-hover:w-20" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}