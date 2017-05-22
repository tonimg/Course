//  first project with mongodb
// install drive with npm install mongodb --save
var MongoClient = require('mongodb').MongoClient
  // is the same deconstruction
  // const { MongoClient } = require('mongodb');

// Connection URL
// var url = 'mongodb://localhost:27017/myproject';
var url = 'mongodb://localhost:27017/test'
  // Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to server')

  db.collection('users')
      .find() // return 'cursor'
      // .toArray((err, docs) => console.log(docs))
      .forEach(doc => console.log(doc))
  db.close()
})
  // previous to run the project run in console -> mongod --dbpath c:\Users\you_username\data\db\
  // for start the project with mongodb
