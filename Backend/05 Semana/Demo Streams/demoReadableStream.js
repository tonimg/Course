var fs = require('fs')
var moment = require('moment')

var startDate = moment()
var readableStream = fs.createReadStream('demo.txt')
var wholeFileContent = ''

readableStream.setEncoding('utf-8')

readableStream.on('data', function (chunkEncoded) {
  var chunkArrivalDate = moment()
  var secondsDiff = chunkArrivalDate.diff(startDate, 'miliseconds')
  console.log(chunkEncoded.split(' ').length + ' words')
  console.log('getting the chunk took ' + secondsDiff + 'ms')

  wholeFileContent += chunkEncoded
})

readableStream.on('end', function () {
  var endDate = moment()
  var secondsDiff = endDate.diff(startDate, 'miliseconds')
  console.log('reading the whole file took ' + secondsDiff + 'ms')
  console.log(wholeFileContent.split(' ').length + ' words')
})
