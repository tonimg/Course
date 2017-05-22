// npm ini
// npm install express
// npm install express-session --save
// npm install session-file-store --save
// npm install pug --save
const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
// const FileStore = require('session-file-store')(session)
const userRoutes = require('./routes/list')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.locals.pretty = true
app.use(userRoutes)

app.use(session({
  name: 'Toni-TodoList-session-id', // is the name of our cookie
  secret: 'mysupersecrectword', // created you secret word
  saveUninitialized: true,
  resave: true // save in memory
  // store: new FileStore() // and save into file
}))

app.use((req, res, next) => {
  req.session.list = req.session.list || []
  next()
})

app.get('/list', (req, res) => {
  res.render('list', { list: req.session.list })
})

app.post('/list', (req, res) => {
  const { item } = req.body
  const newItem = { item }
  newItem.id = req.session.list.length + 1

  req.session.list.push(newItem)

  res.render('list', { list: req.session.list })
})

app.listen(PORT, () => console.log(` 👉 Listening on ${PORT} ✅ `))
