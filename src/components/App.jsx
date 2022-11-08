import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYoutube from '../lib/searchYoutube.js';

var App = () => {

  const {useState, useEffect} = React;

  var [videoList, setVideoList] = useState([]);
  useEffect(() => { searchYoutube('', (data) => { setVideoList(data); } ); }, []);
  console.log(videoList);
  var [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);
  var [searchString, setSearch] = useState('');



  //console.log(videoList, currentVideo);


  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search currentSearch = {searchString} setSearch = {setSearch} setVideoList = {setVideoList} searchYoutube = {searchYoutube} /></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em><VideoPlayer video = {currentVideo}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em><VideoList videos={videoList} setVideo = {setCurrentVideo}/></h5></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
