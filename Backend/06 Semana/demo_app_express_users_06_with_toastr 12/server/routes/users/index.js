const express = require('express')

const router =  express.Router()

router.get('/users', (req, res) => {
  const users = req.session.users
  res.render('users', { users })
})

router.post('/users', (req, res) => {
  const { username } = req.body
  const id = +new Date()
  req.session.users.push({ id, username })
  res.redirect('/users')
})

router.delete('/user/:id', (req, res) => {
  const id = +req.params.id
  req.session.users = req.session.users.filter( user => user.id !== id )
  res.send(`Success removing element ${id}!!`)
})

router.put('/user/:id', (req, res) => {
  const id = +req.params.id
  const { editedValue } = req.body
  req.session.users = req.session.users.map( user => {
    if (user.id === id) { user.username = editedValue }
    return user
  })
  res.send(`Success editing element ${id}!!`)
})

module.exports = router