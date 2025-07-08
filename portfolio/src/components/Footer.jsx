import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="pixel-footer">
      <p>© {new Date().getFullYear()} Samuel Rivest</p>
      <div className="footer-links">
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/YOUR_PROFILE"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
