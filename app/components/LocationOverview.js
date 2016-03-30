var React = require('react');
var PropTypes = React.PropTypes;

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
};

function LocationOverviewHeader (props) {
  return (
    <h3>Congrats, you searched for {props.locationString}!</h3>
  )
}

function LocationOverview (props) {
  return (
    props.isLoading === true
      ? <h3>Searching for {props.locationString}...</h3>
      : <div className='col-sm-12'>
          <LocationOverviewHeader locationString={props.locationString}/>
          <p>Monday is rainy</p>
          <p>Tuesday is sunny</p>
          <p>etc etc ...</p>
          {puke(props.locationForecast)}
        </div>
  )
}

LocationOverview.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  locationString: PropTypes.string.isRequired
};

module.exports = LocationOverview;
