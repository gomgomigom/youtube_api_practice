import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import KEY from './key';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=4&key=${KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Search key={videos.id} videos={videos}
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
