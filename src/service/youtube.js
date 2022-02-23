import axios from "axios";

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
          baseURL: 'https://youtube.googleapis.com/youtube/v3',
          params: {key: key},
        });
    }

    async mostPopular() {
         const response = await this.youtube.get('videos', {
             params: {
              part: 'snippet',
              chart: 'mostPopular',
              maxResults: 25, 
             }, 
        });
            return response.data.items;
    }

    async search(query) {
          const response = await this.youtube.get('search', {
              params: {
               part: 'snippet',
               maxResults: 25,
               type: 'video',
               q: query,
            },
          });        
        return response.data.items.map(item => ({ ...item, id: item.id.videoId })); //items.map 배열을 빙글 빙글 돌면서 각각의 배열 아이템들의 id값을 새로운 id로 덮어 씌워줌
     }
   
}

export default Youtube;