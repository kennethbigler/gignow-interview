import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    onClick: propTypes.func.isRequired,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

/* SOME NOTES
1. In the end we should see 4 activity logs
2. They should be ordered with the most recent event on top
3. Viewing the same job req 2x should be ignored
4. Viewing a job reqs on different days should be separated into 2 events
5. On click of req should call the callback function passed in
6. Nice to have - can we show the date only 1x? see design
7. If you have time - move activity logs to state, and add a "Delete" functionality
*/

export default App;
