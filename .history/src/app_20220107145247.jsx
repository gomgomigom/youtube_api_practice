import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';

function App() {
  const [videos, setVideos] = useState([]);
  const search = (value) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  };

  useEffect(() => {
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=4&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Search onSearch={search} />
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
