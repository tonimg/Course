function showData(req, res) {
  const msg = 'super secret data'
  res.json({msg})
}

module.exports = showData
