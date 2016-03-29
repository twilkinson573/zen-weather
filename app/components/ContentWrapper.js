var React = require('react');

function ContentWrapper (props) {
  render (
    <div className='jumbotron col-sm-12 text-center'>
      {props.children}
    </div>
  )
}

module.exports = ContentWrapper;