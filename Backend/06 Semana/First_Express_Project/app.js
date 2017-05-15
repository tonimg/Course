const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
  res.send('Hello Toni!')
})

app.get('/bye', function (req, res) {
  res.send('Bye Toni!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
