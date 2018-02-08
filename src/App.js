import React, { Component } from 'react';

import FlashcardsContainer from './components/flashcardsBlock/FlashcardsContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlashcardsContainer />
      </div>
    );
  }
}

export default App;
