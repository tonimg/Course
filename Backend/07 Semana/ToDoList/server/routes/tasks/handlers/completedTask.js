const Task = require('../../../models/Task')

function completedTask (req, res) {
  const { name } = req.body

  const newTask = new Task({ name })

  newTask.save()
    .then(msg => {
      // res.json(msg)
      res.render('/done')
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = completedTask
