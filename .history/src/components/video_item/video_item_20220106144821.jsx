import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => (
  <li className={styles.item}>{props.video.snippet.thumbnails{high:180}}</li>
);

export default VideoItem;
