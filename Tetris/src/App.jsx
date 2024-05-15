import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutAuthor from "./components/AboutAuthor/AboutAuthor";
import Home from "./components/Home/Home";
import GameBoard from "./components/Game/GameBoard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutAuthor" element={<AboutAuthor />} />
        <Route path="/Game" element={<GameBoard />} />
      </Routes>
    </>
  );
}
