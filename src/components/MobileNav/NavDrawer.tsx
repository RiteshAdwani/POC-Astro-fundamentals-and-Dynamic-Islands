import type { NavLink } from "./types";

interface Props {
  open: boolean;
  links: NavLink[];
  onClose: () => void;
}

export default function NavDrawer({ open, links, onClose }: Props) {
  return (
    <>
      <div
        className={`nav-backdrop${open ? " visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-nav-drawer"
        className={`nav-drawer${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <ul className="drawer-links" role="list">
          {links.map(({ label, href, active }) => (
            <li key={href}>
              <a
                href={href}
                className={`drawer-link${active ? " active" : ""}`}
                onClick={onClose}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
