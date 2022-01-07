import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (value) => {
    youtube.search(value).then((item) => setVideos(item));
  };

  useEffect(() => {
    console.log('useEffect');
    youtube.mostPopular().then((result) => result.map(result) =>  setVideos(result.items));
  }, []);

  return (
    <>
      <Search onSearch={search} />
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
