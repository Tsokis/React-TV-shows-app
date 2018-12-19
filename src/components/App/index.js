import React, { Component } from 'react';
import Intro from '../Intro/intro'
import './App.css';
import 'whatwg-fetch';
import Series from '../../containers/Series/series';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tv Shows</h1>
        </header>
        <Intro secretMessage="made by nikos" />        
        <Series />
      </div>
    );
  }
}

export default App;
