const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.set('view engine', 'pug')
app.locals.pretty = true

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
