import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "AI Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-secondary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-accent/20 animate-rotate-slow" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="font-code text-sm text-primary/70 mb-4 tracking-widest uppercase">
          &lt;welcome /&gt;
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gradient-cyber leading-tight">
          Sahithi Jalaparti
        </h1>

        <div className="h-8 mb-8">
          <span className="font-code text-lg sm:text-xl text-foreground/80">
            {displayed}
            <span className="border-r-2 border-primary ml-1 animate-typewriter-cursor">&nbsp;</span>
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-8 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Rajahmundry, India
        </p>

        <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-heading text-xs tracking-wider bg-primary text-primary-foreground neon-glow-cyan hover:brightness-110 transition-all duration-300"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-heading text-xs tracking-wider border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            CONTACT ME
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://linkedin.com/in/sahithijalaparti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/sahithijalaparti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
