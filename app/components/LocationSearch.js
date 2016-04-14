var React = require('react');
var PropTypes = React.PropTypes;

function LocationSearch (props) {
  var submitButton;
  if (props.role === 'nav') {
    submitButton = <button type="submit" className="btn btn-default">Submit</button>
  } else {
    submitButton = <div className='form-group col-sm-4 col-sm-offset-4'> <button className='btn btn-lg btn-success'type='submit'disabled={!props.locationString}> Search </button> </div>
  }
  return (
    <form 
      onSubmit={props.onSubmitLocation}
      className={props.role === 'nav' ? 'navbar-form navbar-right' : null}
      role='search'>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder={props.role === 'nav' ? 'Search' : 'eg. Leeds, UK'}
          onChange={props.onUpdateLocation}
          value={props.locationString}
          type='text'
          autoFocus={props.role === 'nav' ? false : focus} 
          />
      </div>
      {submitButton}
    </form>
  )
}

LocationSearch.PropTypes = {
  locationString: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  role: PropTypes.string
};

module.exports = LocationSearch;