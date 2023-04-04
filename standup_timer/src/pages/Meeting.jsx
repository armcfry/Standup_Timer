import React from 'react';
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
    const next_attendee = () => {
        
    };
    // get the values from the valueStore
    const { duration_value, attendees_value, speak_time_value} = useSelector((state) => state.values);
    // parse the time values from the duration of the entire meeting
    let [minutes1, seconds1] = duration_value.toString().split(':').map(parseFloat);
    // make default seconds to 0 if undefined (the user only inputs a whole number for the minutes)
    if(seconds1===undefined){
        seconds1 = 0
    }
    // calculate the duration for each attendee of the meeting
    const total_time = ((minutes1*60)+seconds1)/attendees_value;
    const intSeconds = Math.floor(total_time);
    let minutes = Math.floor(intSeconds / 60);
    let seconds = intSeconds % 60;
    console.log(`Minutes: ${minutes}`);
    console.log(`Seconds: ${seconds}`);
    
    // TODO: computational logic for dynamic time
    
    return (
        <div className="w3-container">
            <h1>Meeting:
            <div><CountdownTimer minutes={minutes} seconds={seconds}/></div>
            </h1>
            <div># attendees: {attendees_value}</div>
            <div><CountdownTimer minutes={minutes1} seconds={seconds1}/></div>
            <button type="submit" onClick={returnHome}>Next Person</button>
            <button type="submit" onClick={returnHome}>End Meeting</button>
        </div>
    );
}

export default Meeting;