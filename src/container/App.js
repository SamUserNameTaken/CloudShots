import React, { Component } from 'react';
import Grid from '../components/grid';
import './App.css';

class App extends Component {
  onClick() {
    console.log('clicked on button');
  }
  render() {
    return (
      <div className="App">
        <div className="App-bar">
          <div>
            <div className="App-header">
              <h2>Cloud Shots</h2>
            </div>
            <Grid />
          </div>
        </div>
      </div>
    );
  }


}

export default App;
