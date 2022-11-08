
var Search = ({searchString, setSearch, setVideoList, searchYoutube}) => {

  var handleChange = function(event) {
    console.log(event.target.value);
    //setSearch(event.target.value);
    searchYoutube(event.target.value, (data) => { setVideoList(data); } );
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value = {searchString} onChange = {(evt) => handleChange(evt)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
