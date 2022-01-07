class YoutubeService {
  constructor(key) {
    this.key = key;
    const getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  search() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${value}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  }
}

export default YoutubeService;