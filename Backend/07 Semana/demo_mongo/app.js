//  first project with mongodb
// install drive with npm install mongodb --save
const { MongoClient } = require('mongodb')
// is the deconstruction

// Connection URL
// var url = 'mongodb://localhost:27017/myproject';
const url = 'mongodb://localhost:27017/test'

// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to server')

  db.collection('restaurants')
      .find({ 'cusine': 'American' }, { name: 1, cuisine: 1, 'grades.score': 1, _id: 0 }) // return 'cursor'
      .limit(20) // fixed a limited
      .toArray((err, docs) => {
        const myJsonResults = JSON.stringify(docs, null, 2)
        console.log(myJsonResults)
        db.close() // close the db
      })
      // .forEach(doc => console.log(doc))
})
  // previous to run the project run in console -> mongod --dbpath c:\Users\you_username\data\db\
  // for start the project with mongodb
