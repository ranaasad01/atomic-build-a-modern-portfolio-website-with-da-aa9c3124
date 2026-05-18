export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    color: "#6366f1",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 82 },
      { name: "Vue.js", level: 75 },
      { name: "GraphQL", level: 80 },
      { name: "Redux", level: 85 },
    ],
  },
  {
    category: "Backend",
    color: "#10b981",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Prisma", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "WebSockets", level: 78 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#f59e0b",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 90 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 78 },
      { name: "Linux", level: 75 },
      { name: "Figma", level: 70 },
      { name: "Jest", level: 82 },
    ],
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "GitHub Stars", value: "2.1k" },
];
