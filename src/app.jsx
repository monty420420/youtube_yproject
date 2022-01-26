import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';


function App() {
  const [videos, setVideos] = useState([]);
 

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
  <>
  <SearchHeader />
  <VideoList videos={videos} />;
  </>
  );
}

export default App;
