const Cat = require('../../../models/Cat')

function removeById (req,res) {

  const { id } = req.params

  Cat.findByIdAndRemove(id)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = removeById