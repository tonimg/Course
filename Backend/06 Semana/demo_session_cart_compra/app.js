const express = require('express')
// npm ini
// npm install express
// npm install express-session --save
// npm install session-file-store --save
// npm install pug --save
// npm install body-parser // for send dates in the form
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug')

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
  req.session.cart = req.session.cart || []
  next()
})

app.get('/cart', (req, res) => {
  res.render('cart', { cart: req.session.cart})
})

app.post('/cart', (req, res) => {
  req.session.cart.push(req.body)
  // res.send('Your items has added to the cart') //--> show messag in webpage
  res.render('cart', { cart: req.session.cart})
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
