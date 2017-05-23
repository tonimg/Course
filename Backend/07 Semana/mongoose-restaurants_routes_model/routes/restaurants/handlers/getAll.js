const Restaurant = require('../../../models/Restaurant')

function getAll(req,res) {

  const { projection, limit, skip } = req

  Restaurant
    .find( {}, projection )
    .limit(limit)
    .skip(skip)
    .then( restaurants => {
      res.json(restaurants)
    })

}

module.exports = getAll