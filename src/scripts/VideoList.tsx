import * as React from 'react';
import { VideoListItem } from './VideoListItem';

export interface IVideoListProps {
    videos: any;
    handleVideoListItemTitleClick: (video: any) => void
}
export const VideoList = ({ videos, handleVideoListItemTitleClick }: IVideoListProps): JSX.Element => {
    return (
      <ul className="video-list media">
        {videos.map(video =>   
            <VideoListItem video={video} key={video.id.videoId} handleVideoListItemTitleClick={handleVideoListItemTitleClick} />
        )}
      </ul>
    );
};