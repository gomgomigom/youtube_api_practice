import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => (
  <li className={styles.item}>{props.video.snippet.thumnails.default.url}</li>
);

export default VideoItem;
