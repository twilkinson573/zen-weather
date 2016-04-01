var React = require('react');
var PropTypes = React.PropTypes;

var weatherHelpers = require('../utils/weatherHelpers');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
};

function LocationOverviewHeader (props) {
  return (
    <h2>{weatherHelpers.locationName(props.locationResult)}</h2>
  )
}

LocationOverviewHeader.PropTypes = {
  locationResult: PropTypes.string.isRequired
};

function CurrentSummary (props) {
  return (
    <div className='col-sm-12'>
      <p>{props.currentForecast.weather[0].description}</p>
      <h2>{weatherHelpers.currentTemp(props.currentForecast.main.temp)}°</h2>
    </div>
  )
}

CurrentSummary.PropTypes = {
  currentForecast: PropTypes.string.isRequired
};

function ShortForecast (props) {
  return (
    <div className='col-sm-2' key={props.key}>
      <h6>{weatherHelpers.displayTime(props.data.dt_txt)}</h6>
      <p>{props.data.weather[0].description}</p>
      <p>{weatherHelpers.currentTemp(props.data.main.temp)}°</p>
    </div>
  )
}

function LocationOverview (props) {
  return (
    props.isLoading === true
      ? <h3>Searching for {props.locationString}...</h3>
      : <div>
          <div className='col-sm-12'>
            <LocationOverviewHeader locationResult={props.locationForecast.city}/>
            <CurrentSummary currentForecast={props.locationForecast.list[0]} />
          </div>
          <div className='row'>
            {
              props.locationForecast.list.slice(0, 6).map(function(datapoint, i) {
                return (<ShortForecast data={datapoint} key={i}/>
                )
              })
            }
          </div>
          <div className='temp'>
            {
              weatherHelpers.getDayForecasts(props.locationForecast.list
              .slice(6, props.locationForecast.list.length)).map(function(datapoint, i){
                return (
                  <div className='row' key={i}>
                    <div className='col-sm-4'>
                      <p>{Object.keys(datapoint)}</p>
                    </div>
                    <div className='col-sm-4'>
                      <p>{datapoint[Object.keys(datapoint)[0]].weather}</p>
                    </div>
                    <div className='col-sm-3'>
                      <p>{weatherHelpers.currentTemp(datapoint[Object.keys(datapoint)[0]].temp)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='row'>
            {
              // props.locationForecast.list.map(function(datapoint, i) {
              //   return <p key={i}>{datapoint.dt_txt}</p>
              // })
            }
          </div>
        </div>
  )
}

LocationOverview.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  locationString: PropTypes.string.isRequired
};

module.exports = LocationOverview;
