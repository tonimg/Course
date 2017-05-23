const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
// const FileStore = require('session-file-store')(session)

const app = express()
const PORT = 3005

const userRoutes = require('./routes/users')

app.use(session({
  name: 'jm-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true
  // store: new FileStore()
}))

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use((req, res, next) => {
  req.session.users = req.session.users || []
  next()
})

app.use(express.static(path.join(__dirname, '../client')))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.locals.pretty = true

app.use(userRoutes)

app.listen(PORT, () => console.log(`🤘 Magic happens at PORT ${PORT}...`))
