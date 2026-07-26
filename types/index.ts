export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools & Deployment";
  icon: string;
  description?: string;
}

export interface ProjectItem {
  title: string;
  summary: string;
  tech: string[];
  live: string;
  repo: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
