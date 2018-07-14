import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const mod1 = ["Void","Arc","Solar"];
const mod2 = ["Grenadier","Brawler","Heavyweight"];
const mod3 = ["Iron","Blackout","Grounded","Glass"]

let date = new Date();
//making sure it resets at 9am Pacific Time
let bungieTime = date.getTime() - 57600000;
//pushing the elemental singes over one day
const elementalOffsetHack = 1;
//September 6th, 2017
const destinyLaunchDay = 1504656000000;
let daysSinceLaunch = Math.floor((bungieTime-destinyLaunchDay)/86400000);
let weeksSinceLaunch = Math.floor((daysSinceLaunch+elementalOffsetHack)/7);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Daily Heroic Strike Modifiers</h1>
        </header>
        <p className="App-intro">
        <h2>{mod1[weeksSinceLaunch%mod1.length]}</h2>
        <h2>{mod2[daysSinceLaunch%mod2.length]}</h2>
        <h2>{mod3[daysSinceLaunch%mod3.length]}</h2>
        <h4>Daily reset: 09:00AM Pacific Time(UTC -8)</h4>
        </p>
        <br/>
        <h5>Up next are:</h5>
        <h5>{mod1[(Math.floor(((daysSinceLaunch+1)+elementalOffsetHack)/7))%mod1.length]} + {mod2[(daysSinceLaunch+1)%mod2.length]} + {mod3[(daysSinceLaunch+1)%mod3.length]}</h5>
      </div>
    );
  }
}

export default App;
