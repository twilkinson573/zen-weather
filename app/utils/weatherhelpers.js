
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
  }
}

module.exports = helpers;