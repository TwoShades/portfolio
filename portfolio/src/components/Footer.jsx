import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="pixel-footer">
      <p>© {new Date().getFullYear()} Samuel Rivest</p>
      <div className="footer-links">
        <a href="https://github.com/twoshades" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sam-rivest"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
