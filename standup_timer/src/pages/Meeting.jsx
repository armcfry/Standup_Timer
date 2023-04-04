import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { resetValues } from '../store/valuesSlice';
import CountdownTimer from '../components/CountdownTimer';

function Meeting() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const returnHome = () => {
        dispatch(resetValues());
        navigate('/')
    };
    // get the values from the valueStore
    const { duration_value, attendees_value, speak_time_value} = useSelector((state) => state.values);
    const [attendeesCount, setAttendees] = useState(attendees_value)
    function handleTimerEnd() {
        if (attendeesCount > 1) {
            setAttendees(prevAttendee => prevAttendee - 1);
        }
      }
    function handleNextAttendee() {
        if (attendeesCount > 1) {
            setAttendees(prevAttendee => prevAttendee - 1);
        }
      }

    // parse the time values from the duration of the entire meeting
    let [minutes, seconds] = duration_value.toString().split(':').map(parseFloat);
    // make default seconds to 0 if undefined (the user only inputs a whole number for the minutes)
    if(seconds===undefined){
        seconds = 0
    }
    // calculate the duration for each attendee of the meeting
    const total_time = Math.floor(((minutes*60)+seconds)/attendees_value);

    // TODO: computational logic for dynamic time
    
    return (
        <div className="w3-container">
            <h1>
            {/* TODO: make a countup timer for the overall meeting time */}
            {/* <div><CountdownTimer minutes={minutes} seconds={seconds}/></div> */}
                <div><CountdownTimer totalSeconds={total_time} onTimerEnd={handleTimerEnd}/></div>
            </h1>
            <div>Attendee # {(Number(attendees_value) + 1) - attendeesCount}</div>
            <button type="submit" onClick={handleNextAttendee}>Next Person</button>
            <button type="submit" onClick={returnHome}>End Meeting</button>
        </div>
    );
}

export default Meeting;