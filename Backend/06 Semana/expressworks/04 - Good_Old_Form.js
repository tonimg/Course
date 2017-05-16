var express = require('express')
var path = require('path')
var bodyparser = require('body-parser')

const PORT = process.argv[2]
const DIRNAME = process.argv[3]

var app = express()

app.use(bodyparser.urlencoded({extended: false}))

// app.set('view engine', 'pug')

app.post('/form', function (req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(PORT)

// solution

// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()

// app.use(bodyParser.urlencoded({extended: false}))

// app.post('/form', function(req, res) {
//   res.send(req.body.str.split('').reverse().join(''))
// })

// app.listen(process.argv[2])
