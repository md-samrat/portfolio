"use client";

import { motion } from "framer-motion";
import { Copy, Check, Braces } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

const code = `const developer = {
  name: "MD Samrat",
  role: "Full Stack Developer",

  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS"
  ],

  backend: [
    "Node.js",
    "Express.js",
    "Prisma"
  ],

  database: [
    "PostgreSQL",
    "MongoDB"
  ],

  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Vercel"
  ],

  availableForWork: true,
};`;

export function CodePlayground() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="code" className="relative py-28 sm:py-36">
      <div className="container-content">
        <SectionHeading
          eyebrow="Developer"
          title="A Little About My Code"
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-edge bg-card/60 backdrop-blur-xl"
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-edge px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-edge px-4 py-1 text-sm text-muted">
                <Braces size={15} />
                developer.ts
              </div>
            </div>

            <button
              onClick={copyCode}
              className="flex items-center gap-2 rounded-full border border-edge px-4 py-2 text-sm transition hover:border-gold hover:text-gold"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Code */}

          <div className="overflow-x-auto p-6">
            <pre className="font-mono text-[15px] leading-8">
              {code.split("\n").map((line, index) => (
                <div key={index} className="flex">
                  <span className="mr-6 w-8 select-none text-right text-muted/40">
                    {index + 1}
                  </span>

                  <code className="whitespace-pre-wrap text-foreground">
                    {line}
                  </code>
                </div>
              ))}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}