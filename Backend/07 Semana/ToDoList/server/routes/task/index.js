const express = require('express')
const router = express.Router()

const removeById = require('./handlers/removeById')
const updateById = require('./handlers/updateById')

router.delete('/:id', removeById)
router.put('/:id', updateById)

module.exports = router
