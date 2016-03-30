var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var LocationSearchContainer = require('../containers/LocationSearchContainer');
var LocationOverviewContainer = require('../containers/LocationOverviewContainer');

var routes = (
  <Router history={hashHistory} >
    <Route path='/' component={Main}>
      <IndexRoute component={LocationSearchContainer} />
      <Route path='Overview' component={LocationOverviewContainer} />
    </Route>
  </Router>
);

module.exports = routes;
