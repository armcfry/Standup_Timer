import React from "react";
import './App.css';
import Form from './Form';

function App() {
  var standupVals = {duration:"", num_ppl:""};
  console.log(standupVals)
  const addStandup = (standupInfoVal) => {
    standupVals=standupInfoVal;
    standupVals["duration"] = standupInfoVal["duration"]
    standupVals["num_ppl"] = standupInfoVal["num_ppl"]
    console.log(standupVals)
  };
  return (
    <div className="App">
      <header className="App-header">
          <div>
            <Form addStandup={addStandup}/>
          </div>
      </header>
    </div>
  );
}

export default App;