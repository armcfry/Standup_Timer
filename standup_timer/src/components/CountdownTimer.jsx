import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

function CountdownTimer(props) {
  const [totalSeconds, setTotalSeconds] = useState(props.totalSeconds);
  let overtimeTrigger = false;
  useEffect(() => {
    setTotalSeconds(props.totalSeconds)
    const timer = setInterval(() => {
      setTotalSeconds(prevTotalSeconds => {
        if (overtimeTrigger === false) {
          // if timer is not at 0
          if (prevTotalSeconds > 0) {
            return prevTotalSeconds - 1;
          }
           // if timer is at 0 
          else {
            // if overtime is allowed, set the trigger to true to start counting up  
            if (props.overtime === true){ 
                overtimeTrigger = true;
                // this will count up forever until the user click next attendee
                return prevTotalSeconds + 1; 
              }
              // if overtime is not allowed, skip to the next attendee automatically 
              else {
                clearInterval(timer);
                props.onTimerEnd();
                return prevTotalSeconds;
              }
            }
        } else {
            return prevTotalSeconds + 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [props.onTimerEnd]);

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
  overtime: PropTypes.bool
};

export default CountdownTimer;

