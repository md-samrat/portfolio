import { SkillItem } from "@/types";

export const skills: SkillItem[] = [
  { name: "HTML5", category: "Frontend", icon: "html5" },
  { name: "CSS3", category: "Frontend", icon: "css3" },
  { name: "JavaScript", category: "Frontend", icon: "javascript" },
  { name: "TypeScript", category: "Frontend", icon: "typescript" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss" },
  { name: "DaisyUI", category: "Frontend", icon: "daisyui" },
  { name: "React.js", category: "Frontend", icon: "react" },
  { name: "Next.js", category: "Frontend", icon: "nextjs" },

  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },
  { name: "Mongoose", category: "Backend", icon: "mongoose" },
  { name: "Prisma", category: "Backend", icon: "prisma" },

  { name: "MongoDB", category: "Database", icon: "mongodb" },
  { name: "PostgreSQL", category: "Database", icon: "postgresql" },
  { name: "Firebase", category: "Database", icon: "firebase" },

  { name: "Git", category: "Tools & Deployment", icon: "git" },
  { name: "GitHub", category: "Tools & Deployment", icon: "github" },
  { name: "Firebase Hosting", category: "Tools & Deployment", icon: "firebase" },
  { name: "Netlify", category: "Tools & Deployment", icon: "netlify" },
  { name: "Vercel", category: "Tools & Deployment", icon: "vercel" },
  { name: "VS Code", category: "Tools & Deployment", icon: "vscode" },
  { name: "Postman", category: "Tools & Deployment", icon: "postman" },
  { name: "Figma", category: "Tools & Deployment", icon: "figma" },
];

export const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Tools & Deployment",
] as const;
