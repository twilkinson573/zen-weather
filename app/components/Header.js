var React = require('react');
var Link = require('react-router').Link;
var styles = require('../styles');

var LocationSearchContainer = require('../containers/LocationSearchContainer');

function Header (props) {
  return (
      <div className="header clearfix">
        <nav>
          <LocationSearchContainer role='nav' />
        </nav>
        <Link to='/'>
          <h3 className="text-muted">Zen Weather</h3>
        </Link>
      </div>
  )
};

module.exports = Header;