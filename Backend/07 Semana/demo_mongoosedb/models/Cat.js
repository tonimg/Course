const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatSchema = new Schema({
  name: String
})

const Cat = moongose.model('Cat' CatSchema)

module.exports = Cat
