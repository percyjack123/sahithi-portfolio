import { useState, useEffect, useRef } from "react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative cyber-grid-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-neon">
          Contact
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        <div className={`grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 neon-border-cyan space-y-5">
              <div>
                <label className="font-heading text-xs text-primary/70 tracking-wider block mb-2">NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-heading text-xs text-primary/70 tracking-wider block mb-2">EMAIL</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-heading text-xs text-primary/70 tracking-wider block mb-2">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-heading text-xs tracking-wider bg-primary text-primary-foreground neon-glow-cyan hover:brightness-110 transition-all duration-300"
              >
                {submitted ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass rounded-xl p-6 neon-border-purple">
              <h3 className="font-heading text-sm text-secondary mb-4 tracking-wider">GET IN TOUCH</h3>
              <div className="space-y-4">
                <a href="mailto:sahithijalaparti@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  sahithijalaparti@gmail.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 9949462888
                </div>
                <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Rajahmundry, India
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 neon-border-cyan">
              <h3 className="font-heading text-sm text-primary mb-4 tracking-wider">SOCIALS</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/sahithijalaparti" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-cyan transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://github.com/sahithijalaparti" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-cyan transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
