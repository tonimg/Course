
# Today 23.05


[![mongoose](img/mongoose.png)](http://mongoosejs.com/)


### [Monogoose](http://mongoosejs.com/)


For begin with mongoose must to create a model.
We must work with models.
Our project must has the model with the follow way

First step in command line

``npm install mongoose``
``npm install express``

After, we write the code for our ``app.js``

Example code:

```javascript
const express = require('express')
const mongoose = require('mongoose')

mongoose.Promise = Promise

const app = express()

const urlDB = 'mongodb://localhost:27017/test'
const PORT = 3000

const Restaurant = require('./models/Restaurant')

mongoose.connect(urlDB)

app.get('/restaurants', (req, res) => {
  Restaurant
    .find()
    .limit(20)
    .then(restaurants => {
      res.json(restaurants)
    })
})

app.post('/restaurants', (req, res) => {
  const { name } = req.body
  const restaurant = new Restaurant({ name })

  restaurant.save()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
```

Exercises:

1. [mongoosedb with model structure](demo_mongoosedb)
1. [mongoose restaurants basic](emo-mongoose-restaurants_basic)
1. [mongoose restaurants](demo-mongoose-restaurants)
1. [mongoose restaurants router](demo-mongoose-restaurants_router)
1. [mongoose restaurants routes model](mongoose-restaurants_routes_model)
1. [mongoose restaurants structure folder server](mongoose-restaurants_structure_folder_server)
