import { Reveal } from "./Reveal";

export function AboutStrip() {
  return (
    <Reveal className="about-strip">
      <div>
        <div className="about-heading">
          Engineering with
          <br />
          <em>purpose</em> &amp; precision.
        </div>
      </div>
      <div>
        <p className="about-text">
          I'm Simon — a front-end focused engineer from Narok, Kenya, studying
          Computer Science at Maasai Mara University. I build interfaces that
          feel fast, look sharp, and solve real problems for real people.
        </p>
        <p className="about-text">
          My work sits at the intersection of clean UI and solid engineering
          fundamentals — from React component systems to distributed Java
          backends. I'm currently seeking internship opportunities for May–July
          2026 where I can contribute and grow fast.
        </p>
        <div className="about-facts">
          <div className="fact">
            <div className="fact-value">Narok, KE</div>
            <div className="fact-label">Based in</div>
          </div>
          <div className="fact">
            <div className="fact-value">May 2026</div>
            <div className="fact-label">Available from</div>
          </div>
          <div className="fact">
            <div className="fact-value">English</div>
            <div className="fact-label">Primary language</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
