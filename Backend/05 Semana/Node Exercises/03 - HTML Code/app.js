// -- \\ Get Request url from the file link.txt

var request = require('request')
var fs = require('fs')
var filename = process.argv[2] // || 'link.txt'

fs.readFile('./link.txt', 'utf8', (err, contentFile) => {
  if (err) throw err

  console.log(contentFile)
// install request with npm install request
  request(contentFile, function (error, response, body) {
  	if (err) throw err
    var titleWebPage = body.match(/<title>(.*)<\/title>/i)[1]
    console.log('Filename= ' + filename)
    console.log('Title= ' + titleWebPage)
    console.log('BODY: ' + body)
  })
})
