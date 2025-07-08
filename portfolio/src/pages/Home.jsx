import React, { useState } from "react";
import "../styles/Home.css";

import hoverOnSFX from "../assets/sfx/hover-on.wav";
import hoverOffSFX from "../assets/sfx/hover-off.wav";
import clickSFX from "../assets/sfx/click.wav";

const Home = () => {
  const [volume, setVolume] = useState(0.5); // Default: 50%

  const hoverAudio = new Audio(hoverOnSFX);
  const hoverOffAudio = new Audio(hoverOffSFX);
  const clickAudio = new Audio(clickSFX);

  hoverAudio.volume = volume;
  hoverOffAudio.volume = volume;
  clickAudio.volume = volume;

  const playHover = () => hoverAudio.play().catch(() => {});
  const playHoverOff = () => hoverOffAudio.play().catch(() => {});
  const playClick = () => clickAudio.play().catch(() => {});

  return (
    <div className="home-container">
      <div className="pixel-bg"></div>
      <div className="intro-box">
        <h1>👾 Samuel Rivest</h1>
        <p>Unity Developer · VR Engineer · Creative Technologist</p>
        <button
          className="start-button"
          onClick={playClick}
          onMouseEnter={playHover}
          onMouseLeave={playHoverOff}
        >
          ▶ Press Start
        </button>

        <div className="volume-slider">
          🔉 Volume:
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
    </div>
  );
};

export default Home;
