const Task = require('../../../models/Task')

function getAll (req, res) {
  Task.find()
    .then(tasks => {
      // res.json(tasks)
      res.render('../../../views/list.pug', { tasks })
    })
}

module.exports = getAll
