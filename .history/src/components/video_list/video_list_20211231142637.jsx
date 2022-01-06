import React from 'react';
import Video from '../video/video';

const VideoList = (props) => <Video key={props.key} video={props.video} />;

export default VideoList;
