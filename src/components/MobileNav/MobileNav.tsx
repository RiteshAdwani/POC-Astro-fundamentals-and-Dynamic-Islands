import { useState, useEffect } from "react";
import "./MobileNav.css";
import HamburgerButton from "./HamburgerButton";
import NavDrawer from "./NavDrawer";
import type { NavLink } from "./types";

interface MobileNavProps {
  links: NavLink[];
}

/**
 * @description Component for the mobile navigation menu.
 * It includes a hamburger button to toggle the menu and a drawer that slides in with the navigation links.
 */
const MobileNav = ({ links }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  // Register the View Transitions listener once on mount
  useEffect(() => {
    document.addEventListener("astro:after-swap", close);
    return () => {
      document.removeEventListener("astro:after-swap", close);
      document.body.style.overflow = "";
    };
  }, []);

  /**
   * @description Close the navigation drawer and restore body scroll when a navigation link is clicked or after a page transition.
   */
  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  /**
   * @description Toggle the navigation drawer open or closed. When opening, it also prevents body scroll to avoid background scrolling while the menu is open.
   */
  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <HamburgerButton open={open} onToggle={toggle} />
      <NavDrawer open={open} links={links} onClose={close} />
    </>
  );
};

export default MobileNav;
