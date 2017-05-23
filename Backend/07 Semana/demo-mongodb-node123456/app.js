const express = require('express')
const { MongoClient } = require('mongodb')
const fs = require('fs')
const cycle = require('cycle')

const app = express()
const PORT = 3000

// Connection URL
const url = 'mongodb://localhost:27017/test' // test is the DB

// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {

  if (err) throw err
  console.log('Connected correctly to server')

  // http://localhost:3000/restaurants/cuisine/Spanish?show=name,cuisine
  // http://localhost:3000/restaurants/cuisine/Spanish?show=name,cuisine&hide=_id&limit=50
  // http://localhost:3000/restaurants/cuisine/Spanish?show=name,cuisine,borough,grades.score&hide=_id

  app.use( (req,res,next) => {

    const { api_key } = req.query

    if ( api_key === '12345' ) {
      next()
    }
    else {
      res.json({ msg: 'You shall not pass!!!'})
    }

  })

  app.use( (req,res,next) => {

    /** Extra Code: No le hagais mucho caso a esto -> Don't get mad! */
    const reqReadyToBeWritten = cycle.decycle(req), null, 2 )
    const reqStringified = JSON.stringify( reqReadyToBeWritten )
    fs.writeFileSync('request.json', reqStringified)
    /** @end Extra Code: Let the games begin! */

    const { show, hide, limit=20 } = req.query // "name,cuisine"

    let projection = {}

    if (show) {
      const fieldsProjection = show.split(',') // ["name","cuisine"]
      fieldsProjection.forEach( field => projection[field] = 1)
    }

    if (hide) {
      const fieldsProjection = hide.split(',') // ["name","cuisine"]
      fieldsProjection.forEach( field => projection[field] = 0)
    }

    req.projection = projection
    req.limit = limit

    next()

  })

  app.get('/restaurants/borough/:borough', (req,res) => {

    /** Extra Code: No le hagais mucho caso a esto -> Don't get mad! */
    const reqReadyToBeWritten = cycle.decycle(req), null, 2 )
    const reqStringified = JSON.stringify( reqReadyToBeWritten )
    fs.writeFileSync('request_augmented.json', reqStringified)
    /** @end Extra Code: Let the games begin! */

    const { projection, limit } = req
    const { borough } = req.params

    console.log("sdfsdfs");


  // db.users.find()
    db.collection('restaurants')
        .find({ borough }, projection ) // return 'cursor'
        .limit(+limit)
        .toArray( (err, docs) => {
          res.json(docs)
        })
        //.forEach(doc => console.log(doc))
        //
  })

  app.get('/restaurants/cuisine/:cuisine', (req,res) => {

    const { projection, limit } = req
    const { cuisine } = req.params

    // db.users.find()
    db.collection('restaurants')
        .find({ cuisine }, projection ) // return 'cursor'
        .limit(+limit)
        .toArray( (err, docs) => {
          res.json(docs)
        })
        //.forEach(doc => console.log(doc))
  })

})

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`) )
