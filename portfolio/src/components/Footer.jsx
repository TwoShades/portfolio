import React from "react";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const resumeFile = `/resume-${lang}.pdf`;

  return (
    <footer className="pixel-footer">
      <p>© {new Date().getFullYear()} Samuel Rivest</p>

      <div className="footer-links">
        <a
          href="https://github.com/twoshades"
          target="_blank"
          rel="noreferrer"
          className="footer-btn"
        >
          ▶ GitHub
        </a>
        <a
          href="https://linkedin.com/in/sam-rivest"
          target="_blank"
          rel="noreferrer"
          className="footer-btn"
        >
          ▶ LinkedIn
        </a>
        <a href={resumeFile} download className="footer-btn">
          ▶ DOWNLOAD CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
