import * as React from 'react';
import '../styles/MainPage';
import { Nav } from './Nav';
import { VideoPlayer } from './VideoPlayer';
import { VideoList } from './VideoList';
import { searchYouTube } from './lib/searchYouTube';
import { exampleVideoData } from './data/exampleVideoData';
import { config } from '../config/api-keys';

export interface IMainPageProps {}
export interface IMainPageState {
    currVideo: any;
    videos: any[];
    searchQuery: string;
}


export class MainPage extends React.Component<IMainPageProps, IMainPageState> {
  constructor(props) {
    super(props);

    this.state = {
      currVideo: exampleVideoData[0] || {}, 
      videos: exampleVideoData || [],
      searchQuery: ''
    };


  }

  componentDidMount() {
    this.getYoutubeVideos('cute kittens');
  }

  onSearchInputChange(searchInput: string) {
    this.setState({ searchQuery: searchInput });
  }

  getYoutubeVideos(query?: string) {
    var options = {
      key: config.YOUTUBE_API_KEY, 
      query: query || this.state.searchQuery
    };

    searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currVideo: videos[0]
      });
    });
  }

  handleVideoListItemTitleClick(video: any) {
    this.setState({
      currVideo: video 
    });
  }

  render() {
    return (
      <div>
        <Nav onSearchInputChange={this.onSearchInputChange.bind(this)} onSearchInputEnter={this.getYoutubeVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videos} 
            handleVideoListItemTitleClick={this.handleVideoListItemTitleClick.bind(this)}
          />
        </div>
      </div>
    );  
  }
}