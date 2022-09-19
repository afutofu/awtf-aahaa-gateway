import { useState } from "react";

import "../styles/Home.css";

import awtfLogo from "../assets/awtf-logo.png";
import aahaaLogo from "../assets/aahaa-logo.png";

import awtfBg from "../assets/awtf-bg.jpg";
import aahaaBg from "../assets/aahaa-bg.jpg";

import WalkPage from "./WalkPage";
import AAHAAPage from "./AAHAAPage";

const HomePage = () => {
  const [showAwtf, setShowAwtf] = useState(false);
  const [showAahaa, setShowAahaa] = useState(false);

  return (
    <section id="home">
      <div
        id="awtf-container"
        href="/awtf"
        className={
          showAwtf
            ? "container-expand"
            : showAahaa
            ? "container-shrink"
            : "container-normal"
        }
        onClick={() => {
          if (showAwtf) {
            setShowAwtf(false);
            setShowAahaa(false);
          } else {
            setShowAwtf(true);
            setShowAahaa(false);
          }
        }}
      >
        <img
          src={awtfBg}
          alt="bridge going into forest"
          className="background-image"
        />
        <div className="section-container">
          {showAwtf ? (
            <WalkPage />
          ) : (
            <img id="awtf-logo" src={awtfLogo} alt="A Walk To Freedom" />
          )}
        </div>
      </div>
      <div
        id="aahaa-container"
        href="/aahaa"
        className={
          showAahaa
            ? "container-expand"
            : showAwtf
            ? "container-shrink"
            : "container-normal"
        }
        onClick={() => {
          if (showAahaa) {
            setShowAahaa(false);
            setShowAwtf(false);
          } else {
            setShowAahaa(true);
            setShowAwtf(false);
          }
        }}
      >
        <img
          src={aahaaBg}
          alt="person opening up to sunlight"
          className="background-image"
        />
        <div className="section-container">
          {showAahaa ? (
            <AAHAAPage />
          ) : (
            <img id="aahaa-logo" src={aahaaLogo} alt="AAHAA" />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
