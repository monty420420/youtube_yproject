import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';


function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  
  const search = useCallback (query => {                      //usecallback 사용하여 item클릭시마다 헤더 재랜더링 안되게하기 //usecallback은 만들어두면 메모리상에 계속 보관
    youtube.search(query) //
    .then(videos => {
      setVideos(videos);
      setSelectedVideo(null);                                 //setSelectedVideo를 null로하여 선택된상태에서 재검색시 기존비디오값보여주기
    });
  }, [youtube]);

  useEffect(() => {
    youtube.mostPopular() //
    .then(videos => setVideos(videos));
  }, [youtube]);

 

  return (
  <div className={styles.app}>
  <SearchHeader onSearch={search} />
  <section className={styles.content}>
     {                                          //selectedVideo가 있다면 videodetail보여주기   
     selectedVideo && (
     <div className={styles.detail}>  
         <VideoDetail video={selectedVideo} /> 
     </div>
     )}
     <div className={styles.list}>
     <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo? 'list' : 'grid' } />
     </div>
  </section>
  </div>
  );
}

export default App;
