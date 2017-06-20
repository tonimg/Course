const express = require('express')
const router = express.Router()

const passport = require(__base + 'config/passport')

const showData = require('./handlers/showData')

router.use( passport.authenticate('jwt', { session: false }) )

router.get('/data', showData)

module.exports = router
