const express = require('express')

const router = express.Router()

const getById = require('./handlers/byId')

router.get('/:id', getById)

module.exports = router