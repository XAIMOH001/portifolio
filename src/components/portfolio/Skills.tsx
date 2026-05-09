import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const proficiencies = [
  { name: "React.js", pct: 90 },
  { name: "Tailwind CSS", pct: 88 },
  { name: "Python / Django", pct: 78 },
  { name: "Java", pct: 72 },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad" aria-label="Technical Skills">
      <Reveal>
        <div className="section-label">Capabilities</div>
        <div className="section-title">
          The <em>toolkit.</em>
        </div>
      </Reveal>

      <div className="bento">
        <Reveal className="bento-card wide tall dark">
          <div className="bento-label">Primary Stack</div>
          <div className="bento-title">React &amp; Tailwind CSS</div>
          <div className="bento-sub">
            Component-driven UI architecture with utility-first styling.
            Building scalable, accessible, and beautiful interfaces from the
            ground up.
          </div>
          <div className="skill-icons" style={{ marginTop: "1.5rem" }}>
            <div
              className="skill-icon lg"
              style={{
                background: "rgba(255,255,255,.07)",
                borderColor: "rgba(255,255,255,.1)",
                color: "rgba(255,255,255,.7)",
              }}
            >
              RCT
            </div>
            <div
              className="skill-icon lg"
              style={{
                background: "rgba(5,150,105,.15)",
                borderColor: "rgba(5,150,105,.3)",
                color: "#6EE7B7",
              }}
            >
              TW
            </div>
            <div
              className="skill-icon lg"
              style={{
                background: "rgba(255,255,255,.07)",
                borderColor: "rgba(255,255,255,.1)",
                color: "rgba(255,255,255,.7)",
              }}
            >
              JS
            </div>
            <div
              className="skill-icon lg"
              style={{
                background: "rgba(255,255,255,.07)",
                borderColor: "rgba(255,255,255,.1)",
                color: "rgba(255,255,255,.7)",
              }}
            >
              CSS
            </div>
          </div>
          <div
            style={{
              marginTop: "2rem",
              fontSize: ".85rem",
              color: "rgba(255,255,255,.35)",
              letterSpacing: ".04em",
            }}
          >
            Tailwind v4 · Framer Motion · ES6+
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bento-card">
          <div className="bento-label">Proficiency</div>
          <div className="progress-stack">
            {proficiencies.map((p, i) => (
              <div key={p.name}>
                <div className="progress-header">
                  <span className="progress-name">{p.name}</span>
                  <span className="progress-pct">{p.pct}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: p.pct / 100 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.2}
          className="bento-card"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="bento-label">Commits this year</div>
          <div className="bento-stat">
            400<span>+</span>
          </div>
          <div className="bento-sub" style={{ marginTop: ".5rem" }}>
            Consistent open-source contributions on GitHub
          </div>
        </Reveal>

        <Reveal delay={0.1} className="bento-card">
          <div className="bento-label">Tools &amp; Environment</div>
          <div
            className="bento-title"
            style={{ fontSize: "1.1rem", marginBottom: "1rem" }}
          >
            Dev Environment
          </div>
          <div className="skill-icons">
            {["GIT", "LNX", "VSC", "NPM", "SQL", "RMI"].map((s) => (
              <div key={s} className="skill-icon">
                {s}
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "1rem",
              fontSize: ".82rem",
              color: "var(--text-muted)",
            }}
          >
            Bluefin Linux · GitHub · VS Code · Distributed Systems
          </div>
        </Reveal>

        <Reveal delay={0.2} className="bento-card">
          <div className="bento-label">Foundations</div>
          <div
            className="bento-title"
            style={{ fontSize: "1.1rem", marginBottom: ".75rem" }}
          >
            CS Core
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              alignItems: "flex-start",
            }}
          >
            <span className="foundation-pill">
              Data Structures &amp; Algorithms
            </span>
            <span className="foundation-pill">Distributed Systems</span>
            <span className="foundation-pill">Object-Oriented Design</span>
            <span className="foundation-pill accent">
              Software Engineering Focus
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
