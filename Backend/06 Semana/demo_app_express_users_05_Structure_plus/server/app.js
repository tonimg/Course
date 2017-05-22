const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

const userRoutes = require('./routes/users')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static( path.join(__dirname, '../client')  ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.use(userRoutes)

app.listen(PORT, () => console.log(`🤘 Magic happens at PORT ${PORT}...`))