# Today 26/05

## Create a New App

### Heroku

![heroku_logo](img/heroku_logo.png)

Once installed in terminal put ``heroku login``

![heroku_login](img/heroku_login.png)

- Check we have installed different components

``node -v`` 
``npm -v`` 
``git --version``

First steps - [Setup page](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

- With git ``remote -v`` we check the git server address

after to check all is correct, put the next command for create a new app project:

``heroku create``

When you create an app, a git remote (called heroku) is also created and associated with your local git repository. Heroku also generates a random name URL for your app.

- after

``remote -v``

- and finish upload our project

``git push heroku master``

- With ``heroku open`` we can open the browser directly with our web address

For the look the logs our server this command
``heroku logs``

With the command ``heroku info``, we can see info about our server 

- Now we installing one module for the test

``npm install --save --save-exact cool-ascii-faces``


- Now we can copy this code proportionated by heroku

```javascript

var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

```

- ``npm install``
-  for windows OS ``set PORT=5000``
-  ``node index``
-  http://localhost:5000/ or http://localhost:5000/cool in our browser
- ``git status``
- ``git add --all``
- ``git commit -m"update last changes"``
- ``git push heroku master``
- ``heroku open cool`` 


![heroku_cool](img/heroku_cool.png)

Schema Heroku with GitHub

![git-with-heroku.png](img/git-with-heroku.png)

## MongoLab

https://mlab.com/


![mlab](img/mlab_logo.png)

Use for upload our db.

Register and verify you account.
After,create new on MongoDB Deployments
Single-node for free versions (Sandbox (shared, 0.5 GB) -- FREE)

Database Name: test-skylab
and next button **Create new MongoDB deployment**


after in the command line we can put

``mongo ds131510.mlab.com:31510/test-skylab -u <dbuser> -p <dbpassword>``


For do one test, try to insert this in commando line.

``curl -X POST --data "name=Test1" localhost:3000/cats``

In our project we must put 

``const dbUrl = 'mongodb://<dbuser>:<dbpassword>@ds131510.mlab.com:31510/test-skylab'``

---

express demo-express-struture

for install the typical structure.

---


Cuando estamos en desarrollo, cargamos nuestras variables de entorno desde un fichero .env que previamente debemos generar.

Could be so:

```
DB_URL=mongodb://localhost:27017/test
PORT=3000

```

Para cargar estas variables de entorno en nuestro proyecto nos hace falta instalar ``npm install dotenv --save-dev``

Tenemos que poner este código justo antes de la conexion. Variables de entorno

```
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
```

Quedando nuestro código de ejemplo así:

```
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routerCats = require('./routes/cats')
const routerCat = require('./routes/cat')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const dbUrl = 'mongodb://admin100:admin100@ds131510.mlab.com:31510/test-skylab'
const PORT = 3000

const app = express()

mongoose.Promise = Promise
mongoose.connect(dbUrl)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/cats', routerCats)
app.use('/cat', routerCat)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
```

---
