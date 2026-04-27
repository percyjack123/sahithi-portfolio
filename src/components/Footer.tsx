import { useState, useEffect } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-sm text-muted-foreground mb-2">
          Built with <span className="text-primary">React</span> &{" "}
          <span className="text-secondary">Tailwind CSS</span>
        </p>
        <p className="font-code text-xs text-muted-foreground/60">
          © 2025 Sahithi Jalaparti. All rights reserved.
        </p>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-10 h-10 rounded-full glass neon-border-cyan flex items-center justify-center text-primary hover:neon-glow-cyan transition-all duration-300 z-50 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
