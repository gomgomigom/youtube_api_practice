class YoutubeService {
  constructor(key) {
    this.key = key;
    const getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${query}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default YoutubeService;
