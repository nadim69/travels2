import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Lamp from "./lamp";

class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        working : true

           }
    }
  

 handleClick = () => {
    this.setState({working: !this.state.working})
  }

  render() {

    let change = this.state.working ? "App-logo": "App-logo-new";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={change} alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
          <br /><br />
           <button onClick={this.handleClick}>CLICK
           </button>
          <Lamp on />
          <Lamp />
         <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
      </div>
    )
  }
}

export default App;
