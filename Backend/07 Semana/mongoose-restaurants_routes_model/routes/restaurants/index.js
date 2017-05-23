const express = require('express')

const router = express.Router()

const getAllRestaurants = require('./handlers/getAll')
const getByBorough = require('./handlers/byBorough')
const getByCuisine = require('./handlers/byCuisine')
const getByNotCuisine = require('./handlers/byNotCuisine')

router.get('/', getAllRestaurants)
router.get('/borough/:borough', getByBorough)
router.get('/cuisine/:cuisine', getByCuisine)
router.get('/cuisine/not/:cuisine', getByNotCuisine)

module.exports = router