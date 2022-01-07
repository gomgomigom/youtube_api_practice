import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import YoutubeService from './service/youtube';

const youtube = new YoutubeService();

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
