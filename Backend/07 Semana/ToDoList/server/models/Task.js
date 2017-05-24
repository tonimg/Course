const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdAd: {
    type: Number,
    default: +new Date()
  },
  modifiedAd: {
    type: Number
  },
  modifiedAdDate: {
    type: Number
  },
  completedAd: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
