var React = require('react');
var Link = require('react-router').Link;

var ContentWrapper = require('../components/ContentWrapper');

var LocationOverviewContainer = React.createClass({
  render: function () {
    return (
      <ContentWrapper>
        <h3>Congrats, you searched for {this.props.location.query.locationString}!</h3>
        <Link to='/'>Search Again</Link>
      </ContentWrapper>
    )
  }
});

module.exports = LocationOverviewContainer;
