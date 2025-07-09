import React from "react";
import "../styles/Project.css";

// import waddlePreview from '../assets/previews/waddle-runner.gif';
// import vrPreview from '../assets/previews/vr-cleanroom.gif';
// import awsPreview from '../assets/previews/aws-app.gif';

import placeholderPreview from "../assets/previews/placeholder-project.gif";

const projects = [
  {
    title: "Waddle Runner 🐧",
    description:
      "An endless runner game built in Unity. Players collect fish and trade them for hats. Features URP, Animator, ShaderGraph, and a save system.",
    tech: ["Unity", "C#", "URP", "Save System"],
    preview: placeholderPreview,
  },
  {
    title: "VR Bio-Manufacturing Simulation 🧪",
    description:
      "A VR training experience for biochemical cleanroom environments. Built in Unity with VR interactions, localization, and Arduino input.",
    tech: ["Unity", "VR", "Arduino", "Localization"],
    preview: placeholderPreview,
  },
  {
    title: "AR Cleanroom App 📱",
    description:
      "Mobile companion app for VR sim. Built in Unity with AR camera support, 3D models, and multilingual support.",
    tech: ["Unity", "AR", "C#", "Mobile"],
    preview: placeholderPreview,
  },
  {
    title: "Mr. Robot CTF 🧠",
    description:
      "Completed a CTF cybersecurity challenge using Nmap, Metasploit, John the Ripper. Focused on ethical hacking and penetration testing.",
    tech: ["Kali Linux", "Cybersecurity", "CTF"],
    preview: placeholderPreview,
  },
  {
    title: "AWS Python Backend ⚙️",
    description:
      "Built a Python/MongoDB app with AWS hosting. Includes CRUD functionality and tested schema handling.",
    tech: ["Python", "MongoDB", "AWS"],
    preview: placeholderPreview,
  },
  {
    title: "This Portfolio Site 🌐",
    description:
      "Pixel art-themed React site showcasing my resume, projects, and skills. Features retro sound FX, routing, and responsive UI.",
    tech: ["React.js", "CSS", "Pixel UI"],
    preview: placeholderPreview,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>📂 Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card-wrapper" key={index}>
            <div className="project-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="flip-card-back">
                  {project.preview ? (
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                    />
                  ) : (
                    <p>No Preview Available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
