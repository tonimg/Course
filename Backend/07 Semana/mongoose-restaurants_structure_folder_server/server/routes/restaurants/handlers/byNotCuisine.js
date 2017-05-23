 const Restaurant = require('../../../models/Restaurant')

 function byNotCuisine (req,res) {

  const { cuisine } = req.params
  const { projection, limit, skip } = req

  Restaurant
    .find( { cuisine: { $ne: cuisine } }, projection )
    .limit(limit)
    .skip(skip)
    .then( restaurants => {
      res.json(restaurants)
    })

}

module.exports = byNotCuisine