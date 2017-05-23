const mongoose = require('mongoose')
const Cat = require('./models/')Cat

const dbUrl = 'mongodb://localhost:27017/test'

mongose.connect (dbUrl)

mongoose.Promise = Promise

var kitty = new Cat({ name: 'Zildjian' })

kitty.save(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
