import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "CGPA", value: 9.14, suffix: "", decimals: 2 },
  { label: "Projects", value: 5, suffix: "+", decimals: 0 },
  { label: "Hackathons", value: 3, suffix: "", decimals: 0 },
  { label: "AWS Certified", value: 1, suffix: "", decimals: 0, isIcon: true },
];

const useCountUp = (end: number, duration: number, decimals: number, trigger: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [trigger, end, duration, decimals]);
  return count;
};

const AboutSection = () => {
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
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-neon">
          About Me
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        {/* Terminal */}
        <div className={`max-w-3xl mx-auto glass rounded-xl overflow-hidden mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-accent/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-code text-xs text-muted-foreground">sahithi@portfolio:~$</span>
          </div>
          <div className="p-6 font-code text-sm leading-relaxed text-foreground/80">
            <p className="mb-2">
              <span className="text-primary">$</span> cat about.txt
            </p>
            <p className="text-muted-foreground">
              Highly motivated Computer Science undergraduate focusing on{" "}
              <span className="text-primary">Software Engineering</span> and{" "}
              <span className="text-secondary">Full Stack Development</span>.
              Proficient in Java (OOP), SQL, and building scalable applications.
              Passionate about creating innovative solutions and continuously learning new technologies.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, visible }: { stat: typeof stats[0]; index: number; visible: boolean }) => {
  const count = useCountUp(stat.value, 1500, stat.decimals, visible);

  return (
    <div
      className={`glass rounded-xl p-6 text-center neon-border-cyan transition-all duration-500 hover:neon-glow-cyan ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
        {stat.isIcon ? "✓" : count}
        {!stat.isIcon && stat.suffix}
      </div>
      <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
};

export default AboutSection;
