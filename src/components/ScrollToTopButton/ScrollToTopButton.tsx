import { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

/**
 * @description Component for the scroll to top button. 
 * It becomes visible when the user scrolls down more than 400 pixels and allows them to quickly scroll back to the top of the page with a smooth animation.
 */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(window.scrollY > 400);

  /**
   * @description Effect to listen for scroll events and update the visibility of the button. 
   * It adds a scroll event listener when the component mounts and removes it when the component unmounts to prevent memory leaks. 
   * The button becomes visible when the user scrolls down more than 400 pixels from the top of the page.
   */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className="scroll-to-top-arrow" aria-hidden="true">
        ↑
      </span>
      <span>Scroll to top</span>
    </button>
  );
};

export default ScrollToTopButton;
