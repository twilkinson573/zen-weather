var React = require('react');

var ContentWrapper = require('./ContentWrapper');
var LocationSearchContainer = require('../containers/LocationSearchContainer');

function Home (props) {
  return (
    <ContentWrapper>
      <div className='col-sm-12'>
        <h2>Enter a City & Country Code</h2>
        <LocationSearchContainer role='main' />
      </div>
    </ContentWrapper>
  )
}

module.exports = Home
