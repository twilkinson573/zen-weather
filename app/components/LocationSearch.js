var React = require('react');
var PropTypes = React.PropTypes;

function LocationSearch (props) {
  return (
    <div col-sm-12>
      <h2>Enter a City & Country Code</h2>
      <form onSubmit={props.onSubmitLocation}>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='eg. Leeds, UK'
            onChange={props.onUpdateLocation}
            value={props.locationString}
            type='text'/>
        </div>
        <div className='form-group col-sm-4 col-sm-offset-4'>
          <button 
            className='btn btn-lg btn-success'
            type='submit'>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

LocationSearch.PropTypes = {
  locationString: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired
};

module.exports = LocationSearch;