import "./TechStack.css";
import type { Tech } from "./types";
import { techs, categoryColors } from "./data";

/**
 * @description Component to display the technology stack used in the projects.
 */
const TechStack = () => {
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
    </div>
  );
};

export default TechStack;
