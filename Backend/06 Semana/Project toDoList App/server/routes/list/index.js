const express = require('express')

const router = express.Router()

router.get('/list', (req, res) => {
  const list = req.session.list
  res.render('list', { list })
})

router.post('/list', (req, res) => {
  const { item } = req.body
  const id = +new Date()
  req.session.list.push({ id, item })
  res.redirect('/list')
})

router.delete('/list/:id', (req, res) => {
  const id = +req.params.id
  req.session.list = req.session.list.filter(list => list.id !== id)
  res.send(`Success removing element ${id}!!`)
})

router.put('/list/:id', (req, res) => {
  const id = +req.params.id
  const { editedValue } = req.body
  req.session.list = req.session.list.map(list => {
    if (list.id === id) { list.item = editedValue }
    return list
  })
  res.send(`Success editing element ${id}!!`)
})

module.exports = router
