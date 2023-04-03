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
    const udpate_duration = () => {
        dispatch(resetValues());
        navigate('/')
    };
    // get the values from the valueStore
    const { duration_value, attendees_value } = useSelector((state) => state.values);
    // parse the time values from the duration
    let [minutes, seconds] = duration_value.split(':').map(parseFloat);
    // make default seconds to 0 if undefined (the user only inputs a whole number for the minutes)
    if(seconds===undefined){
        seconds = 0
    }
    // TODO: add computation for duration per attendee (time/attendees)
    
    return (
        <div className="w3-container">
            <h1>Meeting:</h1>
            <div>Duration: {duration_value}</div>
            <div># attendees: {attendees_value}</div>
            <div><CountdownTimer minutes={minutes} seconds={seconds}/></div>
            <button type="submit" onClick={returnHome}>Return Home</button>
        </div>
    );
}

export default Meeting;