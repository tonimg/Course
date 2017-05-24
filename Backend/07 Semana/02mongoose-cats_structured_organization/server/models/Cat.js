const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0
    }
})

const Cat = mongoose.model('Cat', CatSchema )

module.exports = Cat