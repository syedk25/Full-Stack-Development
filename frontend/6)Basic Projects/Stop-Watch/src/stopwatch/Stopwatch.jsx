import { useState, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const hundreths = Math.floor((time % 1000) / 10);

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <div className="time-display">
          <span className="time-unit">{pad(minutes)}</span>
          <span className="colon">:</span>
          <span className="time-unit">{pad(seconds)}</span>
          <span className="colon">:</span>
          <span className="time-unit">{pad(hundreths)}</span>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
