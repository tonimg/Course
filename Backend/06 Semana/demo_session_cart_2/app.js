// start the new project
// npm ini
// npm install express
// npm install express-session --save
// npm install session-file-store --save
// npm install pug --save
// npm install body-parser // for send dates in the form
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser') // form
const FileStore = require('session-file-store')(session)

const app = express()
const PORT = 3000

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }))

// function middleware -->app.use
// documentation recommended
app.use(session({
  name: 'Toni-server-session-cookie-id', // is the name of our cookie
  secret: '4u6mVaJtJrrhZb2iHx2ugBof', // we create you secret word
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
  res.render('cart', { cart: req.session.cart}) // --> render in cart.pug (views/cart.pug)
})

app.post('/cart', (req, res) => {
  const {item, quantity} = req.body // asignamos el objeto (item, quantity) a body
  const newItem.id = {item, quantity} // añadimos un id a cada objeto.
  newItem.id = req.session.cart.length +1 // sumamos este objeto a nuestra sesion en la cookie

  req.session.cart.push(newItem) // push a cada item

  res.render('cart', { cart: req.session.cart})
})

app.delete('/cart/:id', (req,res){
  const id = req.params.id
  req.session.cart = req.session.cart.filter(item =>{
    return 
  })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
