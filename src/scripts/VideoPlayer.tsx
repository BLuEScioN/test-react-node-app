import * as React from 'react';

export interface IVideoPlayerProps {
    video: any;
}

export const VideoPlayer = ({ video } : IVideoPlayerProps) => (
    // 8: could add '?autoplay=1' to end of src url to make the video play once it has loaded
    <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
        <iframe 
        className="embed-responsive-item" 
        src={`https://www.youtube.com/embed/${video.id.videoId}`} 
        allowFullScreen>
        </iframe>
    </div>
    <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
    </div>
    </div>
);
  