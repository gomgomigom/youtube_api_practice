import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: {snippet }) => (
  <li className={styles.item}>
    <img src={snippet.thumbnails.default.url} alt='video thumbnail' />
    <span className={styles.span}>{snippet.title}</span>
  </li>
);

export default VideoItem;
