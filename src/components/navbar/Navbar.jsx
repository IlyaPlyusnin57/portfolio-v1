import "./Navbar.scss";
import pdf from "../../assets/resume/resume.pdf";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-item" href="#about-me">
        <span className="secondary-color">01.</span> About
      </a>
      <a className="nav-item" href="#projects">
        <span className="secondary-color">02.</span> Projects
      </a>
      <button className="btn">
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </button>
    </nav>
  );
}

export default Navbar;
