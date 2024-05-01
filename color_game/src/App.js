import ColorBox from "./components/ColorBox";
import "./App.css";
import { useEffect, useState } from "react";
import Button from './components/Button';

function App() {
  const [colorCode, setColorCode] = useState(generateColorCode());
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("highScore")) {
      setHighScore(localStorage.getItem("highScore"));
    } else {
      localStorage.setItem("highScore", 0);
      setHighScore(0);
    }
  }, []);

  const handleSubmittedAnswer = (answer) => {
    setSubmittedAnswer(answer);
    if (answer === colorCode) {
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
        localStorage.setItem("highScore", score + 1);
      }
    } else {
      setScore(0);
    }

    setShowInfo(true);

    setTimeout(() => {
      setShowInfo(false);
      setSubmittedAnswer("");
      setColorCode(generateColorCode());
    }, 1000);
  };

  return (
    <div className="App">
      <div className="main-container">
        <h2>what option matches the color</h2>
        <div></div>

        <hr />
        <div className="scoreboard">
          <div>score: {score}</div>
          <div>highest streak: {highScore}</div>
        </div>
        <hr />
        <ColorBox colorCode={colorCode} />
        <Button
          colorCode = {colorCode}
          setSubmittedAnswer = {(answer) => handleSubmittedAnswer(answer)}
        />
        {submittedAnswer && showInfo ? (
          <div className="info-text">
            {submittedAnswer === colorCode ? (
              <>
                <div>Correct!</div>
              </>
            ) : (
              <div>Wrong!</div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const randomValue = () => Math.floor(Math.random() * 256);

const generateColorCode = () => {
  const r = randomValue();
  const g = randomValue();
  const b = randomValue();

  return `rgb(${r},${g},${b})`;
};

export default App;
