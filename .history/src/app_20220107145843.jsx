import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';

function App() {
  const [videos, setVideos] = useState([]);
  const search = (value) => {
    };
  };

  useEffect(() => {
    console.log('useEffect');

    }, []);

  return (
    <>
      <Search onSearch={search} />
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
