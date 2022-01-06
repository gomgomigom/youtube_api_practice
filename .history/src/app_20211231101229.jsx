import './app.css';
import React, { Component } from 'react';
import List from 'components/list.jsx';
import Search from 'components/search';

class App extends Component {
  state = {
    history: [
      {
        videos: Array(25).fill(null),
      },
    ],
  };
  render() {
    return (
      <div>
        <List />
        <Search />
      </div>
    );
  }
}

export default App;
