const express = require('express')
// npm ini
// npm install express
// npm install express-session --save
// npm install session-file-store --save
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const app = express()
const PORT = 3000

// function middleware .use
// documentation recommended
app.use(session({
  name: 'Toni-server-session-cookie-id', // is the name of our cookie
  secret: '4u6mVaJtJrrhZb2iHx2ugBof', // created you secret word
  saveUninitialized: true,
  resave: true, // save in memory
  store: new FileStore() // and save into file
}))

// Other function middleware
// And now we have all date of session
app.use((req, res, next) => {
  req.session.counter = ++req.session.counter || 0
  next()
})

app.get('/', (req, res) => {
  res.send(`Welcome to my page! You visited mi page ${req.session.counter} times`)
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
