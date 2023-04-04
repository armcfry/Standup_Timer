import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

function CountdownTimer(props) {
  const [totalSeconds, setTotalSeconds] = useState(props.totalSeconds);
  console.log(totalSeconds)
  useEffect(() => {
    setTotalSeconds(props.totalSeconds)
    console.log("reset the timer")
    const timer = setInterval(() => {
      setTotalSeconds(prevTotalSeconds => {
        if (prevTotalSeconds > 0) {
          return prevTotalSeconds - 1;
        } else {
          clearInterval(timer);
          props.onTimerEnd();
          return prevTotalSeconds;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [props.totalSeconds, props.onTimerEnd]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div>
      <p>Time left: {formatTime(totalSeconds)}</p>
    </div>
  );
}

CountdownTimer.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
  onTimerEnd: PropTypes.func.isRequired,
};

export default CountdownTimer;

