import './app.css';
import React, { Component } from 'react';
import List from 'components/list';
import Search from 'components/search';

class App extends Component {
  state = {
    videos: [
      {
        videos: Array(25).fill(null),
      },
    ],
  };
  render() {
    return <div></div>;
  }
}

export default App;
