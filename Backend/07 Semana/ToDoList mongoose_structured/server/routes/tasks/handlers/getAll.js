const Task = require('../../../models/Task')

function getAll (req, res) {
  Task.find()
    .then(tasks => {
      res.json(tasks)
    })
}

module.exports = getAll
