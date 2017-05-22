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
  res.render('users', {
    names: aNames
  })
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

app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  aNames.splice(id, 1)
  console.log(`You want to remove element ${id}`);
  const jsonListNames = JSON.stringify(aNames)
  fs.writeFile(OUTPUT_FILENAME, jsonListNames, err => {
    if (err) throw err
    res.send(`Success removing element ${id}!!`)
  })
})

app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const editedValue = req.body.editedValue
  aNames[id] = editedValue
  console.log(`You want to edit element ${id} w/ new Value ${editedValue}`);
  const jsonListNames = JSON.stringify(aNames)
  fs.writeFile(OUTPUT_FILENAME, jsonListNames, err => {
    if (err) throw err
    res.send(`Success editing element ${id}!!`)
  })

})

app.listen(PORT, () => console.log(`🤘 Magic happens at PORT ${PORT}...`))