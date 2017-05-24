const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Cat = require('./models/Cat')

const dbUrl = 'mongodb://localhost:27017/test'
const PORT = 3000

mongoose.Promise = Promise

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(dbUrl)

app.get('/cats', (req,res) => {

  Cat.find()
    .then( cats => {
      res.json(cats)
    })

})

app.post('/cats', (req,res) => {

  const { name, age } = req.body

  const newCat = new Cat({ name, age })

  newCat.save()
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

})

app.delete('/cat/:id', (req,res) => {

  const { id } = req.params

  Cat.findByIdAndRemove(id)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

})

app.put('/cat/:id', (req,res) => {

  const { id } = req.params
  const { name, age } = req.body

  const updateData = {}
  if (name) updateData.name = name
  if (age) updateData.age = age

  Cat.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);
