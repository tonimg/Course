const Task = require('../../../models/Task')

function removeById (req, res) {
  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.redirect('/tasks')
      res.json(err)
    })
}

module.exports = removeById
