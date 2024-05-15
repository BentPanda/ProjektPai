import React, { useRef, useState, useEffect } from "react";
import "./Home.scss";
import NavBar from "../NavBar/NavBar";
import menuMusic from "../../assets/sounds/MenuMusic.mp3";

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  const handleToggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="Home">
      <NavBar />
      <h1>My Singing Monsters Memory Game!</h1>
      <p>By Matteo.</p>

      <audio ref={audioRef} src={menuMusic} loop />
      <button onClick={handleToggleMusic} className="music-button">
        {isPlaying ? "Zatrzymaj muzykę" : "Wznów muzykę"}
      </button>
    </div>
  );
}
