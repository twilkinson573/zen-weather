var axios = require('axios');

var openWeatherMapAppId = 'e1af8ac1fc86cb7ec10d7b562a3ab486'

function getWeatherForecast (searchString) {
  console.log(searchString)
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='
    + searchString + '&mode=json&appid=' + openWeatherMapAppId)
}

var helpers = {
  search: function (searchString) {
    return getWeatherForecast(searchString);
  }
}

module.exports = helpers;
