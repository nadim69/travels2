import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Lamp from "./lamp";

class App extends Component {
    constructor(){
      super();
      this.state ={
        working : true
      }
    };
 AtomeReverse = () => {
    this.setState = { workig: !this.state.true}};

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
          <button onClick={this.AtomeReverse}
          />
          <Lamp on />
          <Lamp />
         <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
      </div>
    );
  }
}

export default App;
