# Today 19.05

review:

Also calling **endpoints**

1. **[GET](http://expressjs.com/en/4x/api.html#app.get.method)** "/" render --> HTML // *get things* 
1. **[POST](http://expressjs.com/en/4x/api.html#app.post.method)** "/cart" --> AJAX --> Status | msg // *send things*
1. **[DELETE](http://expressjs.com/en/4x/api.html#app.delete.method)** "/cart/:id" --> AJAX --> Status | msg  // *delete things*
1. **[PUT](http://expressjs.com/en/4x/api.html#app.put.method)** "/cart/:id" --> AJAX --> Status / msg // *modify things*

AJAX only for Put and Delete, for make server petitions.
Post always we have the information on ``req.body``

Example code ***made by Sergio***:

```javascript
// npm ini
// npm install express body-parser pug --save
const express = require('express')
const bodyParser = require('body-parser') // Permite recoger info de formularios
const fs = require('fs') // Para usar writeFile en app.post

const PORT = 3000
const app = express()
const OUTPUT_FILENAME = 'data.json'

let aNames = require('./data.json')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public')) // busca archivos estáticos en carpeta 'public'

app.set('view engine', 'pug') // aquí residen los .pug

app.get('/hello', (req, res) => { // en /hello enviamos mensaje en forma de html estática. SOLO SE ENVÍA UN MENSAJE, NO RENDERIZA NADA
  res.send('Hello')
})

app.get('/add-users', (req, res) => { // Renderiza contact.pug
  res.render('add-users')
})

app.post('/users', (req, res) => {
  const userName = req.body.username // Ruta:'contact.pug input name'. Esto necesita body-parser (primer paso de body-parser). body representa los inputs del formulario, un objeto; y body.username un string en este caso.
  aNames.push(userName)
  const jsonListNames = JSON.stringify(aNames)
  fs.writeFile(OUTPUT_FILENAME, jsonListNames, err => {
    if (err) throw err
    res.send(`${userName} has been captured`) // res.send termina la conexión
  })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
```


- Demo app express from Juanma [here](https://github.com/SkylabCoders/demo-app-express-basic).
- [Generated file](demo_app_express_01)
- [User List](demo_app_express_users_02)
- [Users list edit & remove](demo_app_express_users_03_edit_remove)
- [...with simple Structure](demo_app_express_users_04_Structure)
- [... with pro Structure](demo_app_express_users_05_Structure_plus)
- [Exercises To-Do app](https://github.com/juanmaguitar/node-exercises/tree/master/01-todo-app)
- [Project toDoList App](Project_toDoList_App)


### [Express Router](https://expressjs.com/en/guide/routing.html)

Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

What exactly is the Express Router? It is a mini express application without all the bells and whistles of an express application, just the routing stuff. Let's take a look at exactly what this means. We'll go through each section of our site and use different features of the Router.
