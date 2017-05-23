const Restaurant = require('../../../models/Restaurant')

function byId (req,res) {

  const { id } = req.params
  const { projection } = req

  Restaurant
    .findById(id , projection)
    .then( restaurant => {
      res.json(restaurant)
    })

}

module.exports = byId