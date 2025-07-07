// src/pages/Home.jsx
import React from 'react';
import './css/Home.css';
import pressStart from '../assets/sfx/press-start.wav';

const Home = () => {
  const playSound = () => {
    const audio = new Audio(pressStart);
    audio.play();
  };

  return (
    <div className="home-container">
      <div className="pixel-bg"></div>
      <div className="intro-box">
        <h1>👾 Samuel Rivest</h1>
        <p>Unity Developer · VR Engineer · Creative Technologist</p>
        <button className="start-button" onClick={playSound}>
          ▶ Press Start
        </button>
      </div>
    </div>
  );
};

export default Home;
