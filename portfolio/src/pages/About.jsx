import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="dialog-box">
        <p className="npc-name">🧙‍♂️ Samuel the Dev</p>
        <p className="dialog-text">
          “Greetings, traveler! I’m Samuel, a Unity Developer & VR Engineer on a
          quest to build immersive simulations, mobile experiences, and
          pixel-perfect interfaces. I've spent years wielding tools like Unity,
          React, and Arduino to create both educational and entertaining
          experiences. Let me show you my stats...”
        </p>
      </div>

      <div className="stats-panel">
        <h3>🧰 Inventory</h3>
        <ul>
          <li>🛠️ Unity / C#</li>
          <li>🎮 VR/AR Interaction Design</li>
          <li>⚛️ React.js / JS</li>
          <li>💡 Arduino / Electronics</li>
          <li>🌍 Multilingual & Localization Systems</li>
          <li>🧠 Game Design & UX</li>
        </ul>
      </div>

      <div className="level-log">
        <h3>📜 XP Log</h3>
        <ul>
          <li>🎓 Game Dev beginnings: Built indie games, Penguin Runner 🐧</li>
          <li>🧪 Internship turned Consultant for VR Bio-Manufacturing Sim</li>
          <li>📱 Created mobile app companion w/ AR machine viewer</li>
          <li>🌐 Mentored interns & built multilingual systems</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
