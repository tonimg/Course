const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addCat = require('./handlers/addCat')

router.get('/', getAll)
router.post('/', addCat)

module.exports = router