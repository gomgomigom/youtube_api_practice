import './app.css';
import React, { Component } from 'react';
import List from './components/list';
import Search from './components/search';

class App extends Component {
  state = {
    history: [
      {
        videos: Array(25).fill(null),
      },
    ],
  };
  render() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyCeonQux95SM6Atke2_NPObw-ndyJguGs0',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    return (
      <div>
        <List />
        {this.response.text()}
        <Search />
      </div>
    );
  }
}

export default App;
