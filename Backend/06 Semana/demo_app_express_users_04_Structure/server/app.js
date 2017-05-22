const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

let aNames = require('./data/data.json')
const writeNamesInFile = require('./writeNamesInFile.js')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static( path.join(__dirname, '../client')  ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.get('/users', (req, res) => {
  res.render('users', {
    names: aNames
  })
})

app.post('/users', (req, res) => {
  const userName = req.body.username
  aNames.push(userName)
  writeNamesInFile(aNames)
    .then( () => res.redirect('/users') )
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  aNames.splice(id, 1)
  writeNamesInFile(aNames)
    .then( () => res.send(`Success removing element ${id}!!`) )
})

app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const editedValue = req.body.editedValue
  aNames[id] = editedValue
  writeNamesInFile(aNames)
    .then( () => res.send(`Success editing element ${id}!!`) )
})

app.listen(PORT, () => console.log(`🤘 Magic happens at PORT ${PORT}...`))