const Cat = require('../../../models/Cat')

function getAll(req,res) {

  Cat.find()
    .then( cats => {
      res.json(cats)
    })

}

module.exports = getAll