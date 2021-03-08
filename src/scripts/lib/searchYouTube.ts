import * as $ from 'jquery';

interface ISearchYouTubeParams {
  key: string;
  query: string;
  max: number;
  callback: (data: any) => any
}

export const searchYouTube = ({key, query, max = 5 }, callback): ISearchYouTubeParams => {  
    return $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet',
      method: 'GET',
      type: 'video',
      data: { key: key, q: query, maxResults: max}, 
      success: (data) => {
        console.log('Youtube data successfully retrieved!');
        if (callback) {
          callback(data.items);
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
};  