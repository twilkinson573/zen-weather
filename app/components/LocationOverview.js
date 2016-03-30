var React = require('react');
var PropTypes = React.PropTypes;

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
};

function LocationOverviewHeader (props) {
  var city_name = props.locationResult.name
  var country_code = props.locationResult.country
  return (
    <h2>{city_name}, {country_code}</h2>
  )
}

LocationOverviewHeader.PropTypes = {
  locationResult: PropTypes.string.isRequired
};

function CurrentSummary (props) {
  var current_temp = Math.round(props.currentForecast.main.temp - 273.15)
  return (
    <h2>{current_temp}&deg;C</h2>
  )
}

CurrentSummary.PropTypes = {
  currentForecast: PropTypes.string.isRequired
};

function LocationOverview (props) {
  return (
    props.isLoading === true
      ? <h3>Searching for {props.locationString}...</h3>
      : <div className='col-sm-12'>
          <LocationOverviewHeader locationResult={props.locationForecast.city}/>
          <CurrentSummary currentForecast={props.locationForecast.list[0]} />
          <ul>
            {
              props.locationForecast.list.map(function(datapoint) {
                return <li key={datapoint.dt}>{puke(datapoint)}</li>
              })
            }
          </ul>
        </div>
  )
}

LocationOverview.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  locationString: PropTypes.string.isRequired
};

module.exports = LocationOverview;
