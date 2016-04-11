var axios = require('axios');

var openWeatherMapAppId = 'b5bd1771d70b07d753e1d534438d1692'

function formatSearchString (searchString) {
  if (!searchString.match(/,/)) {
    var sections = searchString.split(' ')
    sections.splice(sections.length-1, 0, ', ')
    return sections.join('')
  } else {
    return searchString 
  }
}

function getWeatherForecast (formattedSearchString) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='
    + formattedSearchString + '&mode=json&appid=' + openWeatherMapAppId)
}

var helpers = {
  search: function (searchString) {
    var formattedSearchString = formatSearchString(searchString)
    return getWeatherForecast(formattedSearchString).then(function (searchResults) {
      return searchResults.data;
    })
  }
}

module.exports = helpers;
