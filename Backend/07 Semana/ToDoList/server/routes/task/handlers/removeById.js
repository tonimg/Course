const Task = require('../../../models/Task')

function removeById (req, res) {
  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then(task => {
      res.json(msg)
      // res.redirect('list', { tasks })
      // res.render('list', { tasks })
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = removeById
