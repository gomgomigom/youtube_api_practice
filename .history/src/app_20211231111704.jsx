import './app.css';
import React, { useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=4&key=AIzaSyCeonQux95SM6Atke2_NPObw-ndyJguGs0',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
  return <h1>Hello :</h1>;
}

export default App;
