# Today 26/05


### Heroku

![heroku_logo](img/heroku_logo.png)

once time installed in terminal put 
heroku login

![heroku_login](img/heroku_login.png)

- Check we have installed differents commponents

``node -v`` 
``npm -v`` 
``git --version``

First steps - [Setup page](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

- With git ``remote -v`` we check the git server address

after to check all is correct, put the next command

``heroku create``

- after

``remote -v``

- and finish upload our project

``git push heroku master``

- With ``heroku open`` we can open the browser directly with our web address

For the look the logs our server this command
``heroku logs``

- Now we installing one module for the test

``npm install --save --save-exact cool-ascii-faces``


- Now we can copy this code proporcionated by heroku

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


