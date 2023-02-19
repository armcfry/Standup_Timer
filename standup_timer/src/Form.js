import React from 'react'
import './Form.css'
import { useState } from "react";

export default function Form({addStandup}) {
  const [standupInfo, setStandupInfo] = useState({
    duration: "",
    num_ppl: ""
  });
  const handleChange = (event) => {
    setStandupInfo({ ...standupInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addStandup(standupInfo)
    setStandupInfo({ duration: "", num_ppl: ""});
    this.props.history.push('/meeting')
    // add section to trigger new screen
  };
  return (
    <form onSubmit={handleSubmit}>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <div class="w3-container"> 
        <label for="duration">Standup Duration</label>
        <input 
          type="text" 
          id="duration" 
          name="duration" 
          placeholder="15:00" 
          value={standupInfo.duration}
          onChange={handleChange}
        />
        <label for="num_ppl">Number of Participants</label>
        <input 
          type="number" 
          id="num_ppl" 
          name="num_ppl" 
          placeholder="5" 
          value={standupInfo.num_ppl}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Begin Meeting</button>
    </form>
  )
}