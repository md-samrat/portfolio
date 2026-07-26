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
  const [filter, setFilter] = useState<string>("All");
  const filters = ["All", ...skillCategories];

  const visible =
    filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-content">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for, day to day"
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-colors",
                filter === f
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-edge text-muted hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => {
              const Icon = iconMap[skill.icon] ?? Code2;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -6, borderColor: "rgba(234,179,8,0.5)" }}
                  transition={{ duration: 0.3 }}
                  className="card-border group flex flex-col items-start gap-4 rounded-2xl bg-card/60 p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-edge text-foreground transition-colors group-hover:border-gold/50 group-hover:text-gold">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {skill.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {skill.category}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
