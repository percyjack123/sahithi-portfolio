import { useEffect, useRef, useState } from "react";

const education = [
  {
    institution: "KIIT University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027",
    score: "CGPA: 9.14",
    color: "cyan" as const,
  },
  {
    institution: "Future Kids School",
    degree: "ICSE & ISC",
    period: "2021 – 2023",
    score: "93% (10th) | 85% (12th)",
    color: "purple" as const,
  },
];

const colorMap = {
  cyan: { border: "neon-border-cyan", glow: "hover:neon-glow-cyan", text: "text-primary" },
  purple: { border: "neon-border-purple", glow: "hover:neon-glow-purple", text: "text-secondary" },
};

const EducationSection = () => {
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
    <section id="education" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-neon">
          Education
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, i) => {
            const c = colorMap[edu.color];
            return (
              <div
                key={edu.institution}
                className={`glass rounded-xl p-8 ${c.border} ${c.glow} transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <h3 className={`font-heading text-lg font-semibold ${c.text} mb-2`}>
                  {edu.institution}
                </h3>
                <p className="font-body text-foreground/90 mb-1">{edu.degree}</p>
                <p className="font-code text-sm text-muted-foreground mb-3">{edu.period}</p>
                <div className="inline-block px-3 py-1 rounded-full glass text-xs font-code text-primary">
                  {edu.score}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
