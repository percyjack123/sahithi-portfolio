import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  label: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 90, label: "Expert" },
      { name: "JavaScript", level: 75, label: "Advanced" },
      { name: "SQL", level: 60, label: "Intermediate" },
      { name: "Python", level: 35, label: "Basics" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 40, label: "Learning" },
      { name: "React.js", level: 60, label: "Intermediate" },
      { name: "Tailwind CSS", level: 80, label: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 60, label: "Intermediate" },
      { name: "Express.js", level: 60, label: "Intermediate" },
      { name: "Spring Boot", level: 35, label: "Learning" },
      { name: "REST APIs", level: 70, label: "Advanced" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 40, label: "Learning" },
      { name: "MongoDB", level: 60, label: "Intermediate" },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git/GitHub", level: 80, label: "Advanced" },
      { name: "Postman", level: 70, label: "Advanced" },
      { name: "VS Code", level: 85, label: "Expert" },
      { name: "DSA", level: 65, label: "Intermediate" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-neon">
          Skills
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className={`glass rounded-xl p-6 neon-border-cyan hover:neon-glow-cyan transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <h3 className="font-heading text-sm font-semibold text-primary mb-5 tracking-wider uppercase">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-sm text-foreground/90">{skill.name}</span>
                      <span className="font-code text-xs text-muted-foreground">{skill.label}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                          transitionDelay: `${gi * 100 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
