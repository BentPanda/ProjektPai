import React, { useState, useEffect } from "react";
import "./GameBoard.scss";
import PauseScreen from "./PauseScreen";

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";
import backgroundImage from "../../assets/images/backgroundImage.jpg";

import sound1 from "../../assets/sounds/sound1.mp3";
import sound2 from "../../assets/sounds/sound2.mp3";
import sound3 from "../../assets/sounds/sound3.mp3";
import sound4 from "../../assets/sounds/sound4.mp3";
import sound5 from "../../assets/sounds/sound5.mp3";
import sound6 from "../../assets/sounds/sound6.mp3";
import sound7 from "../../assets/sounds/sound7.mp3";
import sound8 from "../../assets/sounds/sound8.mp3";
import winSoundFile from "../../assets/sounds/winSound.mp3";

const initialCards = [
  { img: image1, sound: sound1 },
  { img: image2, sound: sound2 },
  { img: image3, sound: sound3 },
  { img: image4, sound: sound4 },
  { img: image5, sound: sound5 },
  { img: image6, sound: sound6 },
  { img: image7, sound: sound7 },
  { img: image8, sound: sound8 },
  { img: image1, sound: sound1 },
  { img: image2, sound: sound2 },
  { img: image3, sound: sound3 },
  { img: image4, sound: sound4 },
  { img: image5, sound: sound5 },
  { img: image6, sound: sound6 },
  { img: image7, sound: sound7 },
  { img: image8, sound: sound8 },
];

function GameBoard() {
  const [cards, setCards] = useState(shuffle([...initialCards]));
  const [revealedCards, setRevealedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState(0);
  const [mistakes, setMistakes] = useState(10);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (revealedCards.length === 2) {
      setTimeout(checkMatch, 400);
    }
  }, [revealedCards]);

  useEffect(() => {
    if (matchedCards === cards.length) {
      showWinMessage();
    }
  }, [matchedCards]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPaused((prevIsPaused) => !prevIsPaused);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function revealCard(index) {
    if (
      !gameEnded &&
      !isPaused &&
      revealedCards.length < 2 &&
      !cards[index].isRevealed
    ) {
      if (revealedCards.length === 0) {
        startTimer();
      }

      const newCards = [...cards];
      newCards[index].isRevealed = true;
      setCards(newCards);
      setRevealedCards([...revealedCards, index]);

      const audio = new Audio(newCards[index].sound);
      audio.play();
    }
  }

  function startTimer() {
    const startTime = Date.now() - elapsedTime;
    setTimerInterval(setInterval(() => updateTimer(startTime), 10));
  }

  function updateTimer(startTime) {
    const currentTime = Date.now();
    setElapsedTime(currentTime - startTime);
  }

  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  function showLoseMessage() {
    setGameEnded(true);
  }

  function checkMatch() {
    const [card1, card2] = revealedCards;
    const newCards = [...cards];

    if (newCards[card1].img === newCards[card2].img && card1 !== card2) {
      newCards[card1].isRevealed = true;
      newCards[card2].isRevealed = true;
      setMatchedCards(matchedCards + 2);
    } else {
      setTimeout(() => hideCards(card1, card2), 1000);
      setMistakes(mistakes - 1);
      if (mistakes === 1) {
        showLoseMessage();
      }
    }

    setRevealedCards([]);
    setCards(newCards);
  }

  function showWinMessage() {
    setGameEnded(true);
    const winSound = new Audio(winSoundFile);
    winSound.play();
  }

  function hideCards(card1, card2) {
    const newCards = [...cards];
    newCards[card1].isRevealed = false;
    newCards[card2].isRevealed = false;
    setCards(newCards);
  }

  return (
    <div className="container">
      <div id="mistakes" className="mistakes">
        Mistakes allowed left: {mistakes}
      </div>
      <div id="timer" className="timer">
        Time: {Math.floor(elapsedTime / 60000)}:
        {padZero(Math.floor((elapsedTime % 60000) / 1000))}:
        {padZero(Math.floor((elapsedTime % 1000) / 10))}
      </div>
      <div className="board">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.isRevealed ? "flip" : ""}`}
            onClick={() => revealCard(index)}
            style={{
              backgroundImage: card.isRevealed
                ? `url(${card.img})`
                : `url(${backgroundImage})`,
            }}
          ></div>
        ))}
      </div>
      {gameEnded && (
        <div id="result" className="result">
          <h1 className="animated-text">
            {matchedCards === cards.length ? "You Won!!" : "You lost D:"}
          </h1>
          <button
            id="play-again"
            className="play-again"
            onClick={window.location.reload()}
          >
            Play again
          </button>
        </div>
      )}
      <PauseScreen isPaused={isPaused} onResume={() => setIsPaused(false)} />
    </div>
  );
}

export default GameBoard;
