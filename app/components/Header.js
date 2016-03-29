var React = require('react');

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
        <h3 className="text-muted">React Weather</h3>
      </div>
  )
};

module.exports = Header;