var React = require('react');
require('../main.css')

var Header = require('./Header');

var Main = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
