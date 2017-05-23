const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = Promise

const app = express()

const urlDB = 'mongodb://localhost:27017/test'
const PORT = 3000

const Restaurant = require('./models/Restaurant')

mongoose.connect(urlDB)

app.get('/restaurants', (req, res) => {
  Restaurant
    .find()
    .limit(20)
    .then(restaurants => {
      res.json(restaurants)
    })
})

app.post('/restaurants', (req, res) => {
  const { name } = req.body
  const restaurant = new Restaurant({ name })

  restaurant.save()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
