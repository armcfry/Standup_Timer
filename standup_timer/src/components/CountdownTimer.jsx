import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import pause_lines from '../assets/pause_lines.png';

function CountdownTimer(props) {
  const {attendees_value, pause_value, overtime_trigger} = useSelector((state) => state.values);
  const [attendeesCount, setAttendees] = useState(attendees_value)
  const [timerState, setTimerState] = useState({ totalSeconds: props.totalSeconds, pause: pause_value });
  // TODO: figure out why this thing like only sort of works
  const [overtimeTrigger, setOvertimeTrigger] = useState(overtime_trigger)
  
  console.log("Attendees Value: " + attendees_value)
  console.log("Pause Value: " + pause_value)
  useEffect(() => {
    if(!timerState.pause){
      const timer = setInterval(() => {
        setTimerState(prevState => {
          const { totalSeconds } = prevState;
          console.log("Overtime Trigger: " + overtimeTrigger)
          if (overtimeTrigger === false) {
            if (totalSeconds > 0) {
              // spread operator is used because only 1/2 properties is being updated
              return { ...prevState, totalSeconds: totalSeconds - 1 };
            }
            else {
              if (props.overtime === true){ 
                  setOvertimeTrigger(true);
                  return { ...prevState, totalSeconds: totalSeconds - 1 };
                }
                else {
                  clearInterval(timer);
                  setOvertimeTrigger(false);
                  handleTimerEnd();
                  return prevState;
                }
              }
          } 
          else {
              return { ...prevState, totalSeconds: totalSeconds - 1 };
          }
        });
      }, 1000);
      return () => clearInterval(timer);
    }

  }, [timerState]);

  function formatTime(seconds) {
    if(seconds < 0){
      seconds = - seconds
    }
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function pauseTimer() {
    setTimerState(prevState => ({ ...prevState, pause: !prevState.pause }));
  }

  function handleTimerEnd() {
    if (attendeesCount > 1) {
        setAttendees(prevAttendee => prevAttendee - 1);
        setTimerState({ totalSeconds: props.totalSeconds, pause: false });
    }
  }
// TODO: make the text color a state variable or something
  return (
    <div className="w3-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ color: timerState.totalSeconds < 0 ? '#ffd7bd' : 'black' }}>Attendee # {(Number(attendees_value) + 1) - attendeesCount}</div>
      <h1 style={{ color: timerState.totalSeconds < 0 ? '#ffd7bd' : 'black' }}>{formatTime(timerState.totalSeconds)}</h1>
      <div className="w3-container" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <button className = "pause_img" type="pauseButton" onClick={pauseTimer}><img src={pause_lines}/></button>
        <button type="submit" onClick={handleTimerEnd} style={{ display: "block", marginBottom: "10px" }}>Next Person</button>
      </div>
    </div>
  );
}

CountdownTimer.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
  overtime: PropTypes.bool,
};

export default CountdownTimer;

