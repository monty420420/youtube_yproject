import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';


function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=AIzaSyA5dDgQGgCSG-5ndYsSHDpRhpMxHRdgYc0`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId}))) //result.items 배열을 빙글 빙글 돌면서 각각의 배열 아이템들의 id값을 새로운 id로 덮어 씌워줌
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyA5dDgQGgCSG-5ndYsSHDpRhpMxHRdgYc0",
     requestOptions
     )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

 

  return (
  <div className={styles.app}>
  <SearchHeader onSearch={search} />
  <VideoList videos={videos} />;
  </div>
  );
}

export default App;
