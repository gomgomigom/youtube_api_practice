import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => (
  <section className={styles.video_detail}>
    <iframe
      className={styles.video}
      title='Video Detail'
      id='player'
      type='text/html'
      width='640'
      height='390'
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder='0'
    ></iframe>
    <h1 className={styles.title}>{video.snippet.title}</h1>
    <pre className={styles.description}>{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
