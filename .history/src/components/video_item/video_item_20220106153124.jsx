import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => (
  <li className={styles.item}>
    <img
      src={props.video.snippet.thumbnails.default.url}
      alt='video thumbnail'
    />
    <span className={styles.span}>{props.video.snippet.title}</span>
  </li>
);

export default VideoItem;
