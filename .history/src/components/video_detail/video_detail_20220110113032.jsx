import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => (
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
);

export default VideoDetail;
