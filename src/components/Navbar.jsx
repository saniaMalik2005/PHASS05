import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <a href="#" className="brand">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <a href="#" className="active">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-actions">
          <a href="#" className="sign-in">Sign In</a>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}



export default Navbar;