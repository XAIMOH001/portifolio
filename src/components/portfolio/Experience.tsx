import { Reveal } from "./Reveal";

const items = [
  {
    org: "GDGC · Maasai Mara University",
    role: "Google Developer Group Collaborator",
    date: "2024 – Present",
    desc: "Participating in Agile workflows, sprint planning, and peer code reviews for university digital tools. Collaborating across teams to ship real features used by the campus community.",
    tag: "Agile · Code Review · Community",
  },
  {
    org: "Maasai Mara University",
    role: "BSc Computer Science",
    date: "2022 – Present · Year 3",
    desc: "Specialising in Software Engineering with concentration in distributed systems, UI engineering, and algorithm design. Currently building Java RMI-based distributed applications and React frontends.",
    tag: "Software Engineering · Dean's Concentration",
  },
  {
    org: "Tourism Tech Hackathon",
    role: "Full-Stack Developer — 72h Sprint",
    date: "2024",
    desc: "Designed and shipped a full product MVP within a 72-hour sprint window for community-led conservation in the Maasai Mara. Demonstrated ability to prototype, iterate, and deliver under real pressure.",
    tag: "Hackathon · MVP · Rapid Delivery",
  },
  {
    org: "Independent",
    role: "Open Source & Personal Projects",
    date: "2022 – Present",
    desc: "Building and shipping personal projects across PropTech, EdTech, and conservation tech. Maintaining active GitHub presence with consistent commits and documented repositories.",
    tag: "Self-Directed · Open Source",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad"
      aria-label="Work Experience"
    >
      <Reveal>
        <div className="section-label">Journey</div>
        <div className="section-title">
          Where I've <em>grown.</em>
        </div>
      </Reveal>

      <div className="exp-grid">
        {items.map((it, i) => (
          <Reveal key={it.role} delay={i * 0.1} className="exp-card">
            <div className="exp-org">{it.org}</div>
            <div className="exp-role">{it.role}</div>
            <div className="exp-date">{it.date}</div>
            <p className="exp-desc">{it.desc}</p>
            <span className="exp-tag">{it.tag}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
