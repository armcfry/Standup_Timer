import logo from './logo.svg';
import React from "react";
import './App.css';
import Form from './Form';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div>
              <Form/>
            </div>
            
        </header>
      </div>
    );
  }
}