const Task = require('../../../models/Task')

function updateById (req, res) {
  const { id } = req.params
  const { name, age } = req.body

  const updateData = {}
  if (name) updateData.name = name
  if (age) updateData.age = age

  Task.findByIdAndUpdate(id, updateData)
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = updateById
