import type { NavLink } from "./types";

interface NavDrawerProps {
  open: boolean;
  links: NavLink[];
  onClose: () => void;
}

/**
 * @description Component for the navigation drawer in the mobile navigation. 
 * It slides in from the side when the hamburger button is clicked and displays the navigation links.
 */
const NavDrawer = ({ open, links, onClose }: NavDrawerProps) => {
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
};

export default NavDrawer;
