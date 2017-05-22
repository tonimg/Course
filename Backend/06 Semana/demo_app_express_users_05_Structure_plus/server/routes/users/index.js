const express = require('express')

const router =  express.Router()

let aNames = require('../../data/data.json')
const writeNamesInFile = require('../../writeNamesInFile.js')

router.get('/users', (req, res) => {
  res.render('users', {
    names: aNames
  })
})

router.post('/users', (req, res) => {
  const userName = req.body.username
  aNames.push(userName)
  writeNamesInFile(aNames)
    .then( () => res.redirect('/users') )
})

router.delete('/users/:id', (req, res) => {
  const id = req.params.id
  aNames.splice(id, 1)
  writeNamesInFile(aNames)
    .then( () => res.send(`Success removing element ${id}!!`) )
})

router.put('/users/:id', (req, res) => {
  const id = req.params.id
  const editedValue = req.body.editedValue
  aNames[id] = editedValue
  writeNamesInFile(aNames)
    .then( () => res.send(`Success editing element ${id}!!`) )
})

module.exports = router