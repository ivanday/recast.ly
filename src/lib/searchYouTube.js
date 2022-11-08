import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, errorCB = null) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 6,
      type: 'video',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: callback,
    error: errorCB || function(error) {
      console.error('Youtube: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;
