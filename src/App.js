import React from "react"
import './App.css';
import useHooks from "./hooks";

function App() {
  const {
    handleChange,
    text,
    timeRunning,
    inputRef,
    timmer,
    startGame,
    word
  } = useHooks();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!timeRunning}
        ref={inputRef}
      />
      <h4>Time remaining: {timmer}</h4>
      <button
        onClick={startGame}
        disabled={timeRunning}
      >Start</button>
      <h1>Word count: {word}</h1>
    </div>
  );
}

export default App;
