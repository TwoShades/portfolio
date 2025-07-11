import React from "react";
import "../styles/About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="dialog-box">
        <p className="npc-name">🧙‍♂️ {t("about.npcName")}</p>
        <p className="dialog-text">{t("about.dialog")}</p>
      </div>

      <div className="stats-panel">
        <h3>🧰 {t("about.inventoryTitle")}</h3>
        <ul>
          <li>🛠️ {t("about.skills.unity")}</li>
          <li>🎮 {t("about.skills.vr")}</li>
          <li>⚛️ {t("about.skills.react")}</li>
          <li>💡 {t("about.skills.arduino")}</li>
          <li>🌍 {t("about.skills.localization")}</li>
          <li>🧠 {t("about.skills.ux")}</li>
        </ul>
      </div>

      <div className="level-log">
        <h3>📜 {t("about.xpTitle")}</h3>
        <ul>
          <li>🎓 {t("about.experience.games")}</li>
          <li>🧪 {t("about.experience.vrIntern")}</li>
          <li>📱 {t("about.experience.mobile")}</li>
          <li>🌐 {t("about.experience.mentor")}</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
