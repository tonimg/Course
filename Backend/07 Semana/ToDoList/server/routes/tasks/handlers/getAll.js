const Task = require('../../../models/Task')

function getAll (req, res) {
  Task.find()
    .then(tasks => {
      // res.json(tasks)
      res.render(tasks.toString())
    })
}

module.exports = getAll
