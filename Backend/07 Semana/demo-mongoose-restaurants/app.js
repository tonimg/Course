const express = require('express')
const mongoose = require('mongoose')
const ObjectId = require('mongoose').ObjectId

mongoose.Promise = Promise

const app = express()
const PORT = 3000

const urlDB = 'mongodb://localhost:27017/test'

const Restaurant = require('./models/Restaurant')

mongoose.connect(urlDB)

/*
/restaurants?show=_id,name,borough,cuisine
*/
app.use((req, res, next) => {
  const { show, hide, page = 1, limit = 20 } = req.query
  let projection = {}
  if (show) {
    const fieldsToShow = show.split(',')
    fieldsToShow.forEach(field => projection[field] = 1)
  }
  if (hide) {
    const fieldsToShow = hide.split(',')
    fieldsToShow.forEach(field => projection[field] = 0)
  }

  req.projection = projection
  req.limit = +limit
  req.skip = limit * (page - 1)
  next()
})

app.get('/restaurants', (req, res) => {
  const { projection, limit } = req
  Restaurant
    .find({}, projection)
    .limit(limit)
    .then(restaurants => {
      res.json(restaurants)
    })
})

app.get('/restaurants/borough/:borough', (req, res) => {
  const { borough } = req.params
  const { projection, limit, skip } = req

  Restaurant
      .find({ borough }, projection) // cursor
      .limit(limit)
      .skip(skip)
      .then(restaurants => {
        res.json(restaurants)
      })
})

app.get('/restaurants/:id', (req, res) => {
  const { id } = req.params

  Restaurant
    .findById(id) // cursor
    .then(restaurants => {
      res.json(restaurants)
    })
})

app.get('/restaurants/cuisine/:cuisine', (req, res) => {
  const { cuisine } = req.params
  const { projection } = req

  Restaurant
    .find({cuisine: {$ne: cuisine}}, projection)
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
