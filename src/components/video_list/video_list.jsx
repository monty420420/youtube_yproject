import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onVideoClick, display}) => (
            <ul className={styles.videos}>
                {videos.map(video => (
                <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} /> //youtuebe api의 items들의 key인 id넣어줌
                ))}
            </ul>
    );
 
export default VideoList;