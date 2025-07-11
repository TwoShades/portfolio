import React from "react";
import "../styles/Resume.css";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

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

      <h2 className="typing">{t("resume.title")}</h2>

      <section className="resume-section">
        <h3>👨‍💻 {t("resume.summary.title")}</h3>
        <p>{t("resume.summary.text")}</p>
      </section>

      <section className="resume-section">
        <h3>🛠️ {t("resume.skills.title")}</h3>
        <ul>
          <li>
            <strong>{t("resume.skills.languages.label")}:</strong>{" "}
            {t("resume.skills.languages.items")}
          </li>
          <li>
            <strong>{t("resume.skills.mobile.label")}:</strong>{" "}
            {t("resume.skills.mobile.items")}
          </li>
          <li>
            <strong>{t("resume.skills.web.label")}:</strong>{" "}
            {t("resume.skills.web.items")}
          </li>
          <li>
            <strong>{t("resume.skills.db.label")}:</strong>{" "}
            {t("resume.skills.db.items")}
          </li>
          <li>
            <strong>{t("resume.skills.other.label")}:</strong>{" "}
            {t("resume.skills.other.items")}
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>🌐 {t("resume.languages.title")}</h3>
        <ul>
          <li>{t("resume.languages.en")}</li>
          <li>{t("resume.languages.fr")}</li>
          <li>{t("resume.languages.it")}</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>💼 {t("resume.experience.title")}</h3>
        <ul>
          <li>{t("resume.experience.items.cerasp")}</li>
          <li>{t("resume.experience.items.vr")}</li>
          <li>{t("resume.experience.items.jac")}</li>
          <li>{t("resume.experience.items.vapeur")}</li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>📚 {t("resume.education.title")}</h3>
        <p>{t("resume.education.text")}</p>
      </section>

      <section className="resume-section">
        <h3>🏆 {t("resume.achievements.title")}</h3>
        <p>{t("resume.achievements.text")}</p>
      </section>
    </div>
  );
};

export default Resume;
