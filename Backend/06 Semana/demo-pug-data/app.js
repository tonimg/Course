const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const PORT = 3000

const employees = require('./data/employees.json')

app.use(express.static('public'))
app.set('view engine', 'pug')
app.locals.pretty = true

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/employees', (req, res) => {
  const search = req.query.search
  let filteredEmployees

  if (search) {
    filteredEmployees = employees.filter(employee => {
      return employee.first_name.includes(search) || employee.last_name.includes(search)
    })
  } else {
    filteredEmployees = employees
  }
  res.render('list', { employees: filteredEmployees })
})

app.get('/employee/:id', (req, res) => {
  const id = +req.params.id
  const filteredEmployee = employees.filter(employee => employee.id === id)
  res.render('details', { employee: filteredEmployee[0] })
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.post('/employees', (req, res) => {
  const data = req.body.employee_name
  res.send('request received! ' + data)
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
