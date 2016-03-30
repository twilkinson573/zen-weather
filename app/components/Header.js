var React = require('react');
var Link = require('react-router').Link;
var styles = require('../styles');

function Header (props) {
  return (
      <div className="header clearfix">
        <nav>
          <form className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </nav>
        <Link to='/'>
          <h3 className="text-muted">Zen Weather</h3>
        </Link>
      </div>
  )
};

module.exports = Header;