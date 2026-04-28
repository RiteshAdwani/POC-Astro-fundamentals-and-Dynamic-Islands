import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <a href="/" className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            DevFolio
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-tagline">
            Built with{" "}
            <a href="https://astro.build" target="_blank" rel="noopener">
              Astro
            </a>
            . Fast by default.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ritesh. All rights reserved.</p>
      </div>
    </footer>
  );
}
