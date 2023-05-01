import React from 'react'
import './Form.css'
import './Slider.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { set_duration_value, set_attendees_value, set_speak_time_value, set_overtime_value } from '../store/valuesSlice';


export default function Form() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'duration') {
      dispatch(set_duration_value(value));
    } else if (id === 'num_ppl') {
      dispatch(set_attendees_value(value));
    } else if (id === 'speak_time') {
      dispatch(set_speak_time_value(value));
    } else if (id === 'overtime') {
      dispatch(set_overtime_value(event.target.checked))
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Meeting')

  };
  return (
    <form onSubmit={handleSubmit}>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <div className="w3-container"> 
        <label htmlFor="duration">Standup Duration</label>
        <input 
          type="text"
          id="duration" 
          name="duration" 
          placeholder="10:00" 
          onChange={handleInputChange}
        />
        <label htmlFor="num_ppl">Number of Participants</label>
        <input 
          type="number" 
          id="num_ppl" 
          name="num_ppl" 
          placeholder="5" 
          onChange={handleInputChange}
        />
        {/* <label htmlFor="speak_time">Time Per Participant</label>
        <input 
          type="text" 
          id="speak_time" 
          name="speak_time" 
          placeholder="2:00" 
          onChange={handleInputChange}
        /> */}
      </div>
      <div className="flex-container">
        <label>Allow Overtime</label>
        <label className="switch">
          <input type="checkbox" 
                 name="overtime"
                 id = "overtime"
                 value = "overtime"
                 onChange={handleInputChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <button type="start">Begin Meeting</button>
    </form>
  )
}