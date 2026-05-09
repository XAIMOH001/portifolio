export function Navbar() {
  return (
    <nav className="nav-bar">
      <a href="#top" className="nav-logo">
        Simon<span>.</span>
      </a>
      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Journey</a>
        <a href="#contact" className="nav-cta">
          Let's Talk →
        </a>
      </div>
    </nav>
  );
}
