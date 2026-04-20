interface Tech {
  name: string;
  category: "frontend" | "backend" | "tooling";
}

const techs: Tech[] = [
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

const categoryColors: Record<
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

export default function TechStack() {
  return (
    <div className="techstack">
      <div className="legend">
        {(Object.keys(categoryColors) as Tech["category"][]).map((cat) => (
          <span
            key={cat}
            className="legend-item"
            style={{
              backgroundColor: categoryColors[cat].bg,
              color: categoryColors[cat].text,
              border: `1px solid ${categoryColors[cat].border}`,
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      <ul className="tech-list">
        {techs.map((tech) => (
          <li
            key={tech.name}
            className="tech-item"
            style={{
              backgroundColor: categoryColors[tech.category].bg,
              color: categoryColors[tech.category].text,
              border: `1px solid ${categoryColors[tech.category].border}`,
            }}
          >
            {tech.name}
          </li>
        ))}
      </ul>

      <style>{`
        .techstack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .legend {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .legend-item {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
        }
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .tech-item {
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          cursor: default;
        }
      `}</style>
    </div>
  );
}
