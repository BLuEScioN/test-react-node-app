import * as React from 'react';

export interface IVideoListItemProps {
    video: any;
    handleVideoListItemTitleClick: (video: any) => void;
}

export const VideoListItem = ({ video, handleVideoListItemTitleClick }: IVideoListItemProps): JSX.Element => {
    return (
        <li>
            <div className="video-list-entry">
                <div className="media-left media-middle">
                    <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
                </div>
                <div className="media-body">
                    <div className="video-list-entry-title" onClick={() => { handleVideoListItemTitleClick(video); }}>{video.snippet.title}</div>
                    <div className="video-list-entry-detail">{video.snippet.description}</div>
                </div>
            </div>
        </li>
    );
};