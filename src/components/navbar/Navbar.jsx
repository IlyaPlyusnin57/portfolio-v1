import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-item" href="#about-me">
        <span className="secondary-color">01.</span> About
      </a>
      <a className="nav-item" href="#projects">
        <span className="secondary-color">02.</span> Projects
      </a>
      <a className="nav-item" href="#contact-me">
        <span className="secondary-color">03.</span> Contact Me
      </a>
    </nav>
  );
}

export default Navbar;
