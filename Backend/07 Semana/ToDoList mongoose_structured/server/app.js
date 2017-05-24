const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

const dbUrl = 'mongodb://localhost:27017/test'
const PORT = 3000

const app = express()

mongoose.Promise = Promise
mongoose.connect(dbUrl)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
