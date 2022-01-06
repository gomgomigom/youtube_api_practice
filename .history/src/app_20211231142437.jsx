import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=4&key=AIzaSyCeonQux95SM6Atke2_NPObw-ndyJguGs0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <h1>Hello :</h1>
      <VideoList key={videos.id} video={videos} />
    </>
  );
}

export default App;
