const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addTask = require('./handlers/addTask')

router.get('/', getAll)
router.post('/', addTask)

module.exports = router
