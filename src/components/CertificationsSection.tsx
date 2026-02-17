import { useEffect, useRef, useState } from "react";

const certifications = [
  {
    title: "AWS Academy Graduate",
    issuer: "Amazon Web Services",
    detail: "Cloud Foundations",
    year: "2025",
    icon: "☁️",
    color: "cyan" as const,
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    detail: "Programming Skills Certification",
    year: "2024",
    icon: "☕",
    color: "purple" as const,
  },
];

const CertificationsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-neon">
          Certifications
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`glass rounded-xl p-8 ${cert.color === "cyan" ? "neon-border-cyan hover:neon-glow-cyan" : "neon-border-purple hover:neon-glow-purple"} transition-all duration-500 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className={`font-heading text-base font-semibold ${cert.color === "cyan" ? "text-primary" : "text-secondary"} mb-1`}>
                {cert.title}
              </h3>
              <p className="font-body text-sm text-foreground/80 mb-1">{cert.issuer}</p>
              <p className="font-body text-xs text-muted-foreground mb-3">{cert.detail}</p>
              <span className="font-code text-xs text-primary/70">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
