import React from 'react';
import Video from '../video/video';

const VideoList = (props) => (
  <ul>
    {' '}
    <Video key={props.key} video={props.video} />;
  </ul>
);

export default VideoList;
