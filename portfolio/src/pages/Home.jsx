import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { useTranslation } from "react-i18next";

import hoverOnSFX from "../assets/sfx/hover-on.wav";
import hoverOffSFX from "../assets/sfx/hover-off.wav";
import clickSFX from "../assets/sfx/click.wav";

const Home = () => {
  const { t } = useTranslation();
  const [volume, setVolume] = useState(0.5);
  const [bootIndex, setBootIndex] = useState(-1);
  const [booting, setBooting] = useState(false);
  const navigate = useNavigate();

  const [typingLine, setTypingLine] = useState("");
  const charIndex = useRef(0);
  const fullLine = useRef("");

  const bootLines = useMemo(
    () => [
      t("boot.init"),
      t("boot.loading"),
      t("boot.connect"),
      t("boot.access"),
      t("boot.launch"),
    ],
    [t]
  );

  const hoverAudio = new Audio(hoverOnSFX);
  const hoverOffAudio = new Audio(hoverOffSFX);
  const clickAudio = new Audio(clickSFX);

  hoverAudio.volume = volume;
  hoverOffAudio.volume = volume;
  clickAudio.volume = volume;

  const playHover = () => hoverAudio.play().catch(() => {});
  const playHoverOff = () => hoverOffAudio.play().catch(() => {});
  // const playClick = () => clickAudio.play().catch(() => {});

  const handlePressPlay = () => {
    clickAudio.play();
    setBooting(true);
    setBootIndex(0);
  };

  useEffect(() => {
    let interval;

    if (booting && bootIndex < bootLines.length) {
      fullLine.current = bootLines[bootIndex];
      charIndex.current = 0;
      setTypingLine("");

      interval = setInterval(() => {
        const currentChar = fullLine.current.charAt(charIndex.current);
        if (charIndex.current < fullLine.current.length && currentChar) {
          setTypingLine((prev) => prev + currentChar);
          charIndex.current++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setBootIndex((prev) => prev + 1);
          }, 400);
        }
      }, 40);
    }

    if (bootIndex === bootLines.length) {
      setTimeout(() => navigate("/about"), 800);
    }

    return () => clearInterval(interval);
  }, [bootIndex, booting, navigate, bootLines]);

  return (
    <div className="home-container">
      <div className="pixel-bg"></div>
      {!booting ? (
        <div className="intro-box">
          <h1>👾 Samuel Rivest</h1>
          <p>{t("home.subtitle")}</p>
          <button
            className="start-button"
            onClick={handlePressPlay}
            onMouseEnter={playHover}
            onMouseLeave={playHoverOff}
          >
            ▶ {t("home.pressStart")}
          </button>

          <div className="volume-slider">
            🔉 {t("home.volume")}:
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </div>
        </div>
      ) : (
        <div className="boot-sequence">
          <div className="tv-frame">
            <img
              src={require("../assets/UI/pc-setup-1-Recovered.png")}
              alt="Pixel TV"
            />
            <div className="tv-screen">
              <pre className="boot-lines">
                {bootLines.slice(0, bootIndex).map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
                {bootIndex < bootLines.length && (
                  <div>
                    {typingLine}
                    <span className="cursor">_</span>
                  </div>
                )}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
