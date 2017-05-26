const Task = require('../../../models/Task')

function updateById (req, res) {
  console.log('req', req)
  const { id } = req.params
  const { name, completedAd, completedAdDate = +new Date(), modifiedAd = +new Date()} = req.body

  const updateData = {}
  if (name) updateData.name = name
  updateData.modifiedAd = modifiedAd
  updateData.completedAdDate = completedAdDate
  if (completedAd) updateData.completedAd = completedAd

  Task.findByIdAndUpdate(id, updateData)
    .then(msg => {
      res.json(msg)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = updateById
