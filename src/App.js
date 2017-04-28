import React, { Component } from 'react';
import { Appbar, Button, Panel, Container } from 'muicss/react';
import grid from './grid';
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
            <Appbar />
            <Container>
              <div className="App-header">
                <h2>Cloud Shots</h2>
              </div>
              <div className="grid">

              </div>
            </Container>
          </div>
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }


}

export default App;
