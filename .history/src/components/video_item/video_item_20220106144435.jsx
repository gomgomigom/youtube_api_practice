import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => (
  <li className={styles.item}>{props.video.snippet.thumbnails.high}</li>
);

export default VideoItem;
