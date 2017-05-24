const Cat = require('../../../models/Cat')

function updateById (req,res) {

  const { id } = req.params
  const { name, age } = req.body

  const updateData = {}
  if (name) updateData.name = name
  if (age) updateData.age = age

  Cat.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = updateById