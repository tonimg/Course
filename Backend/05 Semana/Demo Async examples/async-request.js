var fs = require('fs')
var request = require('request')
var fileToRead = 'link.txt'

fs.readFile(fileToRead, 'utf8', function (err, linkToRequest) {
  if (err) throw err
  request(linkToRequest, function (err, response, body) {
    if (err) throw err
    console.log(body)
  })
})
