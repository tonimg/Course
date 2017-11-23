const express = require('express')

const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT

app.use(express.static('public'))

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
