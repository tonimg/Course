var http = require('http')
var fs = require('fs')

var server = http.createServer()
var readableStream = fs.createReadStream('demo.txt')

server.on('request', function (request, response) {
  readableStream
    .pipe(response)
    .pipe(response)
})

server.listen(3000)
console.log('Listening on port 3000...')
