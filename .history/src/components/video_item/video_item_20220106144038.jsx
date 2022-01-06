import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => (
  <li className={styles.item}>
    <div className={styles.image}></div>
    {props.video.snippet.thumbnails}
    {props.video.snippet.title}
  </li>
);

export default VideoItem;
