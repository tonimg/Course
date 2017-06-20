# Today 29.05 

## Mean Stack

![meanstack.png](img/meanstack.png)


## Mongo - Express - Angular - Node


![mean-stack-scheme.png](img/mean-stack-scheme.png)


### How put your project in production

## Create account Heroku

Heroku site: https://www.heroku.com/
Choose deploy in our case, with Node.js https://www.heroku.com/nodejs
Follow the steps.

For put our project in production we mus set this command in our terminal 

``heroku config:set NODE_ENV=production``

With the command ``heroku config`` we can see if the environment variables is set.


Useful environment variables:

set PATH
set NODE_ENV
set DB_URL

steps

1. create a file .env and add on .gitignore file
2. ``heroku create`` command in our terminal
2. set the environment variable ``heroku config:set Node_ENV``: 

```
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
```

3. DB_URL


Example by Juanma -> https://github.com/SkylabCoders/demo-heroku-website

- [Example heroku website](example-heroku-website)
- [Example Demo Login](demo login)

### We started our personal project. **Go go go** ...

---

Notes collected during the last weeks:

``git push && git push heroku master`` --> this command is more usefull for do push in both places.

For link our database with our website:
- https://mlab.com/databases

For website configured add this commands

``heroku config:set NODE_ENV=production``

``heroku config:set DB_URI=mongodb://username:password@ds161048.mlab.com:61048/nameDB``

``mongo ds012345.mlab.com:56789/nameDB -u username -p password``

Useful tools for knowing:

- https://webpack.js.org/
- http://browserify.org/
    + Plugins:
        * ``watchify``
        * ``babelify``
            - For installing:
                + npm install babelify -dev --save
                + npm install browserify -dev --save

Useful commands for run in our CLI the project:

- ``mongod --dbpath c:\Users\username\data\db\``
- ``npm run dev``
- ``npm run build:scss:watch`` for SASS
- ``npm run build:js:watch`` for Browserify

