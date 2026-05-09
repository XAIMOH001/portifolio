import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero-dot-grid" aria-hidden="true" />
      <div className="hero-bg-circle" aria-hidden="true" />

      <div className="hero-left">
        <Reveal>
          <div className="badge-avail">
            <span className="badge-dot" aria-hidden="true" />
            Open for May–July 2026 Attachment opportunities or Internships
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="hero-name">
            Simon Chau
            <span className="line2">Mburu.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="hero-title">Front-End Focused Engineer</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="hero-sub">
            Building performant, responsive, and user-centric web interfaces.
            3rd-Year CS Student at Maasai Mara University, specialising in
            Software Engineering.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View My Work ↓
            </a>
            <a
              href="/Simon_Chau_CV.html"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Resume
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-right">
        <Reveal delay={0.1}>
          <div className="hero-card">
            <div className="hero-card-label">At a Glance</div>
            <div className="stat-row" role="list">
              <div className="stat-item" role="listitem">
                <div className="stat-num">
                  3<span>+</span>
                </div>
                <div className="stat-desc">Live projects shipped</div>
              </div>
              <div className="stat-item" role="listitem">
                <div className="stat-num">
                  72<span>h</span>
                </div>
                <div className="stat-desc">Sprint, Tourism MVP</div>
              </div>
              <div className="stat-item" role="listitem">
                <div className="stat-num">
                  3<span>rd</span>
                </div>
                <div className="stat-desc">Year, CS @ MMU</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="hero-card">
            <div className="hero-card-label">Current Stack</div>
            <div
              className="code-block"
              aria-label="Technology stack configuration"
            >
              <span className="code-line">
                <span className="c-cm">// chau.config.js</span>
              </span>
              <span className="code-line">
                <span className="c-kw">const</span>{" "}
                <span className="c-fn">stack</span> = {"{"}
              </span>
              <span className="code-line">
                {" "}
                ui: [<span className="c-str">'React'</span>,{" "}
                <span className="c-str">'Tailwind v4'</span>],
              </span>
              <span className="code-line">
                {" "}
                backend: [<span className="c-str">'Django'</span>,{" "}
                <span className="c-str">'Java RMI'</span>],
              </span>
              <span className="code-line">
                {" "}
                tools: [<span className="c-str">'Git'</span>,{" "}
                <span className="c-str">'Linux'</span>
                ],
              </span>
              <span className="code-line">
                {" "}
                learning: <span className="c-str">'dist. systems'</span>
              </span>
              <span className="code-line">
                {"}"}
                <span className="c-cursor" />
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="hero-card">
            <div className="hero-card-label">Technologies</div>
            <div className="tech-pills" role="list">
              <span className="pill accent" role="listitem">
                React.js
              </span>
              <span className="pill accent" role="listitem">
                Tailwind CSS
              </span>
              <span className="pill" role="listitem">
                Python
              </span>
              <span className="pill" role="listitem">
                Django
              </span>
              <span className="pill" role="listitem">
                Java
              </span>
              <span className="pill" role="listitem">
                JavaScript ES6+
              </span>
              <span className="pill" role="listitem">
                Git
              </span>
              <span className="pill" role="listitem">
                Linux
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
