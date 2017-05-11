var moment = require('moment')

var startDate, endDate, secondsDiff

startDate = moment()

setTimeout(function () {
  endDate = moment()
  secondsDiff = endDate.diff(startDate, 'seconds')
  console.log(secondsDiff)
}, 5000)

