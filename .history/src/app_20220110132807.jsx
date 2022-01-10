import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => setSelectedVideo(video);
  const search = (value) => {
    youtube.search(value).then((item) => setVideos(item));
  };
  const logoClick = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    console.log('useEffect');
    youtube.mostPopular().then((result) => setVideos(result.items));
  }, []);

  return (
    <div className={styles.container}>
      <Search onSearch={search} onLogoClick={logoClick} />
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <VideoList key={videos.id} videos={videos} onVideoClick={selectVideo} />
    </div>
  );
}

export default App;
