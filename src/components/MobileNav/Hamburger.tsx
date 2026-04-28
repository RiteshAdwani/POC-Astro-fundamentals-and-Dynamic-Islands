interface Props {
  open: boolean;
  onToggle: () => void;
}

export default function Hamburger({ open, onToggle }: Props) {
  return (
    <button
      className="hamburger"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-nav-drawer"
    >
      <span className={`hamburger-bar${open ? " open" : ""}`} />
      <span className={`hamburger-bar${open ? " open" : ""}`} />
      <span className={`hamburger-bar${open ? " open" : ""}`} />
    </button>
  );
}
