var React = require('react');
var Link = require('react-router').Link;

var openWeatherMapHelpers = require('../utils/openweathermaphelpers');
var ContentWrapper = require('../components/ContentWrapper');
var LocationOverview = require('../components/LocationOverview');

var LocationOverviewContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      locationForecast: {}
    }
  },
  makeRequest: function (location) {
    openWeatherMapHelpers.search(location).then(function(searchResults) {
      this.setState({
        isLoading: false,
        locationForecast: searchResults
      })
      // This returns an array of 34 objects: sequential 3hr predictions for next 5 days
      // console.log(this.state.locationForecast.list)
    }.bind(this))
  },
  componentDidMount: function () {
    this.makeRequest(this.props.location.query.locationString)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.location.query.locationString)
  },
  render: function () {
    return (
      <ContentWrapper>
        <LocationOverview 
          isLoading={this.state.isLoading}
          locationString={this.props.location.query.locationString}
          locationForecast={this.state.locationForecast} />

        <Link to='/'>Search Again</Link>
      </ContentWrapper>
    )
  }
});

module.exports = LocationOverviewContainer;
