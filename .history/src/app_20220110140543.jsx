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
      <header className={styles.header}>
        <Search onSearch={search} onLogoClick={logoClick} />
      </header>
      <section className={styles.main}>
        <div className={styles.detail}>
          {selectedVideo && <VideoDetail video={selectedVideo} />}
        </div>
        <VideoList
          key={videos.id}
          videos={videos}
          onVideoClick={selectVideo}
          display={selectedVideo ? 'selected' : 'noneSelected'}
        />
      </section>
    </div>
  );
}

export default App;
