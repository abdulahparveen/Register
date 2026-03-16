import React, { useState, useEffect } from "react";

function Timer() 
{
  const [timeLeft, setTimeLeft] = useState(120); 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false); 
    }

    return () => clearInterval(timer); 
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setTimeLeft(120); 
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style= {{ textAlign: "center", marginTop: "50px" }}>
      <h1>{formatTime(timeLeft)}</h1>
      <button onClick={startTimer} disabled={isActive}>
        Start
      </button>
    </div>
  );
}

export default Timer;
