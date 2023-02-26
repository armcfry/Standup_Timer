import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function Meeting() {
    let navigate = useNavigate();
    let location = useLocation();
    const returnHome = () => {
        navigate('/')
    };
    return (
        <div class="w3-container">
            <h1>this is the page for meetings</h1>
            <div>Duration: {location.state.duration}</div>
            <div># attendees: {location.state.attendees}</div>
            {/* display information from meeting object */}
            <button type="submit" onClick={returnHome}>Return Home</button>
        </div>
    );
}

export default Meeting;