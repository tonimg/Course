const Task = require('../../../models/Task')

function completedTask (req, res) {
  const { id } = req.params
  const { name, completedAd, completedAdDate = +new Date(), modifiedAd = +new Date()} = req.body

  const updateData = {}
  if (name) updateData.name = name
  updateData.modifiedAd = modifiedAd
  updateData.completedAdDate = completedAdDate
  if (completedAd) updateData.completedAd = completedAd

  donetask.save()
    .then(msg => {
      // res.json(msg)
      res.render('/done')
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = completedTask
