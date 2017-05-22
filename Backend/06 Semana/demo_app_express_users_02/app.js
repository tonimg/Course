// npm ini
// npm install express body-parser pug --save
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const PORT = 3000
const OUTPUT_FILENAME = 'data.json'

let aNames = require('./data.json')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/hello', (req, res) => {
  res.send('Hello you!')
})

app.get('/users', (req, res) => {
  res.render('users', {names: aNames})
})

app.post('/users', (req, res) => {
  const userName = req.body.username
  aNames.push(userName)
  const jsonListNames = JSON.stringify(aNames)
  fs.writeFile(OUTPUT_FILENAME, jsonListNames, err => {
    if (err) throw err
    res.redirect('/users')
  })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
