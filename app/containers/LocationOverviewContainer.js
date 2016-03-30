var React = require('react');
var Link = require('react-router').Link;
var Axios = require('axios');

var ContentWrapper = require('../components/ContentWrapper');
var LocationOverview = require('../components/LocationOverview');

var LocationOverviewContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true
    }
  },
  componentDidMount: function () {
    // query weather API with location string
    // return & process weather data
    // pass weather data to LocationOverview as prop
    this.setState({
      isLoading: false
    })
  },
  render: function () {
    return (
      <ContentWrapper>
        <LocationOverview 
          isLoading={this.state.isLoading}
          locationString={this.props.location.query.locationString} />
        <Link to='/'>Search Again</Link>
      </ContentWrapper>
    )
  }
});

module.exports = LocationOverviewContainer;
