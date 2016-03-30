var React = require('react');

function LocationOverview (props) {
  return (
    props.isLoading === true
      ? <h3>Loading</h3>
      : <h3>Congrats, you searched for {props.locationString}!</h3>
  )
}

module.exports = LocationOverview;
