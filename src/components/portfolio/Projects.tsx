import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad"
      aria-label="Featured Projects"
    >
      <Reveal>
        <div className="section-label">Featured Work</div>
        <div className="section-title">
          Projects that <em>ship.</em>
        </div>
      </Reveal>

      <div className="projects-grid">
        <Reveal className="project-card featured">
          <div className="project-number">01 — Lead Project</div>
          <div className="project-name">KejaConnect</div>
          <div className="project-tagline">Property Management MVP</div>
          <p className="project-desc">
            Full-stack property management platform automating utility token
            distribution and streamlining tenant onboarding with a responsive
            React interface. Reduced manual admin overhead and improved tenant
            experience end-to-end.
          </p>
          <div className="tech-pills" style={{ marginTop: ".5rem" }}>
            <span className="pill" role="listitem">
              React
            </span>
            <span className="pill" role="listitem">
              Tailwind CSS
            </span>
            <span className="pill" role="listitem">
              Django
            </span>
          </div>
          <div className="project-footer">
            <span style={{ fontSize: ".8rem", color: "rgba(255,255,255,.3)" }}>
              Property · PropTech
            </span>
            <a
              href="#"
              className="arrow-link"
              aria-label="View KejaConnect project"
            >
              →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="project-card">
          <div className="project-number">02</div>
          <div className="project-name">Campus Marketplace</div>
          <div className="project-tagline">Mobile-First Commerce</div>
          <p className="project-desc">
            A mobile-first student commerce platform with advanced state
            management and fully responsive design patterns built for campus
            life.
          </p>
          <div className="tech-pills" style={{ marginTop: ".5rem" }}>
            <span className="pill" role="listitem">
              React
            </span>
            <span className="pill" role="listitem">
              State Mgmt
            </span>
            <span className="pill" role="listitem">
              Responsive
            </span>
          </div>
          <div className="project-footer">
            <span style={{ fontSize: ".8rem", color: "var(--text-light)" }}>
              Commerce · EdTech
            </span>
            <a
              href="#"
              className="arrow-link"
              aria-label="View Campus Marketplace project"
            >
              →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="project-card" style={{ gridColumn: 2 }}>
          <div className="project-number">03 — 72h Sprint</div>
          <div className="project-name">Tourism Tech MVP</div>
          <div className="project-tagline">Community Conservation</div>
          <p className="project-desc">
            Designed and delivered a full MVP in a 72-hour sprint supporting
            community-led conservation initiatives in the Maasai Mara ecosystem.
          </p>
          <div className="tech-pills" style={{ marginTop: ".5rem" }}>
            <span className="pill" role="listitem">
              React
            </span>
            <span className="pill" role="listitem">
              Rapid Prototyping
            </span>
          </div>
          <div className="project-footer">
            <span style={{ fontSize: ".8rem", color: "var(--text-light)" }}>
              Tourism · Social Impact
            </span>
            <a
              href="#"
              className="arrow-link"
              aria-label="View Tourism Tech MVP project"
            >
              →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
