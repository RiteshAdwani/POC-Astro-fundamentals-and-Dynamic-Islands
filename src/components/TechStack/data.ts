import type { Tech } from "./types";

export const techs: Tech[] = [
  { name: "React", category: "frontend" },
  { name: "Astro", category: "frontend" },
  { name: "Vue", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Vite", category: "tooling" },
  { name: "Git", category: "tooling" },
  { name: "Docker", category: "tooling" },
];

export const categoryColors: Record<
  Tech["category"],
  { bg: string; text: string; border: string }
> = {
  frontend: {
    bg: "rgba(99,102,241,0.1)",
    text: "#818cf8",
    border: "rgba(99,102,241,0.25)",
  },
  backend: {
    bg: "rgba(16,185,129,0.1)",
    text: "#34d399",
    border: "rgba(16,185,129,0.25)",
  },
  tooling: {
    bg: "rgba(245,158,11,0.1)",
    text: "#fbbf24",
    border: "rgba(245,158,11,0.25)",
  },
};
