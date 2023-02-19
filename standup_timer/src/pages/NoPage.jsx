import React from 'react';
import miss_minutes from '../assets/miss_minutes.gif';
function NoPage() {
    return (
        <div>
            <h1>Err404, there is no page here</h1>
            <img src={miss_minutes} alt="n/a"/>
        </div>
    );
}

export default NoPage;