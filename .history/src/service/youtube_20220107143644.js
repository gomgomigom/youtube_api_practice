class YoutubeService {
  constructor(key) {
    this.key = key;
    const getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
}

export default YoutubeService;
