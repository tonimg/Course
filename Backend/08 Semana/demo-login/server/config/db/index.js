const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', (err) => console.log(`Mongoose default connection error: ${err}`))
db.on('disconnected', () => console.log('Mongoose default connection disconnected'))
db.on('connected', function () {
  console.log(`Mongoose default connection open to ${this.host}:${this.port}`)
})

module.exports = db
