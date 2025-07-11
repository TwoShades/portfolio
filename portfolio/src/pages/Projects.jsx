import React from "react";
import "../styles/Project.css";
import { useTranslation } from "react-i18next";

import placeholderPreview from "../assets/previews/placeholder-project.gif";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.waddle.title"),
      description: t("projects.waddle.description"),
      tech: ["Unity", "C#", "URP", t("projects.tags.saveSystem")],
      preview: placeholderPreview,
    },
    {
      title: t("projects.vrSim.title"),
      description: t("projects.vrSim.description"),
      tech: ["Unity", "VR", "Arduino", t("projects.tags.localization")],
      preview: placeholderPreview,
    },
    {
      title: t("projects.arApp.title"),
      description: t("projects.arApp.description"),
      tech: ["Unity", "AR", "C#", t("projects.tags.mobile")],
      preview: placeholderPreview,
    },
    {
      title: t("projects.ctf.title"),
      description: t("projects.ctf.description"),
      tech: ["Kali Linux", "Cybersecurity", "CTF"],
      preview: placeholderPreview,
    },
    {
      title: t("projects.aws.title"),
      description: t("projects.aws.description"),
      tech: ["Python", "MongoDB", "AWS"],
      preview: placeholderPreview,
    },
    {
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      tech: ["React.js", "CSS", t("projects.tags.pixelUI")],
      preview: placeholderPreview,
    },
  ];

  return (
    <div className="projects-container">
      <h2>📂 {t("projects.header")}</h2>
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
                    <p>{t("projects.noPreview")}</p>
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
