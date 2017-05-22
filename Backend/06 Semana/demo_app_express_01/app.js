// npm ini
// npm install express body-parser pug --save

const express = require('express')  // cargo express
const bodyParser = require('body-parser') // libreria de node, para poder capturar datos via AJAX o formulario
const fs = require('fs')

const app = express() // defino la instancia Express
const PORT = 3000
const OUTPUT_FILENAME = 'data.txt'

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static('public')) // defino rutas en el servidor.
app.set('view engine', 'pug')

app.get('/hello', (req, res) => {
  res.send('Hello Word!')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// recogemos del req.body el username y lo guardamos en una variable
app.post('/contact', (req, res) => {
  const userName = req.body.username
// escribimos un fichero en el servidor con el nombre sel servidor
  fs.writeFile(OUTPUT_FILENAME, userName, err => {
    if (err) throw err
// gracias al metodo post y res send
// enviamos infomacion al usuario
    res.send(`username has been properly saved!`)
  })
})

// recogemos del req body el username y le enviamos un saludo con res.send
app.post('/contact', (req, res) => {
  const userName = req.body.username
  res.send(`Hello ${userName}!!`)
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
