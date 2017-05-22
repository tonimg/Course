# Today 17.05

## [Middleware](https://skylabcoders.github.io/bootcamp-abril2017/?full#222)

![express.js](img/express.js.png)

### [Middlewares](http://expressjs.com/en/guide/writing-middleware.html)


**[Middleware](https://es.wikipedia.org/wiki/Middleware)** --> (*lógica de intercambio de información entre aplicaciones*)

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.


*If the current ***middleware*** function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.*

![middleware](img/express-mw.png)

An Express application is essentially a series of middleware function calls. [How use the middleware](http://expressjs.com/en/guide/using-middleware.html).

Simple example Hello World:
```javascript
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
```

With **middleware** example will be:
```javascript
const express = require('express')
const app = express()
const PORT = 3000

// In this point there is a middleware point, the
//main difference is the next parameter and you last call
app.get('/', function (req, res, next) {
  console.log('I am a middleware')
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
```

Instead put the middleware into app.get will be put in app.use always throw for the middleware, for example.

```javascript
const express = require('express')
const app = express()
const PORT = 3000

app.use('/', function (req, res, next) {
  console.log('Middleware always happens here')
  next()
})

// In this point there is a middleware point, the
//main difference is the next parameter and you last call
app.get('/', function (req, res, next) {
  console.log('I am a middleware')
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
```


An Express application can use the following types of middleware:

- [Application-level middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.application)
- [Router-level middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.router)
- [Error-handling middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.error-handling)
- [Built-in middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.built-in)
- [Third-party middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.third-party)

### Sessions & Cookies w/ Express

- [Cookies y Sessions](http://codehero.co/nodejs-y-express-cookies-y-sesiones/)
    + [Cookies](https://www.codementor.io/nodejs/tutorial/cookie-management-in-express-js)
    + [Sessions](https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions) [[1](http://www.hacksparrow.com/sessions-in-express-js-node-js-web-framework.html)] [[2](http://www.hacksparrow.com/express-js-tutorial.html)]
- [Sessions](https://youtu.be/yvviEA1pOXw?t=31m42s)
- [express-session](https://github.com/expressjs/session) [[1](https://glebbahmutov.com/blog/express-sessions/)]
    + [secret](https://github.com/expressjs/session#secret) | [name](https://github.com/expressjs/session#name) | [cookie](https://github.com/expressjs/session#cookie)
- [cookie-parser](https://github.com/expressjs/cookie-parser)
- [Utilizar cookies de forma segura](http://expressjs.com/es/advanced/best-practice-security.html#utilizar-cookies-de-forma-segura)

[Demo sessions](https://github.com/juanmaguitar/demo-sessions)

Exercises:

- [Session Cookies](demo_session_cookies)
- [Session Cart](demo_session_cart)
- [Session Cart 2](demo_session_cart_2)
- [Sessions browser With Remove option](demo-sessions-browser)
- [Demo TodoList cookies](demo_TodoList_cookies)
- [Session with Expressworks practice](https://github.com/azat-co/expressworks) 
