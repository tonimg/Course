const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addTask = require('./handlers/addTask')
const completedTask = require('./handlers/completedTask')

router.get('/', getAll)
router.post('/', addTask)
router.get('/', completedTask)

module.exports = router
