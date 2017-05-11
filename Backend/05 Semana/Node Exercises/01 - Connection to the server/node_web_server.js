var http = require('http')

// For MAC Users
// PORT=3005 node app.js
//
// For Windows Users
// set PORT=3005 && node app.js

var server = http.createServer()
var PORT = process.env.PORT || 3000

server.on('request', function (req, res) {
  res.end('End of request!')
})

server.listen(PORT, function () {
  console.log('Listening on PORT ' + PORT)
})
