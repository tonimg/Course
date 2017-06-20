const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const passport = require('./config/passport')

const authRoutes = require('./routes/auth')
const privateRoutes = require('./routes/private')

const PORT = process.env.PORT || 3000
const app = express()

dotenv.load()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use(passport.initialize())

app.use(authRoutes)
app.use(privateRoutes)


module.exports = app
