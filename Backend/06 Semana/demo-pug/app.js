const express = require('express')

const app = express()
const PORT = 3000

app.set('view engine', 'pug')
app.locals.pretty = true

app.get('/', (req, res) => {
  const book = {
    name: 'Hello',
    price: 12.99
  }
  const books = []
  const featuredBooks = [
    {
      title: 'Old Man and the Sea',
      price: 20
    },
    {
      title: '1984',
      price: 30
    },
    {
      title: 'The Bible',
      price: 10
    }
  ]
  res.render('index', { book, books, featuredBooks })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
