var React = require('react');

var ContentWrapper = require('../components/ContentWrapper');
var LocationSearch = require('../components/LocationSearch');

var LocationSearchContainer = React.createClass({
 contextTypes: {
    router: React.PropTypes.object.isRequired
  }, 
  getInitialState: function () {
    return {
      locationString: ''
    }
  },
  handleUpdateLocation: function (e) {
    this.setState({
      locationString: e.target.value
    })
  },
  handleSubmitLocation: function (e) {
    var locationString = this.state.locationString
    this.setState({
      locationString: ''
    })
    this.context.router.push({
      pathname: '/overview',
      query: {locationString: this.state.locationString}
    })
  },
  render: function () {
    return (
      // Fix the form
      <ContentWrapper>
        <div className='col-sm-12'>
          <LocationSearch 
            location={this.state.locationString}
            onUpdateLocation={this.handleUpdateLocation}
            onSubmitLocation={this.handleSubmitLocation}/>
        </div>
      </ContentWrapper>
    )
  }
});

module.exports = LocationSearchContainer;