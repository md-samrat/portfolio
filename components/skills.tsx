"use client";

import { useState, useMemo, type ComponentType } from "react";
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

// Responsive configuration based on screen width
const getConfig = (width: number) => {
  if (width < 480) {
    return {
      nodeSize: 65,
      gapX: 100,
      gapY: 95,
      cols: 3,
      iconSize: 28,
      scale: 0.85,
    };
  } else if (width < 640) {
    return {
      nodeSize: 70,
      gapX: 115,
      gapY: 105,
      cols: 3,
      iconSize: 30,
      scale: 0.9,
    };
  } else if (width < 768) {
    return {
      nodeSize: 75,
      gapX: 130,
      gapY: 115,
      cols: 3,
      iconSize: 32,
      scale: 0.95,
    };
  } else if (width < 1024) {
    return {
      nodeSize: 75,
      gapX: 145,
      gapY: 130,
      cols: 4,
      iconSize: 32,
      scale: 0.95,
    };
  } else {
    return {
      nodeSize: 80,
      gapX: 165,
      gapY: 145,
      cols: 4,
      iconSize: 36,
      scale: 1,
    };
  }
};

export function Skills() {
  const [filter, setFilter] = useState("All");
  const [width, setWidth] = useState(1024);

  // Handle resize
  useState(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const filters = ["All", ...skillCategories];

  const visibleSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  const config = useMemo(() => getConfig(width), [width]);
  const { nodeSize, gapX, gapY, cols, iconSize, scale } = config;

  const positions = useMemo(() => {
    return visibleSkills.map((_, idx) => {
      const row = Math.floor(idx / cols);
      const col = idx % cols;
      const isOddRow = row % 2 === 1;
      const xOffset = isOddRow ? gapX / 2 : 0;
      return {
        x: col * gapX + nodeSize / 2 + xOffset,
        y: row * gapY + nodeSize / 2,
      };
    });
  }, [visibleSkills, cols, gapX, gapY, nodeSize]);

  const lines = useMemo(() => {
    const linesArr: {
      from: number;
      to: number;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }[] = [];

    visibleSkills.forEach((_, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const isOddRow = row % 2 === 1;

      if (col < cols - 1 && i + 1 < visibleSkills.length) {
        const next = i + 1;
        if (Math.floor(next / cols) === row) {
          linesArr.push({
            from: i,
            to: next,
            x1: positions[i].x,
            y1: positions[i].y,
            x2: positions[next].x,
            y2: positions[next].y,
          });
        }
      }

      const nextRow = row + 1;
      const nextRowStart = nextRow * cols;

      if (nextRowStart < visibleSkills.length) {
        if (isOddRow) {
          const targetCol = col;
          if (nextRowStart + targetCol < visibleSkills.length) {
            linesArr.push({
              from: i,
              to: nextRowStart + targetCol,
              x1: positions[i].x,
              y1: positions[i].y,
              x2: positions[nextRowStart + targetCol].x,
              y2: positions[nextRowStart + targetCol].y,
            });
          }
          if (col > 0 && nextRowStart + col - 1 < visibleSkills.length) {
            linesArr.push({
              from: i,
              to: nextRowStart + col - 1,
              x1: positions[i].x,
              y1: positions[i].y,
              x2: positions[nextRowStart + col - 1].x,
              y2: positions[nextRowStart + col - 1].y,
            });
          }
        } else {
          const targetCol = col;
          if (nextRowStart + targetCol < visibleSkills.length) {
            linesArr.push({
              from: i,
              to: nextRowStart + targetCol,
              x1: positions[i].x,
              y1: positions[i].y,
              x2: positions[nextRowStart + targetCol].x,
              y2: positions[nextRowStart + targetCol].y,
            });
          }
          if (
            col < cols - 1 &&
            nextRowStart + col + 1 < visibleSkills.length
          ) {
            linesArr.push({
              from: i,
              to: nextRowStart + col + 1,
              x1: positions[i].x,
              y1: positions[i].y,
              x2: positions[nextRowStart + col + 1].x,
              y2: positions[nextRowStart + col + 1].y,
            });
          }
        }
      }
    });

    return linesArr;
  }, [visibleSkills, positions, cols]);

  const baseWidth = cols * gapX + nodeSize + gapX / 2;
  const baseHeight =
    Math.ceil(visibleSkills.length / cols) * gapY + nodeSize;

  return (
    <section id="skills" className="relative py-16 sm:py-28 overflow-hidden">
      <div className="container-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I Reach For Every Day"
        />

        {/* ফিল্টার বাটন */}
        <div className="mb-8 sm:mb-16 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest border transition-all duration-300",
                filter === f
                  ? "bg-gold/10 border-gold text-gold shadow-[0_0_25px_rgba(234,179,8,0.2)] scale-105"
                  : "bg-card/30 border-edge text-muted hover:border-gold/50 hover:text-gold"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* সেন্টার কন্টেইনার */}
      <div className="relative w-full overflow-hidden px-2 sm:px-6">
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
              style={{
                width: baseWidth,
                height: baseHeight,
                maxWidth: '100%',
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
              }}
            >
              {/* SVG Lines */}
              <svg
                className="absolute inset-0 overflow-visible"
                style={{ zIndex: 0 }}
              >
                {lines.map((line, idx) => (
                  <motion.line
                    key={`${line.from}-${line.to}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="rgba(234,179,8,0.2)"
                    strokeWidth={width < 640 ? 1.5 : 2}
                    strokeDasharray="4 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: idx * 0.02,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>

              {/* Nodes */}
              {visibleSkills.map((skill, idx) => {
                const Icon = iconMap[skill.icon] ?? Code2;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                      delay: idx * 0.03,
                    }}
                    className="group absolute flex flex-col items-center"
                    style={{
                      left: positions[idx].x - nodeSize / 2,
                      top: positions[idx].y - nodeSize / 2,
                      zIndex: 10,
                    }}
                  >
                    <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div 
                      className="relative flex items-center justify-center rounded-full bg-yellow-500/5 ring-1 ring-yellow-500/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-yellow-500/20 group-hover:ring-yellow-500/60 group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(234,179,8,0.6)]"
                      style={{
                        width: nodeSize,
                        height: nodeSize,
                      }}
                    >
                      <Icon
                        size={iconSize}
                        className="text-yellow-500 transition-transform duration-300 group-hover:rotate-12"
                      />
                    </div>
                    <span className={cn(
                      "mt-1.5 sm:mt-3 font-medium tracking-wider text-gold/70 group-hover:text-gold transition-colors duration-300 whitespace-nowrap",
                      width < 480 ? "text-[10px]" : 
                      width < 640 ? "text-[11px]" : 
                      width < 768 ? "text-xs" : 
                      "text-sm sm:text-base"
                    )}>
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}