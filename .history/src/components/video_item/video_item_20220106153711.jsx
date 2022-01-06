import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.item}>
    <img src={snippet.thumbnails.default.url} alt='video thumbnail' />
    <div>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle</p>
    </div>
  </li>
);

export default VideoItem;
