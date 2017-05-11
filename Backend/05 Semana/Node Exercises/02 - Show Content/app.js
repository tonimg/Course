// connection to the server

var http = require('http')

var server = http.createServer()
var PORT = process.env.PORT || 3000

server.on('request', function (req, res) {
  res.end('this is the response')
})

server.listen(PORT, function () {
  console.log('Listening on PORT ' + PORT)
})

// read the file and show the content
// on windows user ofr launch the app will be: set PORT=3000&&node app.js

var fs = require('fs')
var filename = process.argv[2] || 'test.txt'
fs.readFile('./test.txt', 'utf8', (err, contentFile) => {
  if (err) throw err
  console.log(contentFile)
})
