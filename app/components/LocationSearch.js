var React = require('react');

function LocationSearch (props) {
  return (
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
  )
}

module.exports = LocationSearch;