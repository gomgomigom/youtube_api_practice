import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => (
  <iframe
    title='Video Detail'
    id='player'
    type='text/html'
    width='640'
    height='390'
    src=`http://www.youtube.com/embed/${video.id}`
    frameborder='0'
  ></iframe>
);

export default VideoDetail;
