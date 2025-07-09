import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <pre className="ascii-header">
        {`


    __  ___         ____                               
   /  |/  /_  __   / __ \\___  _______  ______ ___  ___ 
  / /|_/ / / / /  / /_/ / _ \\/ ___/ / / / __ \`__ \\/ _ \\
 / /  / / /_/ /  / _, _/  __(__  ) /_/ / / / / / /  __/
/_/  /_/\\__, /  /_/ |_|\\___/____/\\__,_/_/ /_/ /_/\\___/ 
       /____/                                          


`}
      </pre>

      <h2 className="typing">Samuel Rivest – Resume</h2>

      <section className="resume-section">
        <h3>👨‍💻 Professional Summary</h3>
        <p>
          Innovative Junior Gameplay Engineer with over two years of experience
          in software development, specializing in VR and mobile applications.
          Proven track record of developing immersive educational technologies
          and interactive simulations using Unity, C#, and cutting-edge
          development tools. Demonstrated expertise in creating user-centric
          applications with a strong focus on UI/UX design and technical
          innovation. Bilingual professional committed to pushing the boundaries
          of interactive technology.
        </p>
      </section>

      <section className="resume-section">
        <h3>🛠️ Technical Skills</h3>
        <ul>
          <li>
            <strong>Languages:</strong> Python, Java, C#, Swift, SwiftUI
          </li>
          <li>
            <strong>Mobile:</strong> Unity, Xcode, Android Studio
          </li>
          <li>
            <strong>Web:</strong> React.js, Angular, Node.js
          </li>
          <li>
            <strong>Database:</strong> MySQL, SQLite, MongoDB
          </li>
          <li>
            <strong>Other:</strong> Blender, Adobe Suite, Kali Linux, UI/UX
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>🌐 Languages</h3>
        <ul>
          <li>English – Native</li>
          <li>Français – Maîtrise native</li>
          <li>Italiano – Apprendimento</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>💼 Experience</h3>
        <ul>
          <li>
            <strong>CERASP</strong> – Web Engineer (2025–Present)
          </li>
          <li>
            <strong>VR/AI</strong> – VR Developer (2024)
          </li>
          <li>
            <strong>John Abbott</strong> – Mobile Dev (2023–2024)
          </li>
          <li>
            <strong>Vapeur de l’Ouest</strong> – Tech Support (2018–Now)
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>📚 Education</h3>
        <p>John Abbott College – Mobile Application Programming (2023)</p>
      </section>

      <section className="resume-section">
        <h3>🏆 Accomplishments</h3>
        <p>Dean’s List – Fall & Winter Semesters</p>
      </section>
    </div>
  );
};

export default Resume;
