const mongoose = require('mongoose');
const collection = 'restaurants'

var RestaurantSchema = new mongoose.Schema({
  name: String,
  borough: String,
  cuisine: String,
  address: {
    building: String,
    street: String,
    zipcode: String,
    coord: [ Number ],
  },
  grades: [{
    date: Date,
    grade: String,
    score: Number
  }],
}, { collection })

module.exports = mongoose.model('Restaurant', RestaurantSchema);