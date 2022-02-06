class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    mostPopular() {
        return fetch(`https://youtube.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResult=25&key=${this.key}`,
        this.getRequestOptions
        )
         .then(response => response.json())
         .then(result => result.items); //app.jsx에 함수인자를 setVideos라고 만들어 두엇지만 여기 함수인자를 result라고 만들어도 상관없음
    }

    search(query) {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
        )
         .then(response => response.json())
         .then(result => result.items.map(item => ({...item, id: item.id.videoId}))) //result.items 배열을 빙글 빙글 돌면서 각각의 배열 아이템들의 id값을 새로운 id로 덮어 씌워줌
     }
   
}

export default Youtube;