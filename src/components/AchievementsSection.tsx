import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    title: "Smart India Hackathon 2025",
    description: "Round 2 Qualifier — National level hackathon",
    icon: "🏆",
    year: "2025",
  },
  {
    title: "HackWithIndia",
    description: "Top 5,000 participants — March 2025",
    icon: "⭐",
    year: "Mar 2025",
  },
  {
    title: "Hackentine",
    description: "Built a full Kanban Board — February 2025",
    icon: "🚀",
    year: "Feb 2025",
  },
];

const AchievementsSection = () => {
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
    <section id="achievements" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-neon">
          Achievements
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0 }}
          />

          <div className="space-y-12">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex items-start gap-6 md:gap-0 transition-all duration-600 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary neon-glow-cyan z-10" />

                <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"} w-full`}>
                  <div className="glass rounded-xl p-5 neon-border-cyan hover:neon-glow-cyan transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-heading text-sm font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="font-code text-xs text-primary">{item.year}</p>
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
