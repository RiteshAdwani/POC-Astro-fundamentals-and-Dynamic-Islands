import { useState, useEffect } from "react";
import "./MobileNav.css";
import Hamburger from "./Hamburger";
import NavDrawer from "./NavDrawer";
import type { NavLink } from "./types";

interface Props {
  links: NavLink[];
}

export default function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  // Register the View Transitions listener once on mount
  useEffect(() => {
    document.addEventListener("astro:after-swap", close);
    return () => {
      document.removeEventListener("astro:after-swap", close);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Hamburger open={open} onToggle={toggle} />
      <NavDrawer open={open} links={links} onClose={close} />
    </>
  );
}

