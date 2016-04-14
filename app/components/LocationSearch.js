var React = require('react');
var PropTypes = React.PropTypes;

function LocationSearch (props) {
  return (
    <form onSubmit={props.onSubmitLocation}>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='eg. Leeds, UK'
          onChange={props.onUpdateLocation}
          value={props.locationString}
          type='text'
          autoFocus={focus}/>
      </div>
      <div className='form-group col-sm-4 col-sm-offset-4'>
        <button 
          className='btn btn-lg btn-success'
          type='submit'
          disabled={!props.locationString}>
          Search
        </button>
      </div>
    </form>
  )
}

LocationSearch.PropTypes = {
  locationString: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired
};

module.exports = LocationSearch;