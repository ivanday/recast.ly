var Search = ({searchString, setSearch, setVideoList}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" value = {searchString} onChange = {(evt) => {
      setSearch(evt.target.value);
      searchYoutube({searchString}, (data) => { setVideoList(data); } );
    }}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
