import React, { Component } from 'react';
import propTypes from 'prop-types';
import './App.css';
import moment from 'moment';

class App extends Component {
  static propTypes = {
    onClick: propTypes.func.isRequired,
    data: propTypes.array.isRequired,
  };

  render() {
    const { onClick, data } = this.props;

    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
