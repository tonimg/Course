const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = Promise

const app = express()

const urlDB = 'mongodb://localhost:27017/test'
const PORT = 3000

const filterMiddleware = require('./routes/middlewares/filters')

const restaurantsRoutes = require('./routes/restaurants')
const restaurantRoutes = require('./routes/restaurant')

mongoose.connect(urlDB)

app.use(filterMiddleware)

app.use('/restaurants', restaurantsRoutes)
app.use('/restaurant', restaurantRoutes)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);

