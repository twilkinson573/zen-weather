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
  componentDidMount: function () {
    // query weather API with location string
    // return & process weather data
    // pass weather data to LocationOverview as prop
    var searchString = this.props.location.query.locationString
    openWeatherMapHelpers.search(searchString).then(function(searchResults) {
      this.setState({
        isLoading: false,
        locationForecast: searchResults
      })
    }.bind(this))
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
