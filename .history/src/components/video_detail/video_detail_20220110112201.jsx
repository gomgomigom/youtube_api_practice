import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => (
  <iframe
    id='player'
    type='text/html'
    width='640'
    height='390'
    src='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
    frameborder='0'
  ></iframe>
);

export default VideoDetail;
