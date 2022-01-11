import styles from './app.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => setSelectedVideo(video);
  const search = useCallback((value) => {
    setSelectedVideo(null);
    youtube
      .search(value) //
      .then((item) => {
        setVideos(item);
      });
  });
  const logoClick = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    console.log('useEffect');
    youtube.mostPopular().then((result) => setVideos(result.items));
  }, [youtube]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Search onSearch={search} onLogoClick={logoClick} />
      </header>
      <section className={styles.main}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            key={videos.id}
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'selected' : 'noneSelected'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
