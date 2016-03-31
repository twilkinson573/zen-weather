function getDayArrays (days, forecast) {
  if (!days[forecast.dt_txt]) {
    days[forecast.dt_txt] = [forecast]
  } else {
    days[forecast.dt_txt].push(forecast)
  }
  return days
};

var helpers = {
  locationName: function (locationResult) {
    var city_name = locationResult.name
    var country_code = locationResult.country
    return (
      city_name + ', ' + country_code
    )
  },
  currentTemp: function (temp) {
    return(Math.round(temp - 273.15))
  },
  displayTime: function (datetimeString) {
    var dateTime = new Date(datetimeString)
    return dateTime.getHours();
  },
  getDayForecasts: function (forecastArray) {
    var initialValue = {};
    var forecastArray = forecastArray.map(function (obj){
      obj['dt_txt'] = obj.dt_txt.split(' ')[0];
      return obj
    })
    console.log('FORECASTS', forecastArray)
    var days = forecastArray.reduce(getDayArrays, initialValue);
    console.log('DAYS', days);
  }
}

module.exports = helpers;