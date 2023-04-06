import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

function CountdownTimer(props) {
  let overtime_trigger = false;
  console.log(props.overtime)
  const [totalSeconds, setTotalSeconds] = useState(props.totalSeconds);
  useEffect(() => {
    console.log("use effect called")
    setTotalSeconds(props.totalSeconds)
    const timer = setInterval(() => {
      setTotalSeconds(prevTotalSeconds => {
        console.log(prevTotalSeconds)
        if (overtime_trigger === false) {
          // if timer is not at 0
          if (prevTotalSeconds > 0) {
            return prevTotalSeconds - 1;
          }
           // if timer is at 0 
          else {
            // if overtime is allowed, set the trigger to true to start counting up  
            if (props.overtime === true){ 
                overtime_trigger = true;
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
  }, [props.totalSeconds, props.onTimerEnd]);

  // if (props.overtime === true) {
  //   overtime_trigger = true

  // useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTotalSeconds(prevTotalSeconds => {
  //         console.log(prevTotalSeconds)
  //         return prevTotalSeconds + 1;
  //       });
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }, [overtime_trigger]);


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

