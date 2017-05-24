const Cat = require('../../../models/Cat')

function addCat(req,res) {

  const { name, age } = req.body

  const newCat = new Cat({ name, age })

  newCat.save()
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = addCat