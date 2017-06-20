const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    default: +new Date()
  },
  modifiedAt: {
    type: Number
  },
  modifiedAdDate: {
    type: Number
  },
  completedAt: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
