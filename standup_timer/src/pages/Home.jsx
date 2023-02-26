import React from 'react';
import Form from '../Form';



var standupVals = {duration:"", num_ppl:""};
console.log(standupVals)
const addStandup = (standupInfoVal) => {
  //standupVals=standupInfoVal;
  standupVals["duration"] = standupInfoVal["duration"]
  standupVals["num_ppl"] = standupInfoVal["num_ppl"]
  console.log(standupVals)
};


function Home() {
    return ( 
    <div>
      <header>
          <div>
            <Form addStandup={addStandup}/>
          </div>
      </header>
    </div>
    );
}

export default Home;