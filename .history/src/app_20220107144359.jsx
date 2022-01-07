import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';
import KEY from './key';

function App() {
  const [videos, setVideos] = useState([]);
  const search = (value) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${value}&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=4&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
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
