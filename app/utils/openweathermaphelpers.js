var axios = require('axios');

var openWeatherMapAppId = 'b5bd1771d70b07d753e1d534438d1692'

function getWeatherForecast (searchString) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='
    + searchString + '&mode=json&appid=' + openWeatherMapAppId)
}

var helpers = {
  search: function (searchString) {
    return getWeatherForecast(searchString).then(function (searchResults) {
      return searchResults.data;
    })
  }
}

module.exports = helpers;
