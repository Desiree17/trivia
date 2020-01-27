import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Questionare
        !
        <Question questiontext= '?'>
        </Question>
      </div>
    );
  }
}

export default App;