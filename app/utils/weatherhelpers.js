function getDayArrays (days, forecast) {
  if (!days[forecast.dt_txt]) {
    days[forecast.dt_txt] = [forecast]
  } else {
    days[forecast.dt_txt].push(forecast)
  }
  return days
};

function getToday () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}

  return yyyy+'-'+mm+'-'+dd;
}
// Needs to return an array
function calculateDayForecasts(days) {
  var newDaysArr = [];
  for (day in days) {
    var temp_readings = [];
    var weather_readings = [];
    days[day].map(function (obj) {
      temp_readings.push(obj.main.temp)
      weather_readings.push(obj.weather[0].description)
    });

    var temps_sum = 0;
    for (var i=0; i<temp_readings.length; i++) {
      temps_sum += temp_readings[i];
    };
    var avg_temp = temps_sum/temp_readings.length;
    // TODO: Make this take most common weather rather than first
    var avg_weather = weather_readings[0];
    var date = days[day].dt_txt
    newDaysArr.push({date: {temp: avg_temp, weather: avg_weather}})
  }
  console.log('NEWDAYSARR', newDaysArr)
}

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
    var days = forecastArray.reduce(getDayArrays, initialValue);
    var today = getToday();
    delete days[today]
    console.log('DAYS', days)
    // This should return an array 
    calculateDayForecasts(days);
    return days
  }
}

module.exports = helpers;