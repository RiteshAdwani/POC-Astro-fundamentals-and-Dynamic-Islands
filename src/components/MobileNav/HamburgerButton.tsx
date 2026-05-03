interface HamburgerButtonProps {
  open: boolean;
  onToggle: () => void;
}

/**
 * @description Component for the hamburger menu button in the mobile navigation.
 */
const HamburgerButton = ({ open, onToggle }: HamburgerButtonProps) => {
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
};

export default HamburgerButton;
