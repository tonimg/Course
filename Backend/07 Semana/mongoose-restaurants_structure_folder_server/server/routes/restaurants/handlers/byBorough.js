const Restaurant = require('../../../models/Restaurant')

function byBorough(req,res) {

  const { borough } = req.params
  const { projection, limit, skip } = req

  Restaurant
    .find( { borough }, projection )
    .limit(limit)
    .skip(skip)
    .then( restaurants => {
      res.json(restaurants)
    })

}

module.exports = byBorough